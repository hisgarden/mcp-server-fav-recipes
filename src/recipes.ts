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
  French: [
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
  ],
  Thai: [
    {
      name: "Pad Thai",
      type: "Main Course",
      ingredients: [
        "8 oz rice noodles",
        "2 tbsp vegetable oil",
        "2 cloves garlic, minced",
        "1/2 lb shrimp, peeled and deveined",
        "2 eggs, beaten",
        "2 tbsp fish sauce",
        "2 tbsp tamarind paste",
        "2 tbsp palm sugar",
        "1 tbsp lime juice",
        "1/2 cup bean sprouts",
        "2 green onions, chopped",
        "1/4 cup roasted peanuts, chopped",
        "1 lime, cut into wedges",
        "Fresh cilantro for garnish"
      ],
      instructions: [
        "Soak rice noodles in warm water for 30 minutes until soft",
        "Heat oil in wok over high heat",
        "Add garlic and stir-fry until fragrant",
        "Add shrimp and cook until pink",
        "Push shrimp to one side, add beaten eggs",
        "Scramble eggs, then mix with shrimp",
        "Add drained noodles and sauce mixture",
        "Toss everything together until noodles are coated",
        "Add bean sprouts and green onions",
        "Garnish with peanuts, lime wedges, and cilantro"
      ]
    },
    {
      name: "Tom Yum Goong",
      type: "Appetizer",
      ingredients: [
        "4 cups chicken or shrimp stock",
        "2 stalks lemongrass, bruised and cut into 2-inch pieces",
        "3 kaffir lime leaves",
        "3 slices galangal",
        "2-3 Thai chilies, crushed",
        "1/2 lb shrimp, peeled and deveined",
        "1 cup mushrooms, sliced",
        "2 tbsp fish sauce",
        "2 tbsp lime juice",
        "1 tsp sugar",
        "Fresh cilantro for garnish"
      ],
      instructions: [
        "Bring stock to boil in a large pot",
        "Add lemongrass, lime leaves, galangal, and chilies",
        "Simmer for 5 minutes to infuse flavors",
        "Add shrimp and mushrooms",
        "Cook until shrimp turn pink",
        "Season with fish sauce, lime juice, and sugar",
        "Taste and adjust seasoning",
        "Garnish with fresh cilantro",
        "Serve hot"
      ]
    },
    {
      name: "Mango Sticky Rice",
      type: "Dessert",
      ingredients: [
        "1 cup glutinous rice",
        "1 cup coconut milk",
        "1/2 cup sugar",
        "1/2 tsp salt",
        "2 ripe mangoes, sliced",
        "2 tbsp toasted sesame seeds",
        "Fresh mint leaves for garnish"
      ],
      instructions: [
        "Soak glutinous rice in water for 2 hours",
        "Steam rice for 20-25 minutes until tender",
        "Heat coconut milk with sugar and salt",
        "Pour hot coconut milk over cooked rice",
        "Let rice absorb the coconut milk for 10 minutes",
        "Arrange sliced mangoes on serving plates",
        "Scoop sticky rice next to mangoes",
        "Drizzle with remaining coconut milk",
        "Garnish with sesame seeds and mint leaves"
      ]
    }
  ],
  Italian: [
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
  Mexican: [
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
  Chinese: [
    {
      name: "Kung Pao Chicken",
      type: "Main Course",
      ingredients: [
        "1 lb chicken breast, diced",
        "2 tbsp soy sauce",
        "1 tbsp rice wine",
        "1 tsp cornstarch",
        "2 tbsp vegetable oil",
        "6-8 dried red chilies",
        "1 tbsp Sichuan peppercorns",
        "3 garlic cloves, minced",
        "1 inch ginger, minced",
        "1 bell pepper, diced",
        "1/2 cup roasted peanuts",
        "2 tbsp hoisin sauce",
        "1 tbsp dark soy sauce",
        "1 tsp sugar",
        "2 green onions, chopped"
      ],
      instructions: [
        "Marinate chicken with soy sauce, rice wine, and cornstarch for 15 minutes",
        "Heat oil in wok over high heat",
        "Add dried chilies and Sichuan peppercorns, stir-fry until fragrant",
        "Add chicken and stir-fry until cooked through",
        "Add garlic, ginger, and bell pepper",
        "Stir-fry for 2-3 minutes",
        "Add peanuts and sauce mixture",
        "Toss everything together and garnish with green onions"
      ]
    },
    {
      name: "Char Siu (Chinese BBQ Pork)",
      type: "Main Course",
      ingredients: [
        "2 lbs pork shoulder or tenderloin",
        "3 tbsp hoisin sauce",
        "2 tbsp soy sauce",
        "2 tbsp honey",
        "1 tbsp rice wine",
        "1 tbsp five-spice powder",
        "2 garlic cloves, minced",
        "1 inch ginger, minced",
        "1 tbsp red food coloring (optional)",
        "2 tbsp vegetable oil"
      ],
      instructions: [
        "Cut pork into long strips about 2 inches wide",
        "Mix all marinade ingredients in a bowl",
        "Coat pork strips with marinade and refrigerate overnight",
        "Preheat oven to 400°F (200°C)",
        "Place pork on wire rack over baking sheet",
        "Roast for 20 minutes, then reduce heat to 350°F (175°C)",
        "Continue roasting for 30-40 minutes, basting with marinade",
        "Let rest 10 minutes before slicing"
      ]
    },
    {
      name: "Egg Tarts (Dan Tat)",
      type: "Dessert",
      ingredients: [
        "1 cup all-purpose flour",
        "1/2 cup butter, cold and cubed",
        "1/4 cup ice water",
        "1/2 tsp salt",
        "4 large eggs",
        "1/2 cup sugar",
        "1 1/2 cups milk",
        "1 tsp vanilla extract"
      ],
      instructions: [
        "Make pastry: mix flour and salt, cut in butter until crumbly",
        "Add ice water gradually until dough forms",
        "Chill dough for 30 minutes",
        "Roll out and cut into circles for tart shells",
        "Preheat oven to 400°F (200°C)",
        "Make custard: whisk eggs, sugar, milk, and vanilla",
        "Strain custard mixture",
        "Fill tart shells with custard",
        "Bake for 15-20 minutes until custard is set",
        "Cool before serving"
      ]
    }
  ],
  Vietnamese: [
    {
      name: "Pho Bo (Beef Noodle Soup)",
      type: "Main Course",
      ingredients: [
        "2 lbs beef bones",
        "1 lb beef brisket or flank steak",
        "1 large onion, halved",
        "3-inch piece ginger, sliced",
        "5 star anise pods",
        "1 cinnamon stick",
        "3 cloves",
        "1 cardamom pod",
        "1 tbsp coriander seeds",
        "1 tbsp fennel seeds",
        "8 cups water",
        "2 tbsp fish sauce",
        "1 tbsp sugar",
        "1 lb rice noodles",
        "Bean sprouts",
        "Thai basil leaves",
        "Lime wedges",
        "Sliced jalapeños",
        "Hoisin sauce",
        "Sriracha sauce"
      ],
      instructions: [
        "Char onion and ginger over open flame or in broiler",
        "Toast spices in dry pan until fragrant",
        "Simmer beef bones in water for 2-3 hours",
        "Add charred onion, ginger, and spices",
        "Simmer for another hour",
        "Strain broth and season with fish sauce and sugar",
        "Slice beef thinly against the grain",
        "Cook rice noodles according to package directions",
        "Arrange noodles in bowls with raw beef slices",
        "Pour hot broth over beef to cook it",
        "Serve with herbs, sprouts, lime, and sauces"
      ]
    },
    {
      name: "Banh Mi",
      type: "Main Course",
      ingredients: [
        "1 baguette or Vietnamese bread",
        "1/2 lb pork belly or grilled pork",
        "1/4 cup mayonnaise",
        "2 tbsp pâté",
        "1 cucumber, julienned",
        "2 carrots, julienned",
        "1 daikon radish, julienned",
        "1/4 cup rice vinegar",
        "1 tbsp sugar",
        "1/2 tsp salt",
        "Fresh cilantro",
        "Fresh jalapeños, sliced",
        "Soy sauce",
        "Maggi seasoning"
      ],
      instructions: [
        "Pickle vegetables: mix carrots, daikon with vinegar, sugar, and salt",
        "Let vegetables marinate for 30 minutes",
        "Slice baguette lengthwise, leaving one side attached",
        "Spread mayonnaise and pâté on bread",
        "Layer pork belly or grilled pork",
        "Add pickled vegetables",
        "Top with cilantro and jalapeños",
        "Drizzle with soy sauce and Maggi seasoning",
        "Close sandwich and serve immediately"
      ]
    },
    {
      name: "Che Ba Mau (Three Color Dessert)",
      type: "Dessert",
      ingredients: [
        "1/2 cup mung beans",
        "1/2 cup red beans",
        "1/2 cup black-eyed peas",
        "1/2 cup coconut milk",
        "1/4 cup sugar",
        "1/4 tsp salt",
        "1/2 cup tapioca pearls",
        "1/2 cup grass jelly, cubed",
        "Crushed ice",
        "Coconut cream for topping"
      ],
      instructions: [
        "Soak all beans separately overnight",
        "Cook each type of bean until soft",
        "Sweeten beans with sugar while warm",
        "Cook tapioca pearls until translucent",
        "Prepare coconut milk with sugar and salt",
        "Layer beans in serving glasses",
        "Add tapioca pearls and grass jelly",
        "Top with crushed ice",
        "Pour coconut milk over everything",
        "Drizzle with coconut cream",
        "Serve chilled"
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

  let markdown = `# ${cuisine} Recipes\n\n`;
  
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