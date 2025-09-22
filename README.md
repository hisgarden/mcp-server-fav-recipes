# MCP Server - Favorite Recipes

An MCP (Model Context Protocol) server that provides access to traditional recipes from different cuisines, along with meal planning capabilities.

## Features

- **Cuisine-based Recipe Resources**: Access recipes organized by cuisine (French, Thai, Italian, Mexican, Chinese, Vietnamese)
- **Weekly Meal Planner Prompt**: Generate meal plans and shopping lists from cuisine-specific recipes
- **Dynamic Resource Templates**: Composable resource URIs for different cuisines
- **Comprehensive Recipe Database**: Traditional recipes with detailed ingredients and instructions

## Supported Cuisines

- **French**: Coq au Vin, French Onion Soup, Crème Brûlée
- **Thai**: Pad Thai, Tom Yum Goong, Mango Sticky Rice
- **Italian**: Spaghetti Carbonara, Margherita Pizza, Tiramisu
- **Mexican**: Tacos al Pastor, Guacamole, Churros
- **Chinese**: Kung Pao Chicken, Char Siu (Chinese BBQ Pork), Egg Tarts (Dan Tat)
- **Vietnamese**: Pho Bo (Beef Noodle Soup), Banh Mi, Che Ba Mau (Three Color Dessert)

## Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

```sh
# Clone or navigate to the project directory
cd mcp-server-fav-recipes

# Install dependencies
npm install

# Build the project
npm run build
```

### Development

```sh
# Run in development mode with hot reload
npm run dev

# Run the built server
npm start

# Lint the code
npm run lint

# Clean build artifacts
npm run clean
```

## Usage

### As an MCP Server

The server provides two main capabilities:

1. **Recipe Resources**: Access recipes by cuisine
   - Resource URI: `file://recipes/{cuisine}`
   - Example: `file://recipes/French` for French recipes

2. **Weekly Meal Planner Prompt**: Generate meal plans
   - Prompt: `weekly-meal-planner`
   - Arguments: `cuisine` (completable with available cuisines)

### Example MCP Client Configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "favorite-recipes": {
      "command": "node",
      "args": ["/path/to/mcp-server-fav-recipes/dist/index.js"]
    }
  }
}
```

## API Reference

### Resources

- **`file://recipes/{cuisine}`**: Returns markdown-formatted recipes for the specified cuisine
  - Supported cuisines: French, Thai, Italian, Mexican, Chinese, Vietnamese
  - Returns: Complete recipe collection with ingredients and instructions

### Prompts

- **`weekly-meal-planner`**: Creates a comprehensive weekly meal plan
  - **Arguments**:
    - `cuisine` (string, completable): Target cuisine for meal planning
  - **Returns**: Meal plan with shopping list, daily schedule, and preparation tips

## Project Structure

```
src/
├── index.ts          # Main MCP server implementation
├── recipes.ts        # Recipe data and formatting utilities
dist/                 # Compiled JavaScript output
package.json          # Project configuration and dependencies
tsconfig.json         # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add new recipes or cuisines in `src/recipes.ts`
4. Test your changes with `npm run dev`
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
