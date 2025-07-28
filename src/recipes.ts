/**
 * Recipe data for different cuisines
 */

export interface Recipe {
  name: string;
  type: string;
  ingredients: string[];
  instructions: string[];
}

export interface CuisineRecipes {
  [cuisine: string]: Recipe[];
}

export const RECIPES: CuisineRecipes = {
  italian: [
    {
      name: "Spaghetti Carbonara",
      type: "Main Course",
      ingredients: [
        "400g spaghetti",
        "200g guanciale or pancetta, diced",
        "4 large eggs",
        "100g Pecorino Romano cheese, grated",
        "Black pepper",
        "Salt"
      ],
      instructions: [
        "Cook spaghetti in salted boiling water until al dente",
        "Meanwhile, cook guanciale in a large pan until crispy",
        "Whisk eggs with grated cheese and black pepper",
        "Drain pasta, reserving pasta water",
        "Add hot pasta to the pan with guanciale",
        "Remove from heat and quickly mix in egg mixture",
        "Add pasta water if needed to create creamy sauce",
        "Serve immediately with extra cheese and pepper"
      ]
    },
    {
      name: "Margherita Pizza",
      type: "Main Course",
      ingredients: [
        "Pizza dough",
        "200ml tomato sauce",
        "250g fresh mozzarella",
        "Fresh basil leaves",
        "Extra virgin olive oil",
        "Salt"
      ],
      instructions: [
        "Preheat oven to 250°C (480°F)",
        "Roll out pizza dough on floured surface",
        "Spread tomato sauce evenly",
        "Add torn mozzarella pieces",
        "Drizzle with olive oil and sprinkle salt",
        "Bake for 10-12 minutes until crust is golden",
        "Top with fresh basil leaves before serving"
      ]
    },
    {
      name: "Tiramisu",
      type: "Dessert",
      ingredients: [
        "6 egg yolks",
        "75g sugar",
        "500g mascarpone",
        "300ml strong coffee, cooled",
        "3 tbsp coffee liqueur",
        "2 packages ladyfinger cookies",
        "Cocoa powder for dusting"
      ],
      instructions: [
        "Whisk egg yolks and sugar until thick and pale",
        "Add mascarpone and mix until smooth",
        "Combine coffee and liqueur in shallow dish",
        "Quickly dip each ladyfinger in coffee mixture",
        "Layer soaked cookies in dish",
        "Spread half the mascarpone mixture over cookies",
        "Repeat layers ending with mascarpone",
        "Refrigerate 4 hours or overnight",
        "Dust with cocoa powder before serving"
      ]
    }
  ],
  mexican: [
    {
      name: "Tacos al Pastor",
      type: "Main Course",
      ingredients: [
        "2 lbs pork shoulder, sliced thin",
        "3 dried guajillo chiles",
        "2 dried ancho chiles",
        "1 chipotle chile in adobo",
        "1 pineapple, peeled and cored",
        "1 white onion, quartered",
        "4 garlic cloves",
        "Corn tortillas",
        "White onion, diced",
        "Cilantro, chopped",
        "Lime wedges"
      ],
      instructions: [
        "Toast dried chiles in dry pan until fragrant",
        "Soak chiles in hot water for 20 minutes",
        "Blend chiles with garlic, onion, and pineapple juice",
        "Marinate pork in chile mixture for 2+ hours",
        "Cook pork on hot griddle until charred",
        "Warm tortillas on griddle",
        "Fill tortillas with pork, diced onion, cilantro",
        "Serve with lime wedges and grilled pineapple"
      ]
    },
    {
      name: "Guacamole",
      type: "Appetizer",
      ingredients: [
        "3 ripe avocados",
        "1 lime, juiced",
        "1 small onion, finely diced",
        "2 Roma tomatoes, seeded and diced",
        "2-3 jalapeño peppers, minced",
        "3 garlic cloves, minced",
        "3 tbsp cilantro, chopped",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Cut avocados in half, remove pits",
        "Scoop flesh into mixing bowl",
        "Mash avocados with fork, leaving some chunks",
        "Add lime juice immediately to prevent browning",
        "Fold in onion, tomatoes, jalapeños, garlic",
        "Add cilantro and season with salt and pepper",
        "Taste and adjust seasoning",
        "Serve immediately with tortilla chips"
      ]
    },
    {
      name: "Churros",
      type: "Dessert",
      ingredients: [
        "1 cup water",
        "2.5 tbsp sugar",
        "0.5 tsp salt",
        "2 tbsp vegetable oil",
        "1 cup all-purpose flour",
        "2 eggs",
        "Oil for frying",
        "Cinnamon sugar for coating"
      ],
      instructions: [
        "Heat water, sugar, salt, and oil in saucepan",
        "Remove from heat and stir in flour until smooth",
        "Beat in eggs one at a time",
        "Heat oil to 375°F (190°C)",
        "Pipe dough through star tip into hot oil",
        "Fry until golden brown, turning once",
        "Drain on paper towels",
        "Roll in cinnamon sugar while warm"
      ]
    }
  ],
  indian: [
    {
      name: "Chicken Tikka Masala",
      type: "Main Course",
      ingredients: [
        "2 lbs chicken breast, cubed",
        "1 cup yogurt",
        "2 tbsp lemon juice",
        "2 tsp garam masala",
        "1 tsp cumin",
        "1 tsp coriander",
        "1 tsp paprika",
        "2 tbsp tomato paste",
        "1 can crushed tomatoes",
        "1 cup heavy cream",
        "2 onions, diced",
        "4 garlic cloves, minced",
        "2 tbsp ginger, minced",
        "Basmati rice"
      ],
      instructions: [
        "Marinate chicken in yogurt, lemon juice, and spices for 2+ hours",
        "Thread chicken onto skewers and grill until cooked",
        "Sauté onions until golden, add garlic and ginger",
        "Add tomato paste and cook 1 minute",
        "Add crushed tomatoes and simmer 10 minutes",
        "Stir in cream and grilled chicken",
        "Simmer until sauce thickens",
        "Serve over basmati rice with naan bread"
      ]
    },
    {
      name: "Samosas",
      type: "Appetizer",
      ingredients: [
        "2 cups all-purpose flour",
        "4 tbsp oil",
        "1 tsp salt",
        "Water as needed",
        "3 potatoes, boiled and diced",
        "1 cup green peas",
        "1 onion, finely chopped",
        "2 tsp cumin seeds",
        "1 tsp coriander seeds",
        "1 tsp garam masala",
        "Oil for deep frying"
      ],
      instructions: [
        "Make dough with flour, oil, salt, and water",
        "Rest dough for 30 minutes",
        "Heat oil in pan, add cumin and coriander seeds",
        "Add onions, cook until translucent",
        "Add potatoes, peas, and spices",
        "Cook filling until well combined",
        "Roll dough thin, cut into circles",
        "Fill and fold into triangular parcels",
        "Deep fry until golden and crispy"
      ]
    },
    {
      name: "Mango Lassi",
      type: "Dessert",
      ingredients: [
        "1 ripe mango, peeled and chopped",
        "1 cup plain yogurt",
        "0.5 cup milk",
        "2-3 tbsp sugar",
        "0.25 tsp cardamom powder",
        "Ice cubes",
        "Pistachios for garnish"
      ],
      instructions: [
        "Blend mango, yogurt, milk, and sugar until smooth",
        "Add cardamom powder and blend again",
        "Taste and adjust sweetness",
        "Add ice cubes and blend until frothy",
        "Pour into glasses",
        "Garnish with chopped pistachios",
        "Serve chilled"
      ]
    }
  ],
  french: [
    {
      name: "Coq au Vin",
      type: "Main Course",
      ingredients: [
        "1 whole chicken, cut into pieces",
        "750ml red wine",
        "200g bacon, diced",
        "12 pearl onions",
        "250g mushrooms, quartered",
        "3 garlic cloves, minced",
        "2 bay leaves",
        "Fresh thyme",
        "2 tbsp flour",
        "2 tbsp butter",
        "Salt and pepper"
      ],
      instructions: [
        "Marinate chicken pieces in red wine overnight",
        "Remove chicken, reserve wine",
        "Cook bacon until crispy, remove and set aside",
        "Brown chicken pieces in bacon fat",
        "Add flour and cook 1 minute",
        "Gradually add reserved wine",
        "Add herbs, onions, and mushrooms",
        "Simmer covered for 45 minutes",
        "Finish with butter and season to taste"
      ]
    },
    {
      name: "French Onion Soup",
      type: "Appetizer",
      ingredients: [
        "6 large onions, thinly sliced",
        "4 tbsp butter",
        "6 cups beef broth",
        "0.5 cup dry white wine",
        "2 bay leaves",
        "Fresh thyme",
        "Salt and pepper",
        "French bread slices",
        "Gruyère cheese, grated"
      ],
      instructions: [
        "Cook onions in butter over low heat for 45 minutes",
        "Add wine and cook until reduced",
        "Add broth, bay leaves, and thyme",
        "Simmer 30 minutes",
        "Season with salt and pepper",
        "Ladle into oven-safe bowls",
        "Top with bread and cheese",
        "Broil until cheese is bubbly and golden"
      ]
    },
    {
      name: "Crème Brûlée",
      type: "Dessert",
      ingredients: [
        "2 cups heavy cream",
        "1 vanilla bean, split and scraped",
        "5 egg yolks",
        "0.33 cup sugar, plus extra for topping",
        "Torch for caramelizing"
      ],
      instructions: [
        "Heat cream with vanilla bean and seeds",
        "Whisk egg yolks with sugar until pale",
        "Slowly add hot cream to egg mixture",
        "Strain mixture to remove lumps",
        "Pour into ramekins",
        "Bake in water bath at 325°F for 35-40 minutes",
        "Chill for at least 2 hours",
        "Sprinkle sugar on top and torch until caramelized"
      ]
    }
  ]
};

export const CUISINES = Object.keys(RECIPES);

export function formatRecipesAsMarkdown(cuisine: string): string {
  const recipes = RECIPES[cuisine];
  if (!recipes) {
    return `No recipes found for ${cuisine}`;
  }

  let markdown = `# ${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Recipes\n\n`;
  
  for (const recipe of recipes) {
    markdown += `## ${recipe.name}\n`;
    markdown += `**Type:** ${recipe.type}\n\n`;
    markdown += `**Ingredients:**\n`;
    for (const ingredient of recipe.ingredients) {
      markdown += `- ${ingredient}\n`;
    }
    markdown += `\n**Recipe:**\n`;
    for (let i = 0; i < recipe.instructions.length; i++) {
      markdown += `${i + 1}. ${recipe.instructions[i]}\n`;
    }
    markdown += `\n`;
  }
  
  return markdown;
}