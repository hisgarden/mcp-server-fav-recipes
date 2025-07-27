#!/usr/bin/env node

/**
 * MCP Server for favorite recipes with country-based resources and prompts
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  CompleteRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { COUNTRIES, RECIPES, formatRecipesAsMarkdown } from "./recipes.js";

class FavoriteRecipesServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: "favorite-recipes",
        version: "1.0.0",
      },
      {
        capabilities: {
          resources: {},
          prompts: {},
          completion: {},
        },
      }
    );

    this.setupHandlers();
  }

  private setupHandlers() {
    // List available resources
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      return {
        resources: COUNTRIES.map((country) => ({
          uri: `file://recipes/${country}`,
          name: `${country.charAt(0).toUpperCase() + country.slice(1)} Recipes`,
          mimeType: "text/markdown",
          description: `Traditional recipes from ${
            country.charAt(0).toUpperCase() + country.slice(1)
          } cuisine`,
        })),
      };
    });

    // Read a specific resource
    this.server.setRequestHandler(
      ReadResourceRequestSchema,
      async (request) => {
        const uri = request.params.uri;

        if (!uri.startsWith("file://recipes/")) {
          throw new Error(`Unknown resource: ${uri}`);
        }

        const country = uri.replace("file://recipes/", "");
        if (!COUNTRIES.includes(country)) {
          throw new Error(`Unknown country: ${country}`);
        }

        const content = formatRecipesAsMarkdown(country);

        return {
          contents: [
            {
              uri,
              mimeType: "text/markdown",
              text: content,
            },
          ],
        };
      }
    );

    // List available prompts
    this.server.setRequestHandler(ListPromptsRequestSchema, async () => {
      return {
        prompts: [
          {
            name: "weekly-meal-planner",
            description:
              "Create a weekly meal plan and grocery shopping list from country-specific recipes",
            arguments: [
              {
                name: "country",
                description: "The country cuisine to plan meals from",
                required: true,
              },
            ],
          },
        ],
      };
    });

    // Get a specific prompt with embedded resources
    this.server.setRequestHandler(GetPromptRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name !== "weekly-meal-planner") {
        throw new Error(`Unknown prompt: ${name}`);
      }

      if (!args || !args.country) {
        const available = COUNTRIES.join(", ");
        return {
          description: "Weekly meal planner",
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `Please specify a country to plan your weekly meals from the following options: ${available}`,
              },
            },
          ],
        };
      }

      const country = args.country.toLowerCase();
      if (!COUNTRIES.includes(country)) {
        const available = COUNTRIES.join(", ");
        return {
          description: "Weekly meal planner",
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `Sorry, I don't have recipes for '${country}'. Available countries: ${available}`,
              },
            },
          ],
        };
      }

      const resourceUri = `file://recipes/${country}`;
      const recipeContent = formatRecipesAsMarkdown(country);

      return {
        description: `Weekly meal planner for ${
          country.charAt(0).toUpperCase() + country.slice(1)
        } cuisine`,
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Plan cooking for the week. I've attached the recipes from ${
                country.charAt(0).toUpperCase() + country.slice(1)
              } cuisine.

Please create:
1. A 7-day meal plan using these recipes
2. An optimized grocery shopping list that minimizes waste by reusing ingredients across multiple recipes
3. Daily meal schedule with specific dishes for breakfast, lunch, and dinner
4. Preparation tips to make the week more efficient
5. Print Shopping list

Focus on ingredient overlap between recipes to reduce food waste.`,
            },
          },
          {
            role: "user",
            content: {
              type: "resource",
              resource: {
                uri: resourceUri,
                mimeType: "text/markdown",
                text: recipeContent,
              },
            },
          },
        ],
      };
    });

    // Handle completions for prompt arguments and resource template parameters
    this.server.setRequestHandler(CompleteRequestSchema, async (request) => {
      const { ref, argument } = request.params;

      // Handle resource template completions
      if (
        "uri" in ref &&
        ref.uri === "file://recipes/{country}" &&
        argument.name === "country"
      ) {
        const matchingCountries = COUNTRIES.filter((country) =>
          country.startsWith(argument.value.toLowerCase())
        );
        return {
          completion: {
            values: matchingCountries,
            hasMore: false,
          },
        };
      }

      // Handle prompt argument completions
      if (
        "name" in ref &&
        ref.name === "weekly-meal-planner" &&
        argument.name === "country"
      ) {
        const matchingCountries = COUNTRIES.filter((country) =>
          country.startsWith(argument.value.toLowerCase())
        );
        return {
          completion: {
            values: matchingCountries,
            hasMore: false,
          },
        };
      }

      return {
        completion: {
          values: [],
          hasMore: false,
        },
      };
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Favorite Recipes MCP Server running on stdio");
  }
}

const server = new FavoriteRecipesServer();
server.run().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
