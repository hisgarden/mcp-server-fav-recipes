#!/usr/bin/env node

/**
 * MCP Server for favorite recipes with cuisine-based resources and prompts
 */

import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { completable } from "@modelcontextprotocol/sdk/server/completable.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { CUISINES, formatRecipesAsMarkdown } from "./recipes.js";

// Create an MCP server
const server = new McpServer({
  name: "favorite-recipes",
  version: "1.0.0",
});

// Register a dynamic resource template for recipes
server.registerResource(
  "recipes",
  new ResourceTemplate("file://recipes/{cuisine}", {
    list: undefined,
    complete: {
      cuisine: (value) => {
        return CUISINES.filter((cuisine) => cuisine.startsWith(value));
      },
    },
  }),
  {
    title: "Cuisine-Specific Recipes",
    description: "Traditional recipes organized by cuisine",
  },
  async (uri, variables, _extra) => {
    const cuisine = variables.cuisine as string;

    if (!CUISINES.includes(cuisine)) {
      throw new Error(`Unknown cuisine: ${cuisine}`);
    }

    const content = formatRecipesAsMarkdown(cuisine);
    return {
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: content,
        },
      ],
    };
  }
);

// Register the weekly meal planner prompt
server.registerPrompt(
  "weekly-meal-planner",
  {
    title: "Weekly Meal Planner",
    description:
      "Create a weekly meal plan and grocery shopping list from cuisine-specific recipes",
    argsSchema: {
      cuisine: completable(z.string(), (value) => {
        return CUISINES.filter((cuisine) => cuisine.startsWith(value));
      }),
    },
  },
  async ({ cuisine }) => {
    const resourceUri = `file://recipes/${cuisine}`;
    const recipeContent = formatRecipesAsMarkdown(cuisine);

    return {
      title: `Weekly Meal Planner - ${cuisine} Cuisine`,
      description: `Weekly meal planner for ${cuisine} cuisine`,
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Plan cooking for the week. I've attached the recipes from ${cuisine} cuisine.

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
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
