# Setting up MCP Server with Cursor

This guide will help you integrate the Favorite Recipes MCP server with Cursor IDE.

## ✅ Server Status

The MCP server has been tested and is working correctly:
- ✅ Server starts without errors
- ✅ All 7 cuisines (French, Thai, Italian, Mexican, Chinese, Vietnamese, Japanese) are available
- ✅ Recipe formatting is working properly
- ✅ Weekly meal planner prompt is ready

## 🔧 Cursor Configuration

### Step 1: Locate Cursor Settings

1. Open Cursor IDE
2. Go to **Settings** (Cmd/Ctrl + ,)
3. Navigate to **Features** → **Model Context Protocol**

### Step 2: Add MCP Server Configuration

Add the following configuration to your Cursor MCP settings:

```json
{
  "mcpServers": {
    "favorite-recipes": {
      "command": "node",
      "args": ["/Users/jwen/workspace/ml/MCP/mcp-server-fav-recipes/dist/index.js"],
      "env": {}
    }
  }
}
```

### Step 3: Restart Cursor

After adding the configuration, restart Cursor to load the MCP server.

## 🎯 Available Features

### Recipe Resources

Access traditional recipes by cuisine using these resource URIs:

- `file://recipes/French` - French cuisine recipes
- `file://recipes/Thai` - Thai cuisine recipes  
- `file://recipes/Italian` - Italian cuisine recipes
- `file://recipes/Mexican` - Mexican cuisine recipes
- `file://recipes/Chinese` - Chinese cuisine recipes
- `file://recipes/Vietnamese` - Vietnamese cuisine recipes
- `file://recipes/Japanese` - Japanese cuisine recipes

### Weekly Meal Planner Prompt

Use the `weekly-meal-planner` prompt with a cuisine argument to generate:
- 7-day meal plan
- Optimized grocery shopping list
- Daily meal schedule
- Preparation tips
- Ingredient overlap optimization

## 🧪 Testing the Integration

### Test Recipe Access

Try asking Cursor:
> "Show me the French recipes from the MCP server"

### Test Meal Planning

Try asking Cursor:
> "Use the weekly meal planner prompt for Italian cuisine"

## 📋 Example Usage

Once configured, you can use the MCP server in your conversations with Cursor:

1. **Access specific cuisine recipes:**
   - "What French recipes are available?"
   - "Show me the ingredients for Chicken Tikka Masala"

2. **Generate meal plans:**
   - "Create a weekly meal plan using Mexican recipes"
   - "Plan my meals for the week with Italian cuisine"

3. **Get cooking guidance:**
   - "How do I make Crème Brûlée?"
   - "What's the recipe for authentic Tacos al Pastor?"

## 🔍 Troubleshooting

### Server Not Loading

1. Verify the path in the configuration is correct
2. Ensure the server is built: `npm run build`
3. Check Cursor's developer console for errors

### Resources Not Found

1. Confirm the server is running in Cursor's MCP panel
2. Try restarting Cursor
3. Check that the resource URI format is correct

### Permission Issues

If you encounter permission issues:
```sh
chmod +x /Users/jwen/workspace/ml/MCP/mcp-server-fav-recipes/dist/index.js
```

## 🚀 Advanced Usage

### Custom Cuisine Addition

To add new cuisines:
1. Edit `src/recipes.ts`
2. Add new recipes to the `RECIPES` object
3. Rebuild: `npm run build`
4. Restart Cursor

### Development Mode

For development with hot reload:
```sh
npm run dev
```

Then update the Cursor config to use:
```json
"args": ["/Users/jwen/workspace/ml/MCP/mcp-server-fav-recipes/src/index.ts"]
```

## 📞 Support

If you encounter any issues:
1. Check the test output: `node test-mcp.js`
2. Verify the server path is correct
3. Ensure Node.js 18+ is installed
4. Check Cursor's MCP server status in settings

---

**Ready to cook! 🍳** Your MCP server is now integrated with Cursor and ready to help with meal planning and recipe access.

