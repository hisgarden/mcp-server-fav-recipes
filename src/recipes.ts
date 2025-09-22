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
      name: "🍷 Coq au Vin",
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
      name: "🧅 French Onion Soup",
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
      name: "🍮 Crème Brûlée",
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
      name: "🍝 Pad Thai",
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
      name: "🦐 Tom Yum Goong",
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
      name: "🥭 Mango Sticky Rice",
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
      name: "🍝 Spaghetti Carbonara",
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
      name: "🍕 Margherita Pizza",
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
      name: "☕ Tiramisu",
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
      name: "🌮 Tacos al Pastor",
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
      name: "🥑 Guacamole",
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
      name: "🍩 Churros",
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
      name: "🥢 Kung Pao Chicken (宫保鸡丁)",
      type: "Main Course",
      ingredients: [
        "1 lb chicken breast, diced (鸡胸肉)",
        "2 tbsp soy sauce (生抽)",
        "1 tbsp rice wine (料酒)",
        "1 tsp cornstarch (生粉)",
        "2 tbsp vegetable oil (植物油)",
        "6-8 dried red chilies (干辣椒)",
        "1 tbsp Sichuan peppercorns (花椒)",
        "3 garlic cloves, minced (蒜蓉)",
        "1 inch ginger, minced (姜蓉)",
        "1 bell pepper, diced (甜椒)",
        "1/2 cup roasted peanuts (花生米)",
        "2 tbsp hoisin sauce (海鲜酱)",
        "1 tbsp dark soy sauce (老抽)",
        "1 tsp sugar (糖)",
        "2 green onions, chopped (葱花)"
      ],
      instructions: [
        "Prepare chicken using Cantonese 'velveting' technique: marinate diced chicken with soy sauce, rice wine, and cornstarch for 15 minutes",
        "Heat wok over high heat until smoking hot (wok hei technique)",
        "Add oil and swirl to coat wok surface completely",
        "Add dried chilies and Sichuan peppercorns, stir-fry until fragrant (about 30 seconds)",
        "Add chicken and stir-fry using 'chao' technique - quick tossing motions until 80% cooked",
        "Push ingredients to sides of wok, add garlic and ginger to center",
        "Add bell pepper and continue stir-frying with rapid tossing motions",
        "Create sauce mixture: combine hoisin sauce, dark soy sauce, and sugar",
        "Add sauce mixture and peanuts, toss everything together quickly",
        "Finish with green onions and serve immediately while hot (Cantonese tradition)"
      ]
    },
    {
      name: "🥩 Char Siu (叉烧) - Chinese BBQ Pork",
      type: "Main Course",
      ingredients: [
        "2 lbs pork shoulder or tenderloin (猪肉)",
        "3 tbsp hoisin sauce (海鲜酱)",
        "2 tbsp soy sauce (生抽)",
        "2 tbsp honey (蜂蜜)",
        "1 tbsp rice wine (料酒)",
        "1 tbsp five-spice powder (五香粉)",
        "2 garlic cloves, minced (蒜蓉)",
        "1 inch ginger, minced (姜蓉)",
        "1 tbsp red food coloring (optional) (红曲粉)",
        "2 tbsp vegetable oil (植物油)"
      ],
      instructions: [
        "Cut pork into long strips about 2 inches wide (traditional Cantonese char siu shape)",
        "Prepare marinade using traditional Cantonese method: mix hoisin sauce, soy sauce, honey, rice wine, five-spice powder, garlic, and ginger",
        "Score pork strips lightly on both sides to help marinade penetrate",
        "Coat pork strips thoroughly with marinade and refrigerate overnight (minimum 8 hours for authentic flavor)",
        "Preheat oven to 400°F (200°C) - high initial heat for Cantonese-style char siu",
        "Place pork on wire rack over baking sheet to allow air circulation",
        "Roast for 20 minutes to develop caramelized exterior, then reduce heat to 350°F (175°C)",
        "Continue roasting for 30-40 minutes, basting with marinade every 10 minutes",
        "Final basting: brush with honey for authentic Cantonese glaze",
        "Let rest 10 minutes before slicing against the grain (Cantonese tradition)"
      ]
    },
    {
      name: "🥧 Egg Tarts (蛋挞)",
      type: "Dessert",
      ingredients: [
        "1 cup all-purpose flour (面粉)",
        "1/2 cup butter, cold and cubed (黄油)",
        "1/4 cup ice water (冰水)",
        "1/2 tsp salt (盐)",
        "4 large eggs (鸡蛋)",
        "1/2 cup sugar (糖)",
        "1 1/2 cups milk (牛奶)",
        "1 tsp vanilla extract (香草精)"
      ],
      instructions: [
        "Make pastry using Cantonese 'laminated' technique: mix flour and salt, cut in cold butter until crumbly",
        "Add ice water gradually until dough just comes together (don't overwork - Cantonese pastry principle)",
        "Chill dough for 30 minutes to relax gluten (essential for flaky Cantonese pastry)",
        "Roll out dough to 1/8 inch thickness and cut into circles for tart shells",
        "Preheat oven to 400°F (200°C) - high heat for authentic Cantonese egg tarts",
        "Make custard using traditional Cantonese method: whisk eggs gently with sugar until dissolved",
        "Add warm milk gradually while whisking (prevents curdling - Cantonese technique)",
        "Strain custard mixture through fine sieve for silky smooth texture",
        "Fill tart shells 3/4 full with custard (Cantonese tradition)",
        "Bake for 15-20 minutes until custard is set but still slightly jiggly in center",
        "Cool on wire rack before serving (allows pastry to crisp properly)"
      ]
    },
    {
      name: "🍜 Beef Noodle Soup (台湾牛肉面)",
      type: "Main Course",
      ingredients: [
        "2 lbs beef shank or brisket, cut into chunks (牛肉)",
        "1 lb fresh wheat noodles (面条)",
        "4 cups beef broth (牛肉汤)",
        "2 cups water (水)",
        "3 tbsp soy sauce (生抽)",
        "2 tbsp dark soy sauce (老抽)",
        "2 tbsp rice wine (料酒)",
        "1 tbsp sugar (糖)",
        "1 tbsp doubanjiang (fermented bean paste) (豆瓣酱)",
        "1 large onion, quartered (洋葱)",
        "4 garlic cloves, smashed (蒜瓣)",
        "2-inch piece ginger, sliced (姜片)",
        "2 star anise (八角)",
        "1 cinnamon stick (桂皮)",
        "1 tsp Sichuan peppercorns (花椒)",
        "2 green onions, cut into 2-inch pieces (葱段)",
        "1 bunch bok choy or Chinese cabbage (白菜)",
        "Pickled mustard greens for garnish (酸菜)",
        "Cilantro for garnish (香菜)"
      ],
      instructions: [
        "Blanch beef chunks in boiling water for 5 minutes using Cantonese 'chui' technique, then rinse thoroughly",
        "Heat oil in large pot over medium-high heat, add onion, garlic, and ginger",
        "Add doubanjiang and stir-fry until fragrant (about 1 minute - Cantonese 'bao' technique)",
        "Add beef chunks and brown on all sides using 'chao' technique",
        "Add soy sauces, rice wine, sugar, and spices, stir to combine",
        "Pour in broth and water, bring to rolling boil then reduce to gentle simmer",
        "Simmer for 2-3 hours until beef is fork-tender (Cantonese slow-cooking tradition)",
        "Cook noodles according to package directions, rinse under cold water to stop cooking",
        "Blanch bok choy in the soup for 30 seconds (Cantonese 'chui' technique for vegetables)",
        "Serve noodles in bowls with beef and hot broth",
        "Garnish with pickled mustard greens and cilantro (traditional Cantonese finishing touch)"
      ]
    },
    {
      name: "🧋 Bubble Tea (珍珠奶茶)",
      type: "Beverage",
      ingredients: [
        "1/2 cup tapioca pearls (boba) (珍珠)",
        "2 cups water (水)",
        "1/4 cup brown sugar (红糖)",
        "2 cups strong black tea, chilled (红茶)",
        "1/2 cup milk or non-dairy milk (牛奶)",
        "2 tbsp simple syrup (糖浆)",
        "Ice cubes (冰块)"
      ],
      instructions: [
        "Cook tapioca pearls in boiling water for 15-20 minutes",
        "Drain and rinse pearls under cold water",
        "Make brown sugar syrup by heating brown sugar with 2 tbsp water",
        "Add cooked pearls to syrup and let soak for 10 minutes",
        "Brew strong black tea and chill completely",
        "Add simple syrup to taste",
        "Fill glass with ice cubes",
        "Add brown sugar pearls to bottom of glass",
        "Pour tea over ice, leaving room for milk",
        "Add milk and stir gently",
        "Serve with wide straw for drinking pearls"
      ]
    },
    {
      name: "🦪 Oyster Omelette (蚵仔煎)",
      type: "Main Course",
      ingredients: [
        "1 cup fresh oysters, cleaned (生蚝)",
        "4 large eggs (鸡蛋)",
        "1/2 cup sweet potato starch (地瓜粉)",
        "1/4 cup water (水)",
        "2 tbsp vegetable oil (植物油)",
        "2 cloves garlic, minced (蒜蓉)",
        "1/2 cup bean sprouts (豆芽)",
        "2 green onions, chopped (葱花)",
        "1 tbsp soy sauce (生抽)",
        "1 tsp sesame oil (香油)",
        "Cilantro for garnish (香菜)",
        "Sweet chili sauce for serving (甜辣酱)"
      ],
      instructions: [
        "Mix sweet potato starch with water to make smooth batter (Cantonese 'ho' technique for even consistency)",
        "Heat oil in large non-stick pan over medium-high heat until shimmering",
        "Add garlic and stir-fry until fragrant using 'bao' technique (about 30 seconds)",
        "Add oysters and cook for 1 minute, stirring gently to avoid breaking",
        "Pour batter over oysters and spread evenly using circular motions",
        "Beat eggs lightly and pour over the batter in a spiral pattern",
        "Add bean sprouts and green onions, distributing evenly",
        "Cook until bottom is golden and crispy (about 3-4 minutes)",
        "Flip carefully using two spatulas (Cantonese 'fan' technique)",
        "Cook other side until golden and crispy",
        "Drizzle with soy sauce and sesame oil in final moments",
        "Garnish with cilantro and serve immediately with sweet chili sauce"
      ]
    }
  ],
  Vietnamese: [
    {
      name: "🍲 Pho Bo (Beef Noodle Soup)",
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
      name: "🥖 Banh Mi",
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
      name: "🍧 Che Ba Mau (Three Color Dessert)",
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
  ],
  Japanese: [
    {
      name: "🍱 Unagi Donburi (Eel over Rice)",
      type: "Main Course",
      ingredients: [
        "2 pieces fresh eel fillets (unagi)",
        "2 cups Japanese short-grain rice",
        "1/4 cup mirin (sweet rice wine)",
        "1/4 cup soy sauce",
        "2 tbsp sugar",
        "1 tbsp sake",
        "2 tbsp vegetable oil",
        "2 green onions, thinly sliced",
        "1 tsp sesame seeds",
        "Pickled ginger (gari) for garnish",
        "Nori (seaweed) strips for garnish"
      ],
      instructions: [
        "Cook Japanese rice according to package directions",
        "Prepare eel sauce by combining mirin, soy sauce, sugar, and sake",
        "Heat sauce in small saucepan until sugar dissolves",
        "Heat oil in large skillet over medium-high heat",
        "Place eel fillets skin-side down and cook for 3-4 minutes",
        "Flip eel and brush with sauce, cook for another 2-3 minutes",
        "Brush eel with more sauce and cook until glazed",
        "Slice eel into bite-sized pieces",
        "Place hot rice in bowls",
        "Arrange eel pieces on top of rice",
        "Drizzle with remaining sauce",
        "Garnish with green onions, sesame seeds, pickled ginger, and nori"
      ]
    },
    {
      name: "🍲 Miso Soup",
      type: "Appetizer",
      ingredients: [
        "4 cups dashi (Japanese stock)",
        "3 tbsp white miso paste",
        "1/2 block silken tofu, cubed",
        "2 green onions, thinly sliced",
        "1 sheet nori, cut into strips",
        "1 tsp wakame seaweed (optional)"
      ],
      instructions: [
        "Heat dashi in a saucepan over medium heat",
        "Add wakame seaweed if using and let it rehydrate",
        "Place miso paste in a small bowl",
        "Add a ladle of hot dashi to the miso and whisk until smooth",
        "Add miso mixture back to the saucepan",
        "Add tofu cubes and heat gently (do not boil)",
        "Ladle soup into bowls",
        "Garnish with green onions and nori strips",
        "Serve immediately"
      ]
    },
    {
      name: "🍵 Matcha Ice Cream",
      type: "Dessert",
      ingredients: [
        "2 cups heavy cream",
        "1 cup whole milk",
        "3/4 cup sugar",
        "4 egg yolks",
        "2 tbsp matcha powder",
        "1 tsp vanilla extract",
        "Pinch of salt"
      ],
      instructions: [
        "Heat cream and milk in saucepan until steaming",
        "Whisk egg yolks with sugar until pale and thick",
        "Sift matcha powder to remove lumps",
        "Gradually add hot cream mixture to egg yolks, whisking constantly",
        "Return mixture to saucepan and cook over low heat until thickened",
        "Strain custard through fine mesh sieve",
        "Whisk in matcha powder, vanilla, and salt",
        "Chill custard completely in refrigerator",
        "Churn in ice cream maker according to manufacturer's instructions",
        "Freeze until firm, at least 4 hours",
        "Serve with additional matcha powder dusted on top"
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