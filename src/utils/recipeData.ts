import paneerImage from "@/assets/paneer-butter-masala.jpg";
import dalImage from "@/assets/dal-tadka.jpg";
import chickenImage from "@/assets/chicken-vindaloo.jpg";
import quinoaImage from "@/assets/quinoa-khichdi.jpg";
import samosaImage from "@/assets/samosa-platter.jpg";

export interface Recipe {
  id: number;
  name: string;
  calories: number;
  price: number;
  image: string;
  category: string;
  servingSize: number;
  prepTime: string;
  cookTime: string;
  difficulty: string;
  healthAdvantages: string[];
  ingredients: {
    name: string;
    quantity: string;
    calories: number;
  }[];
  instructions: string[];
  youtubeVideo: string;
  cookTips: string[];
}

export const allRecipes: Recipe[] = [
  // Vegetarian Recipes
  {
    id: 1,
    name: "Paneer Butter Masala",
    calories: 320,
    price: 299,
    image: paneerImage,
    category: "vegetarian",
    servingSize: 2,
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "High in protein from paneer",
      "Rich in calcium for bone health",
      "Contains lycopene from tomatoes",
      "Good source of healthy fats"
    ],
    ingredients: [
      { name: "Paneer cubes", quantity: "250g", calories: 265 },
      { name: "Onions", quantity: "2 medium", calories: 80 },
      { name: "Tomatoes", quantity: "3 medium", calories: 54 },
      { name: "Cashews", quantity: "10-12", calories: 157 },
      { name: "Butter", quantity: "2 tbsp", calories: 204 },
      { name: "Cream", quantity: "3 tbsp", calories: 123 },
      { name: "Garam masala", quantity: "1 tsp", calories: 6 },
      { name: "Ginger-garlic paste", quantity: "1 tbsp", calories: 15 }
    ],
    instructions: [
      "Soak cashews in warm water for 15 minutes",
      "Heat butter in a pan and lightly fry paneer cubes until golden",
      "In the same pan, sauté onions until translucent",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add tomatoes and cook until they break down completely",
      "Blend the mixture with soaked cashews into a smooth paste",
      "Return to pan, add garam masala and cook for 5 minutes",
      "Add paneer cubes and simmer for 10 minutes",
      "Finish with cream and garnish with coriander",
      "Serve hot with naan or rice"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Don't overcook paneer to keep it soft",
      "Soak paneer in warm water before cooking",
      "Use fresh cream for best taste",
      "Adjust spice level with red chili powder"
    ]
  },
  {
    id: 2,
    name: "Dal Tadka",
    calories: 180,
    price: 199,
    image: dalImage,
    category: "vegetarian",
    servingSize: 3,
    prepTime: "10 mins",
    cookTime: "30 mins",
    difficulty: "Easy",
    healthAdvantages: [
      "Excellent source of plant protein",
      "Rich in fiber for digestion",
      "Contains folate and iron",
      "Low in fat and cholesterol-free"
    ],
    ingredients: [
      { name: "Yellow lentils (Toor dal)", quantity: "1 cup", calories: 343 },
      { name: "Onions", quantity: "1 medium", calories: 40 },
      { name: "Tomatoes", quantity: "2 medium", calories: 36 },
      { name: "Green chilies", quantity: "2", calories: 4 },
      { name: "Cumin seeds", quantity: "1 tsp", calories: 8 },
      { name: "Mustard seeds", quantity: "1/2 tsp", calories: 3 },
      { name: "Turmeric powder", quantity: "1/2 tsp", calories: 4 },
      { name: "Ghee", quantity: "2 tbsp", calories: 240 }
    ],
    instructions: [
      "Wash and pressure cook dal with turmeric and salt",
      "Heat ghee in a pan for tempering",
      "Add cumin and mustard seeds, let them splutter",
      "Add chopped onions and sauté until golden",
      "Add green chilies and cook for 1 minute",
      "Add tomatoes and cook until soft",
      "Pour the tempering over cooked dal",
      "Simmer for 10 minutes to blend flavors",
      "Garnish with fresh coriander",
      "Serve hot with rice or roti"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Don't overcook dal, it should hold its shape",
      "Add salt after dal is cooked",
      "Make tempering hot for best flavor",
      "Consistency should be like thick soup"
    ]
  },
  {
    id: 16,
    name: "Chicken Vindaloo",
    calories: 450,
    price: 349,
    image: chickenImage,
    category: "spicy",
    servingSize: 2,
    prepTime: "20 mins",
    cookTime: "45 mins",
    difficulty: "Hard",
    healthAdvantages: [
      "High protein content from chicken",
      "Vinegar aids in digestion",
      "Spices boost metabolism",
      "Rich in vitamins B6 and B12"
    ],
    ingredients: [
      { name: "Chicken", quantity: "500g", calories: 550 },
      { name: "Dried red chilies", quantity: "8-10", calories: 20 },
      { name: "Vinegar", quantity: "3 tbsp", calories: 3 },
      { name: "Ginger", quantity: "2 inch piece", calories: 8 },
      { name: "Garlic", quantity: "8 cloves", calories: 32 },
      { name: "Onions", quantity: "2 large", calories: 80 },
      { name: "Jaggery", quantity: "1 tbsp", calories: 60 },
      { name: "Oil", quantity: "3 tbsp", calories: 360 }
    ],
    instructions: [
      "Soak dried chilies in vinegar for 30 minutes",
      "Grind chilies with ginger, garlic into paste",
      "Marinate chicken with the paste for 2 hours",
      "Heat oil and fry onions until golden brown",
      "Add marinated chicken and cook on high heat",
      "Add remaining vinegar and jaggery",
      "Cover and cook on low heat for 30 minutes",
      "Stir occasionally to prevent sticking",
      "Adjust seasoning with salt",
      "Serve hot with bread or rice"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Marinate chicken for at least 2 hours",
      "Use palm vinegar for authentic taste",
      "Balance sweet and sour flavors",
      "Cook on low heat to avoid burning spices"
    ]
  },
  {
    id: 31,
    name: "Quinoa Khichdi",
    calories: 220,
    price: 189,
    image: quinoaImage,
    category: "healthy",
    servingSize: 2,
    prepTime: "10 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    healthAdvantages: [
      "Complete protein with all amino acids",
      "Gluten-free and easy to digest",
      "Rich in fiber and minerals",
      "Low glycemic index"
    ],
    ingredients: [
      { name: "Quinoa", quantity: "1/2 cup", calories: 170 },
      { name: "Yellow moong dal", quantity: "1/4 cup", calories: 85 },
      { name: "Mixed vegetables", quantity: "1 cup", calories: 50 },
      { name: "Ginger", quantity: "1 inch", calories: 4 },
      { name: "Cumin seeds", quantity: "1 tsp", calories: 8 },
      { name: "Turmeric", quantity: "1/2 tsp", calories: 4 },
      { name: "Ghee", quantity: "1 tbsp", calories: 120 },
      { name: "Salt", quantity: "to taste", calories: 0 }
    ],
    instructions: [
      "Wash quinoa and moong dal thoroughly",
      "Heat ghee in a pressure cooker",
      "Add cumin seeds and let them splutter",
      "Add ginger and sauté for 30 seconds",
      "Add vegetables and cook for 2 minutes",
      "Add quinoa, dal, turmeric, and salt",
      "Add 2.5 cups water and pressure cook for 3 whistles",
      "Let pressure release naturally",
      "Mash lightly and adjust consistency",
      "Serve hot with pickle and yogurt"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Rinse quinoa well to remove bitterness",
      "Don't overcook, quinoa should be fluffy",
      "Add vegetables of your choice",
      "Adjust water for desired consistency"
    ]
  },
  {
    id: 61,
    name: "Mini Samosa Platter",
    calories: 450,
    price: 299,
    image: samosaImage,
    category: "party",
    servingSize: 4,
    prepTime: "45 mins",
    cookTime: "30 mins",
    difficulty: "Hard",
    healthAdvantages: [
      "Good source of carbohydrates",
      "Contains fiber from potatoes",
      "Spices aid digestion",
      "Provides energy for parties"
    ],
    ingredients: [
      { name: "All-purpose flour", quantity: "2 cups", calories: 910 },
      { name: "Potatoes", quantity: "4 medium", calories: 320 },
      { name: "Green peas", quantity: "1/2 cup", calories: 40 },
      { name: "Oil for frying", quantity: "2 cups", calories: 1920 },
      { name: "Garam masala", quantity: "1 tsp", calories: 6 },
      { name: "Coriander seeds", quantity: "1 tsp", calories: 5 },
      { name: "Ginger", quantity: "1 inch", calories: 4 },
      { name: "Green chilies", quantity: "2", calories: 4 }
    ],
    instructions: [
      "Make dough with flour, oil, and water",
      "Boil and mash potatoes with spices",
      "Mix peas with potato filling",
      "Roll dough into small circles",
      "Cut circles in half to make cones",
      "Fill cones with potato mixture",
      "Seal edges with water",
      "Deep fry until golden brown",
      "Serve hot with chutneys",
      "Arrange on platter for presentation"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Keep dough covered to prevent drying",
      "Seal edges properly to avoid opening",
      "Fry on medium heat for even cooking",
      "Serve immediately for best taste"
    ]
  }
];

export const recipesByChoice = {
  vegetarian: allRecipes.filter(recipe => recipe.category === "vegetarian"),
  spicy: allRecipes.filter(recipe => recipe.category === "spicy"),
  healthy: allRecipes.filter(recipe => recipe.category === "healthy")
};

export const recipesByMood = {
  happy: allRecipes.filter(recipe => recipe.category === "party" || recipe.id === 61),
  lazy: [
    { id: 51, name: "Instant Maggi Masala", calories: 350, price: 49, image: dalImage, category: "lazy" },
    { id: 52, name: "Ready-to-Eat Poha", calories: 220, price: 79, image: quinoaImage, category: "lazy" },
    { id: 53, name: "Microwave Khichdi", calories: 280, price: 99, image: quinoaImage, category: "lazy" },
    { id: 54, name: "Quick Bread Pakora", calories: 320, price: 69, image: samosaImage, category: "lazy" },
    { id: 55, name: "Instant Chai & Biscuit", calories: 150, price: 39, image: dalImage, category: "lazy" },
  ],
  sad: [
    { id: 56, name: "Comfort Rajma Chawal", calories: 380, price: 189, image: dalImage, category: "sad" },
    { id: 57, name: "Warm Gajar Halwa", calories: 320, price: 159, image: samosaImage, category: "sad" },
    { id: 58, name: "Hot Tomato Shorba", calories: 120, price: 89, image: dalImage, category: "sad" },
    { id: 59, name: "Comforting Dal Rice", calories: 280, price: 139, image: dalImage, category: "sad" },
    { id: 60, name: "Warm Milk with Turmeric", calories: 100, price: 59, image: quinoaImage, category: "sad" },
  ],
  party: [allRecipes.find(recipe => recipe.id === 61)!]
};

export const getRecipeById = (id: number): Recipe | undefined => {
  return allRecipes.find(recipe => recipe.id === id);
};

export const getAllRecipeIds = (): number[] => {
  return allRecipes.map(recipe => recipe.id);
};