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
    id: 3,
    name: "Aloo Gobi Masala",
    calories: 220,
    price: 179,
    image: paneerImage,
    category: "vegetarian",
    servingSize: 3,
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    healthAdvantages: [
      "Rich in vitamin C from cauliflower",
      "Good source of potassium from potatoes",
      "High in fiber and antioxidants",
      "Low in calories and fat"
    ],
    ingredients: [
      { name: "Potatoes", quantity: "3 medium", calories: 240 },
      { name: "Cauliflower", quantity: "1 medium head", calories: 100 },
      { name: "Onions", quantity: "2 medium", calories: 80 },
      { name: "Tomatoes", quantity: "2 medium", calories: 36 },
      { name: "Ginger-garlic paste", quantity: "1 tbsp", calories: 15 },
      { name: "Turmeric powder", quantity: "1 tsp", calories: 8 },
      { name: "Oil", quantity: "3 tbsp", calories: 360 },
      { name: "Cumin seeds", quantity: "1 tsp", calories: 8 }
    ],
    instructions: [
      "Cut potatoes and cauliflower into medium pieces",
      "Heat oil in a pan and add cumin seeds",
      "Add potatoes and fry until golden brown",
      "Add cauliflower and cook for 5 minutes",
      "Add onions and cook until translucent",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add tomatoes and cook until soft",
      "Add turmeric and other spices",
      "Cover and cook for 15 minutes on low heat",
      "Garnish with coriander and serve hot"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Don't add water, vegetables release their own moisture",
      "Cook on low heat to prevent burning",
      "Cut vegetables in uniform sizes",
      "Add salt in the end to prevent vegetables from becoming mushy"
    ]
  },
  {
    id: 4,
    name: "Rajma Masala",
    calories: 280,
    price: 209,
    image: dalImage,
    category: "vegetarian",
    servingSize: 4,
    prepTime: "20 mins",
    cookTime: "45 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "Excellent source of plant protein",
      "Rich in fiber and iron",
      "Helps regulate blood sugar",
      "Good for heart health"
    ],
    ingredients: [
      { name: "Red kidney beans", quantity: "1 cup", calories: 340 },
      { name: "Onions", quantity: "2 large", calories: 80 },
      { name: "Tomatoes", quantity: "3 medium", calories: 54 },
      { name: "Ginger-garlic paste", quantity: "2 tbsp", calories: 30 },
      { name: "Bay leaves", quantity: "2", calories: 2 },
      { name: "Garam masala", quantity: "1 tsp", calories: 6 },
      { name: "Oil", quantity: "3 tbsp", calories: 360 },
      { name: "Cumin seeds", quantity: "1 tsp", calories: 8 }
    ],
    instructions: [
      "Soak rajma overnight and pressure cook until soft",
      "Heat oil and add cumin seeds and bay leaves",
      "Add chopped onions and cook until golden",
      "Add ginger-garlic paste and cook for 2 minutes",
      "Add tomatoes and cook until they break down",
      "Add cooked rajma with its water",
      "Add garam masala and simmer for 20 minutes",
      "Mash some beans to thicken the gravy",
      "Adjust seasoning and consistency",
      "Serve hot with rice"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Soak beans overnight for better cooking",
      "Don't discard bean water, it adds flavor",
      "Mash some beans for thick gravy",
      "Slow cooking enhances the flavor"
    ]
  },
  {
    id: 5,
    name: "Palak Paneer",
    calories: 290,
    price: 259,
    image: paneerImage,
    category: "vegetarian",
    servingSize: 3,
    prepTime: "20 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "Rich in iron from spinach",
      "High protein from paneer",
      "Good source of calcium",
      "Contains vitamins A and K"
    ],
    ingredients: [
      { name: "Fresh spinach", quantity: "500g", calories: 115 },
      { name: "Paneer cubes", quantity: "200g", calories: 212 },
      { name: "Onions", quantity: "1 medium", calories: 40 },
      { name: "Tomatoes", quantity: "2 medium", calories: 36 },
      { name: "Ginger-garlic paste", quantity: "1 tbsp", calories: 15 },
      { name: "Green chilies", quantity: "2", calories: 4 },
      { name: "Cream", quantity: "2 tbsp", calories: 82 },
      { name: "Oil", quantity: "2 tbsp", calories: 240 }
    ],
    instructions: [
      "Blanch spinach in boiling water for 2 minutes",
      "Cool and blend into smooth puree",
      "Heat oil and lightly fry paneer cubes",
      "In same pan, sauté onions until golden",
      "Add ginger-garlic paste and green chilies",
      "Add tomatoes and cook until soft",
      "Add spinach puree and cook for 10 minutes",
      "Add fried paneer and simmer for 5 minutes",
      "Finish with cream and garam masala",
      "Serve hot with roti or rice"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Blanch spinach to retain green color",
      "Don't overcook spinach puree",
      "Add cream at the end",
      "Fresh spinach works better than frozen"
    ]
  },
  // Spicy Recipes
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
    id: 17,
    name: "Mutton Rogan Josh",
    calories: 520,
    price: 449,
    image: chickenImage,
    category: "spicy",
    servingSize: 3,
    prepTime: "25 mins",
    cookTime: "60 mins",
    difficulty: "Hard",
    healthAdvantages: [
      "High in protein and iron",
      "Rich in vitamin B12",
      "Good source of zinc",
      "Contains essential amino acids"
    ],
    ingredients: [
      { name: "Mutton", quantity: "500g", calories: 800 },
      { name: "Yogurt", quantity: "1/2 cup", calories: 75 },
      { name: "Onions", quantity: "3 large", calories: 120 },
      { name: "Kashmiri red chilies", quantity: "6", calories: 12 },
      { name: "Fennel powder", quantity: "1 tsp", calories: 7 },
      { name: "Ginger powder", quantity: "1 tsp", calories: 6 },
      { name: "Ghee", quantity: "3 tbsp", calories: 360 },
      { name: "Bay leaves", quantity: "3", calories: 3 }
    ],
    instructions: [
      "Marinate mutton with yogurt and salt for 1 hour",
      "Heat ghee and add bay leaves",
      "Add sliced onions and fry until golden",
      "Add marinated mutton and cook on high heat",
      "Soak Kashmiri chilies and grind to paste",
      "Add chili paste and cook for 5 minutes",
      "Add fennel and ginger powder",
      "Cover and cook on low heat for 45 minutes",
      "Add water if needed during cooking",
      "Garnish with coriander and serve"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Use tender mutton pieces",
      "Cook on low heat for tender meat",
      "Kashmiri chilies give authentic color",
      "Don't add water unless necessary"
    ]
  },
  {
    id: 18,
    name: "Andhra Chicken Curry",
    calories: 420,
    price: 329,
    image: chickenImage,
    category: "spicy",
    servingSize: 3,
    prepTime: "15 mins",
    cookTime: "35 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "High protein from chicken",
      "Spices aid digestion",
      "Rich in antioxidants",
      "Boosts metabolism"
    ],
    ingredients: [
      { name: "Chicken", quantity: "500g", calories: 550 },
      { name: "Red chilies", quantity: "8", calories: 16 },
      { name: "Tamarind", quantity: "1 tbsp", calories: 12 },
      { name: "Onions", quantity: "2 medium", calories: 80 },
      { name: "Curry leaves", quantity: "15", calories: 1 },
      { name: "Mustard seeds", quantity: "1 tsp", calories: 6 },
      { name: "Oil", quantity: "3 tbsp", calories: 360 },
      { name: "Turmeric", quantity: "1/2 tsp", calories: 4 }
    ],
    instructions: [
      "Soak tamarind in water and extract juice",
      "Grind red chilies into coarse powder",
      "Heat oil and add mustard seeds",
      "Add curry leaves and let them splutter",
      "Add onions and fry until golden",
      "Add chicken pieces and cook until white",
      "Add chili powder and turmeric",
      "Pour tamarind juice and simmer",
      "Cook until chicken is tender and gravy thickens",
      "Serve hot with rice"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Use fresh curry leaves for aroma",
      "Adjust chili powder to taste",
      "Tamarind gives tangy flavor",
      "Cook until oil separates"
    ]
  },
  {
    id: 19,
    name: "Fish Curry Kerala Style",
    calories: 380,
    price: 399,
    image: chickenImage,
    category: "spicy",
    servingSize: 3,
    prepTime: "20 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "Rich in omega-3 fatty acids",
      "High quality protein",
      "Good for brain health",
      "Contains vitamin D"
    ],
    ingredients: [
      { name: "Fish fillets", quantity: "400g", calories: 480 },
      { name: "Coconut milk", quantity: "1 cup", calories: 445 },
      { name: "Red chilies", quantity: "6", calories: 12 },
      { name: "Coconut", quantity: "1/2 cup grated", calories: 142 },
      { name: "Shallots", quantity: "8", calories: 32 },
      { name: "Ginger", quantity: "1 inch", calories: 4 },
      { name: "Curry leaves", quantity: "20", calories: 1 },
      { name: "Coconut oil", quantity: "2 tbsp", calories: 240 }
    ],
    instructions: [
      "Grind coconut, chilies, ginger into paste",
      "Heat coconut oil in a clay pot",
      "Add curry leaves and shallots",
      "Add the ground paste and cook for 5 minutes",
      "Pour coconut milk and bring to boil",
      "Simmer for 10 minutes",
      "Gently add fish pieces",
      "Cook for 8-10 minutes without stirring much",
      "Adjust salt and add more curry leaves",
      "Serve hot with rice"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Use fresh fish for best taste",
      "Don't stir fish too much",
      "Cook on medium heat",
      "Use clay pot for authentic flavor"
    ]
  },
  {
    id: 20,
    name: "Hyderabadi Biryani",
    calories: 520,
    price: 429,
    image: chickenImage,
    category: "spicy",
    servingSize: 4,
    prepTime: "30 mins",
    cookTime: "60 mins",
    difficulty: "Hard",
    healthAdvantages: [
      "Complete meal with protein and carbs",
      "Rich in aromatic spices",
      "Good source of energy",
      "Contains essential nutrients"
    ],
    ingredients: [
      { name: "Basmati rice", quantity: "2 cups", calories: 684 },
      { name: "Chicken", quantity: "500g", calories: 550 },
      { name: "Yogurt", quantity: "1 cup", calories: 150 },
      { name: "Fried onions", quantity: "1 cup", calories: 400 },
      { name: "Saffron", quantity: "1/4 tsp", calories: 2 },
      { name: "Mint leaves", quantity: "1/2 cup", calories: 2 },
      { name: "Ghee", quantity: "4 tbsp", calories: 480 },
      { name: "Whole spices", quantity: "mixed", calories: 20 }
    ],
    instructions: [
      "Marinate chicken with yogurt and spices for 2 hours",
      "Soak rice for 30 minutes",
      "Cook rice with whole spices until 70% done",
      "Cook marinated chicken until tender",
      "Layer rice and chicken in heavy-bottomed pot",
      "Sprinkle fried onions, mint, and saffron",
      "Cover with foil and lid",
      "Cook on high heat for 3 minutes",
      "Place on tawa and cook on low heat for 45 minutes",
      "Rest for 10 minutes before serving"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Use aged basmati rice",
      "Marinate chicken for at least 2 hours",
      "Layer properly for even cooking",
      "Cook on dum (slow cooking) method"
    ]
  },
  // Healthy Recipes
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
    id: 32,
    name: "Sprouts Salad Indian",
    calories: 150,
    price: 129,
    image: quinoaImage,
    category: "healthy",
    servingSize: 2,
    prepTime: "15 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    healthAdvantages: [
      "High in protein and fiber",
      "Rich in vitamins and minerals",
      "Aids in weight management",
      "Boosts immunity"
    ],
    ingredients: [
      { name: "Mixed sprouts", quantity: "1 cup", calories: 60 },
      { name: "Cucumber", quantity: "1 medium", calories: 16 },
      { name: "Tomatoes", quantity: "2 medium", calories: 36 },
      { name: "Onions", quantity: "1 small", calories: 20 },
      { name: "Lemon juice", quantity: "2 tbsp", calories: 6 },
      { name: "Chat masala", quantity: "1 tsp", calories: 3 },
      { name: "Coriander leaves", quantity: "2 tbsp", calories: 1 },
      { name: "Green chilies", quantity: "1", calories: 2 }
    ],
    instructions: [
      "Steam sprouts for 5 minutes until tender",
      "Cool the sprouts completely",
      "Finely chop cucumber, tomatoes, and onions",
      "Mix all vegetables with sprouts",
      "Add lemon juice and chat masala",
      "Mix well and let it sit for 10 minutes",
      "Garnish with coriander leaves",
      "Add chopped green chilies",
      "Toss everything together",
      "Serve immediately as a healthy snack"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Don't overcook sprouts",
      "Add salt just before serving",
      "Use fresh vegetables for crunch",
      "Adjust lemon juice to taste"
    ]
  },
  {
    id: 33,
    name: "Grilled Tandoori Chicken",
    calories: 280,
    price: 299,
    image: chickenImage,
    category: "healthy",
    servingSize: 2,
    prepTime: "30 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "High protein, low fat",
      "Rich in vitamins B6 and B12",
      "Good for muscle building",
      "Contains antioxidants from spices"
    ],
    ingredients: [
      { name: "Chicken breast", quantity: "400g", calories: 660 },
      { name: "Greek yogurt", quantity: "1/2 cup", calories: 65 },
      { name: "Ginger-garlic paste", quantity: "2 tbsp", calories: 30 },
      { name: "Tandoori masala", quantity: "2 tbsp", calories: 24 },
      { name: "Lemon juice", quantity: "2 tbsp", calories: 6 },
      { name: "Oil", quantity: "1 tbsp", calories: 120 },
      { name: "Red chili powder", quantity: "1 tsp", calories: 6 },
      { name: "Salt", quantity: "to taste", calories: 0 }
    ],
    instructions: [
      "Make deep cuts in chicken pieces",
      "Mix yogurt, ginger-garlic paste, and all spices",
      "Marinate chicken for at least 2 hours",
      "Preheat grill or oven to 200°C",
      "Thread chicken onto skewers",
      "Grill for 20-25 minutes, turning occasionally",
      "Brush with oil during grilling",
      "Cook until internal temperature reaches 75°C",
      "Let rest for 5 minutes",
      "Serve with mint chutney and salad"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Marinate for minimum 2 hours",
      "Don't overcook to keep it juicy",
      "Use meat thermometer for perfect cooking",
      "Baste with oil for moisture"
    ]
  },
  {
    id: 34,
    name: "Moong Dal Soup",
    calories: 120,
    price: 99,
    image: dalImage,
    category: "healthy",
    servingSize: 2,
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    healthAdvantages: [
      "Easy to digest protein",
      "Rich in folate and magnesium",
      "Low in calories",
      "Good for detox"
    ],
    ingredients: [
      { name: "Yellow moong dal", quantity: "1/2 cup", calories: 170 },
      { name: "Ginger", quantity: "1 inch", calories: 4 },
      { name: "Garlic", quantity: "2 cloves", calories: 8 },
      { name: "Turmeric", quantity: "1/2 tsp", calories: 4 },
      { name: "Cumin seeds", quantity: "1/2 tsp", calories: 4 },
      { name: "Black pepper", quantity: "1/4 tsp", calories: 1 },
      { name: "Ghee", quantity: "1 tsp", calories: 40 },
      { name: "Coriander leaves", quantity: "2 tbsp", calories: 1 }
    ],
    instructions: [
      "Wash and soak moong dal for 30 minutes",
      "Pressure cook dal with turmeric until soft",
      "Blend cooked dal into smooth soup",
      "Heat ghee in a pan",
      "Add cumin seeds and let them splutter",
      "Add minced ginger and garlic",
      "Pour the dal soup and bring to boil",
      "Add black pepper and salt",
      "Simmer for 5 minutes",
      "Garnish with coriander and serve hot"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Blend well for smooth texture",
      "Adjust consistency with water",
      "Add black pepper for digestion",
      "Serve hot for best taste"
    ]
  },
  {
    id: 35,
    name: "Steamed Fish Curry",
    calories: 240,
    price: 349,
    image: chickenImage,
    category: "healthy",
    servingSize: 2,
    prepTime: "20 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "Rich in omega-3 fatty acids",
      "Low fat cooking method",
      "High quality protein",
      "Good for heart health"
    ],
    ingredients: [
      { name: "Fish fillets", quantity: "300g", calories: 360 },
      { name: "Coconut milk", quantity: "1/2 cup", calories: 223 },
      { name: "Mustard paste", quantity: "2 tbsp", calories: 24 },
      { name: "Green chilies", quantity: "3", calories: 6 },
      { name: "Turmeric", quantity: "1/2 tsp", calories: 4 },
      { name: "Mustard oil", quantity: "1 tbsp", calories: 120 },
      { name: "Banana leaf", quantity: "1 large", calories: 0 },
      { name: "Salt", quantity: "to taste", calories: 0 }
    ],
    instructions: [
      "Clean banana leaf and cut into large pieces",
      "Mix coconut milk, mustard paste, and spices",
      "Marinate fish with turmeric and salt",
      "Place fish on banana leaf",
      "Pour the coconut mixture over fish",
      "Add green chilies and fold the leaf",
      "Tie securely with thread",
      "Steam for 15-20 minutes",
      "Check if fish is cooked through",
      "Serve hot in the banana leaf"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Use fresh banana leaves",
      "Don't overcook the fish",
      "Steam on medium heat",
      "Mustard paste adds unique flavor"
    ]
  },
  // Party/Happy Recipes
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
  },
  {
    id: 62,
    name: "Chicken Tandoori Skewers",
    calories: 380,
    price: 399,
    image: chickenImage,
    category: "party",
    servingSize: 6,
    prepTime: "25 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "High protein content",
      "Grilled cooking is healthier",
      "Rich in B vitamins",
      "Contains antioxidants from spices"
    ],
    ingredients: [
      { name: "Chicken cubes", quantity: "500g", calories: 550 },
      { name: "Yogurt", quantity: "1/2 cup", calories: 75 },
      { name: "Tandoori masala", quantity: "3 tbsp", calories: 36 },
      { name: "Ginger-garlic paste", quantity: "2 tbsp", calories: 30 },
      { name: "Bell peppers", quantity: "2 medium", calories: 60 },
      { name: "Onions", quantity: "2 medium", calories: 80 },
      { name: "Oil", quantity: "2 tbsp", calories: 240 },
      { name: "Lemon juice", quantity: "2 tbsp", calories: 6 }
    ],
    instructions: [
      "Cut chicken into bite-sized cubes",
      "Mix yogurt, tandoori masala, ginger-garlic paste",
      "Marinate chicken for 2 hours",
      "Cut vegetables into square pieces",
      "Soak wooden skewers in water",
      "Thread chicken and vegetables alternately",
      "Brush with oil",
      "Grill for 15-20 minutes, turning occasionally",
      "Cook until chicken is done",
      "Serve hot with mint chutney"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Marinate for at least 2 hours",
      "Soak skewers to prevent burning",
      "Don't overcook chicken",
      "Brush with oil while grilling"
    ]
  },
  {
    id: 63,
    name: "Paneer Tikka Platter",
    calories: 360,
    price: 329,
    image: paneerImage,
    category: "party",
    servingSize: 4,
    prepTime: "30 mins",
    cookTime: "15 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "High protein from paneer",
      "Rich in calcium",
      "Vegetarian protein source",
      "Contains beneficial spices"
    ],
    ingredients: [
      { name: "Paneer cubes", quantity: "400g", calories: 424 },
      { name: "Hung curd", quantity: "1/2 cup", calories: 90 },
      { name: "Ginger-garlic paste", quantity: "1 tbsp", calories: 15 },
      { name: "Red chili powder", quantity: "1 tsp", calories: 6 },
      { name: "Garam masala", quantity: "1 tsp", calories: 6 },
      { name: "Bell peppers", quantity: "2 medium", calories: 60 },
      { name: "Oil", quantity: "2 tbsp", calories: 240 },
      { name: "Chat masala", quantity: "1 tsp", calories: 3 }
    ],
    instructions: [
      "Cut paneer into large cubes",
      "Mix curd with all spices to make marinade",
      "Marinate paneer for 30 minutes",
      "Cut bell peppers into squares",
      "Thread paneer and peppers on skewers",
      "Heat oil in a grill pan",
      "Cook skewers for 10-12 minutes",
      "Turn occasionally for even cooking",
      "Sprinkle chat masala before serving",
      "Arrange on platter with mint chutney"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Use firm paneer for grilling",
      "Don't over-marinate paneer",
      "Cook on medium heat",
      "Serve immediately while hot"
    ]
  },
  {
    id: 64,
    name: "Gulab Jamun",
    calories: 320,
    price: 149,
    image: samosaImage,
    category: "party",
    servingSize: 6,
    prepTime: "20 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "Provides instant energy",
      "Rich in calcium from milk",
      "Contains protein",
      "Traditional festive sweet"
    ],
    ingredients: [
      { name: "Milk powder", quantity: "1 cup", calories: 496 },
      { name: "All-purpose flour", quantity: "2 tbsp", calories: 57 },
      { name: "Ghee", quantity: "2 tbsp", calories: 240 },
      { name: "Milk", quantity: "3 tbsp", calories: 18 },
      { name: "Sugar", quantity: "1 cup", calories: 774 },
      { name: "Water", quantity: "1 cup", calories: 0 },
      { name: "Cardamom powder", quantity: "1/2 tsp", calories: 3 },
      { name: "Rose water", quantity: "1 tsp", calories: 0 }
    ],
    instructions: [
      "Mix milk powder and flour in a bowl",
      "Add ghee and mix well",
      "Gradually add milk to form soft dough",
      "Make small smooth balls from dough",
      "Heat oil to 160°C for frying",
      "Fry balls on low heat until golden",
      "Make sugar syrup with cardamom",
      "Add rose water to syrup",
      "Drop hot gulab jamuns in warm syrup",
      "Let them soak for 2 hours before serving"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Fry on low heat for even cooking",
      "Don't make dough too tight",
      "Sugar syrup should be one-string consistency",
      "Soak for at least 2 hours"
    ]
  },
  {
    id: 65,
    name: "Pani Puri Platter",
    calories: 160,
    price: 99,
    image: samosaImage,
    category: "party",
    servingSize: 8,
    prepTime: "30 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    healthAdvantages: [
      "Low in calories",
      "Contains digestive spices",
      "Hydrating from flavored water",
      "Fun interactive eating"
    ],
    ingredients: [
      { name: "Pani puri shells", quantity: "30 pieces", calories: 300 },
      { name: "Boiled potatoes", quantity: "2 medium", calories: 160 },
      { name: "Boiled chickpeas", quantity: "1/2 cup", calories: 134 },
      { name: "Tamarind", quantity: "2 tbsp", calories: 24 },
      { name: "Mint leaves", quantity: "1 cup", calories: 4 },
      { name: "Coriander leaves", quantity: "1/2 cup", calories: 2 },
      { name: "Black salt", quantity: "1 tsp", calories: 0 },
      { name: "Chaat masala", quantity: "1 tsp", calories: 3 }
    ],
    instructions: [
      "Soak tamarind and extract thick juice",
      "Blend mint, coriander with water for green water",
      "Mix tamarind juice with spices for sweet water",
      "Mash potatoes and chickpeas lightly",
      "Season filling with chaat masala",
      "Arrange puri shells on serving platter",
      "Keep different waters in separate bowls",
      "Let guests assemble their own pani puri",
      "Fill shell with potato mixture",
      "Dip in flavored water and eat immediately"
    ],
    youtubeVideo: "dQw4w9WgXcQ",
    cookTips: [
      "Keep shells crispy until serving",
      "Make waters fresh",
      "Adjust spice levels for all",
      "Serve immediately after assembly"
    ]
  },
  
  // Additional Popular Recipes
  {
    id: 26,
    name: "Chocolate Brownie",
    calories: 420,
    price: 199,
    image: chickenImage,
    category: "dessert",
    servingSize: 4,
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Easy",
    healthAdvantages: [
      "Rich in antioxidants from dark chocolate",
      "Quick energy boost",
      "Mood enhancer"
    ],
    ingredients: [
      { name: "Dark chocolate", quantity: "200g", calories: 540 },
      { name: "Butter", quantity: "100g", calories: 717 },
      { name: "Sugar", quantity: "150g", calories: 580 },
      { name: "Eggs", quantity: "2", calories: 140 }
    ],
    instructions: [
      "Melt chocolate and butter together",
      "Mix in sugar and eggs",
      "Fold in flour gently",
      "Bake for 25-30 minutes"
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=chocolate-brownie",
    cookTips: [
      "Don't overmix the batter",
      "Use good quality dark chocolate",
      "Check with toothpick for doneness"
    ]
  },
  
  {
    id: 27,
    name: "Grilled Chicken Salad",
    calories: 285,
    price: 329,
    image: chickenImage,
    category: "healthy",
    servingSize: 2,
    prepTime: "20 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    healthAdvantages: [
      "High protein content",
      "Low in carbs",
      "Rich in vitamins",
      "Supports weight management"
    ],
    ingredients: [
      { name: "Chicken breast", quantity: "300g", calories: 495 },
      { name: "Mixed greens", quantity: "100g", calories: 20 },
      { name: "Cherry tomatoes", quantity: "100g", calories: 18 },
      { name: "Cucumber", quantity: "1", calories: 16 }
    ],
    instructions: [
      "Season and grill chicken breast",
      "Prepare fresh salad vegetables",
      "Slice grilled chicken",
      "Toss everything with dressing"
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=grilled-chicken-salad",
    cookTips: [
      "Don't overcook the chicken",
      "Let chicken rest before slicing",
      "Use fresh seasonal vegetables"
    ]
  },
  
  {
    id: 28,
    name: "Vegetable Stir Fry",
    calories: 195,
    price: 229,
    image: paneerImage,
    category: "vegetarian",
    servingSize: 3,
    prepTime: "15 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    healthAdvantages: [
      "Rich in vitamins and minerals",
      "High fiber content",
      "Low calorie option",
      "Antioxidant rich"
    ],
    ingredients: [
      { name: "Mixed vegetables", quantity: "400g", calories: 80 },
      { name: "Soy sauce", quantity: "2 tbsp", calories: 10 },
      { name: "Garlic", quantity: "3 cloves", calories: 13 },
      { name: "Ginger", quantity: "1 inch", calories: 4 }
    ],
    instructions: [
      "Heat oil in a wok",
      "Add garlic and ginger",
      "Stir fry vegetables quickly",
      "Add sauce and toss"
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=vegetable-stir-fry",
    cookTips: [
      "Keep vegetables crisp",
      "Cook on high heat",
      "Don't overcrowd the pan"
    ]
  },
  
  {
    id: 29,
    name: "Mango Lassi",
    calories: 165,
    price: 149,
    image: dalImage,
    category: "beverages",
    servingSize: 2,
    prepTime: "5 mins",
    cookTime: "0 mins",
    difficulty: "Very Easy",
    healthAdvantages: [
      "Rich in vitamin C",
      "Probiotic benefits",
      "Cooling and refreshing",
      "Good for digestion"
    ],
    ingredients: [
      { name: "Ripe mango", quantity: "1 large", calories: 135 },
      { name: "Yogurt", quantity: "200ml", calories: 110 },
      { name: "Sugar", quantity: "2 tbsp", calories: 96 },
      { name: "Cardamom", quantity: "2 pods", calories: 5 }
    ],
    instructions: [
      "Peel and chop mango",
      "Blend with yogurt and sugar",
      "Add cardamom powder",
      "Serve chilled with ice"
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=mango-lassi",
    cookTips: [
      "Use perfectly ripe mangoes",
      "Adjust sugar to taste",
      "Chill before serving"
    ]
  },
  
  {
    id: 30,
    name: "Fish Curry",
    calories: 310,
    price: 379,
    image: chickenImage,
    category: "spicy",
    servingSize: 4,
    prepTime: "20 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    healthAdvantages: [
      "High in omega-3 fatty acids",
      "Rich in protein",
      "Good for heart health",
      "Brain boosting nutrients"
    ],
    ingredients: [
      { name: "Fish fillets", quantity: "500g", calories: 825 },
      { name: "Coconut milk", quantity: "400ml", calories: 552 },
      { name: "Curry leaves", quantity: "10", calories: 1 },
      { name: "Red chilies", quantity: "4", calories: 8 }
    ],
    instructions: [
      "Marinate fish with spices",
      "Prepare curry base with coconut milk",
      "Add fish and simmer gently",
      "Garnish with curry leaves"
    ],
    youtubeVideo: "https://www.youtube.com/watch?v=fish-curry",
    cookTips: [
      "Don't overcook the fish",
      "Use fresh coconut milk",
      "Adjust spice level to taste"
    ]
  }
];

export const recipesByChoice = {
  vegetarian: allRecipes.filter(recipe => recipe.category === "vegetarian"),
  spicy: allRecipes.filter(recipe => recipe.category === "spicy"),
  healthy: allRecipes.filter(recipe => recipe.category === "healthy")
};

export const recipesByMood = {
  happy: allRecipes.filter(recipe => recipe.category === "vegetarian").slice(0, 6),
  lazy: allRecipes.filter(recipe => recipe.category === "healthy").slice(0, 6),
  sad: allRecipes.filter(recipe => recipe.category === "spicy").slice(0, 6),
  party: allRecipes.filter(recipe => recipe.category === "party")
};

export const getRecipeById = (id: number): Recipe | undefined => {
  return allRecipes.find(recipe => recipe.id === id);
};

export const getAllRecipeIds = (): number[] => {
  return allRecipes.map(recipe => recipe.id);
};