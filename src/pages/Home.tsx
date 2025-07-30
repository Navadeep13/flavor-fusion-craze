import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Authentic Indian recipe data with sample images
const recipesByChoice = {
  vegetarian: [
    { id: 1, name: "Paneer Butter Masala", calories: 320, price: 299, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "vegetarian" },
    { id: 2, name: "Dal Tadka", calories: 180, price: 199, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "vegetarian" },
    { id: 3, name: "Aloo Gobi Masala", calories: 220, price: 179, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "vegetarian" },
    { id: 4, name: "Chana Masala", calories: 250, price: 189, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "vegetarian" },
    { id: 5, name: "Rajma Curry", calories: 280, price: 209, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "vegetarian" },
    { id: 6, name: "Palak Paneer", calories: 290, price: 259, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "vegetarian" },
    { id: 7, name: "Mixed Vegetable Curry", calories: 200, price: 169, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "vegetarian" },
    { id: 8, name: "Bhindi Masala", calories: 160, price: 149, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "vegetarian" },
    { id: 9, name: "Matar Paneer", calories: 270, price: 239, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "vegetarian" },
    { id: 10, name: "Baingan Bharta", calories: 190, price: 179, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "vegetarian" },
    { id: 11, name: "Kadai Paneer", calories: 310, price: 279, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "vegetarian" },
    { id: 12, name: "Chole Bhature", calories: 420, price: 229, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "vegetarian" },
    { id: 13, name: "Vegetable Biryani", calories: 380, price: 249, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "vegetarian" },
    { id: 14, name: "Masala Dosa", calories: 320, price: 159, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "vegetarian" },
    { id: 15, name: "Idli Sambar", calories: 180, price: 119, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "vegetarian" },
  ],
  spicy: [
    { id: 16, name: "Chicken Vindaloo", calories: 450, price: 349, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "spicy" },
    { id: 17, name: "Mutton Rogan Josh", calories: 520, price: 449, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "spicy" },
    { id: 18, name: "Fish Curry Kerala Style", calories: 380, price: 399, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "spicy" },
    { id: 19, name: "Andhra Chicken Curry", calories: 420, price: 329, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "spicy" },
    { id: 20, name: "Kolhapuri Mutton", calories: 480, price: 479, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "spicy" },
    { id: 21, name: "Chicken Ghee Roast", calories: 390, price: 359, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "spicy" },
    { id: 22, name: "Prawn Pepper Fry", calories: 280, price: 429, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "spicy" },
    { id: 23, name: "Laal Maas Rajasthani", calories: 520, price: 499, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "spicy" },
    { id: 24, name: "Chicken Chettinad", calories: 440, price: 369, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "spicy" },
    { id: 25, name: "Bhut Jolokia Chicken", calories: 460, price: 379, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "spicy" },
    { id: 26, name: "Goan Fish Curry", calories: 340, price: 389, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "spicy" },
    { id: 27, name: "Hyderabadi Biryani", calories: 520, price: 429, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "spicy" },
    { id: 28, name: "Chicken Tikka Masala", calories: 410, price: 339, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "spicy" },
    { id: 29, name: "Achari Gosht", calories: 490, price: 459, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "spicy" },
    { id: 30, name: "Mirapakay Chicken", calories: 380, price: 349, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "spicy" },
  ],
  healthy: [
    { id: 31, name: "Quinoa Khichdi", calories: 220, price: 189, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "healthy" },
    { id: 32, name: "Sprouts Salad Indian", calories: 150, price: 129, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "healthy" },
    { id: 33, name: "Grilled Tandoori Chicken", calories: 280, price: 299, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "healthy" },
    { id: 34, name: "Moong Dal Soup", calories: 120, price: 99, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "healthy" },
    { id: 35, name: "Steamed Fish Curry", calories: 240, price: 349, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "healthy" },
    { id: 36, name: "Ragi Dosa", calories: 180, price: 139, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "healthy" },
    { id: 37, name: "Oats Upma", calories: 160, price: 119, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "healthy" },
    { id: 38, name: "Grilled Paneer Tikka", calories: 220, price: 219, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "healthy" },
    { id: 39, name: "Bottle Gourd Curry", calories: 90, price: 109, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "healthy" },
    { id: 40, name: "Coconut Chutney Bowl", calories: 80, price: 79, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "healthy" },
    { id: 41, name: "Millet Kheer", calories: 200, price: 149, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "healthy" },
    { id: 42, name: "Cucumber Raita", calories: 60, price: 69, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "healthy" },
    { id: 43, name: "Spinach Lentil Soup", calories: 140, price: 109, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "healthy" },
    { id: 44, name: "Grilled Vegetable Wrap", calories: 180, price: 159, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "healthy" },
    { id: 45, name: "Chia Seed Lassi", calories: 120, price: 89, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "healthy" },
  ]
};

const recipesByMood = {
  happy: [
    { id: 46, name: "Celebration Gulab Jamun", calories: 320, price: 149, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "happy" },
    { id: 47, name: "Colorful Pani Puri", calories: 160, price: 99, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "happy" },
    { id: 48, name: "Mango Kulfi", calories: 180, price: 119, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "happy" },
    { id: 49, name: "Festival Jalebi", calories: 280, price: 129, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "happy" },
    { id: 50, name: "Kesar Badam Milk", calories: 200, price: 89, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "happy" },
  ],
  lazy: [
    { id: 51, name: "Instant Maggi Masala", calories: 350, price: 49, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "lazy" },
    { id: 52, name: "Ready-to-Eat Poha", calories: 220, price: 79, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "lazy" },
    { id: 53, name: "Microwave Khichdi", calories: 280, price: 99, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "lazy" },
    { id: 54, name: "Quick Bread Pakora", calories: 320, price: 69, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "lazy" },
    { id: 55, name: "Instant Chai & Biscuit", calories: 150, price: 39, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "lazy" },
  ],
  sad: [
    { id: 56, name: "Comfort Rajma Chawal", calories: 380, price: 189, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "sad" },
    { id: 57, name: "Warm Gajar Halwa", calories: 320, price: 159, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "sad" },
    { id: 58, name: "Hot Tomato Shorba", calories: 120, price: 89, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "sad" },
    { id: 59, name: "Comforting Dal Rice", calories: 280, price: 139, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "sad" },
    { id: 60, name: "Warm Milk with Turmeric", calories: 100, price: 59, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "sad" },
  ],
  party: [
    { id: 61, name: "Mini Samosa Platter", calories: 450, price: 299, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", category: "party" },
    { id: 62, name: "Chicken Tandoori Skewers", calories: 380, price: 399, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400", category: "party" },
    { id: 63, name: "Assorted Indian Snacks", calories: 520, price: 349, image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400", category: "party" },
    { id: 64, name: "Paneer Tikka Platter", calories: 360, price: 329, image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400", category: "party" },
    { id: 65, name: "Festival Sweet Box", calories: 480, price: 449, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400", category: "party" },
  ]
};

const Home = () => {
  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (recipeId: number) => {
    setCart([...cart, recipeId]);
  };

  const getCurrentRecipes = () => {
    if (selectedChoice && recipesByChoice[selectedChoice as keyof typeof recipesByChoice]) {
      return recipesByChoice[selectedChoice as keyof typeof recipesByChoice];
    }
    if (selectedMood && recipesByMood[selectedMood as keyof typeof recipesByMood]) {
      return recipesByMood[selectedMood as keyof typeof recipesByMood];
    }
    return [];
  };

  return (
    <Layout isAuthenticated={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card/30">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 px-4">
          <div className="max-w-7xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Recipe Discovery Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Find the perfect recipe based on your preferences and mood
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search for recipes, ingredients, or cuisines..."
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-background/90 backdrop-blur-md border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Choose by Choice */}
              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Choose by Choice</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedChoice} onValueChange={setSelectedChoice}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your dietary preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetarian">🥬 Vegetarian</SelectItem>
                      <SelectItem value="spicy">🌶️ Spicy</SelectItem>
                      <SelectItem value="healthy">💚 Healthy</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Choose by Mood */}
              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Choose by Mood</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedMood} onValueChange={setSelectedMood}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="How are you feeling today?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="happy">😊 Happy</SelectItem>
                      <SelectItem value="lazy">😴 Lazy</SelectItem>
                      <SelectItem value="sad">😢 Sad</SelectItem>
                      <SelectItem value="party">🎉 Party</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>

            {/* Cart Info */}
            {cart.length > 0 && (
              <div className="mb-8 text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {cart.length} items in cart
                </Badge>
              </div>
            )}

            {/* Recipe Grid */}
            {getCurrentRecipes().length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCurrentRecipes().map((recipe) => (
                  <Card 
                    key={recipe.id} 
                    className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
                  >
                    <CardHeader className="text-center">
                      <div className="text-6xl mb-4 group-hover:animate-bounce-gentle">
                        {recipe.image}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {recipe.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{recipe.calories} kcal</Badge>
                        <Badge variant="accent">₹{recipe.price}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => addToCart(recipe.id)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Link to={`/recipe/${recipe.id}`} className="flex-1">
                        <Button variant="hero" size="sm" className="w-full">
                          <Eye className="h-4 w-4 mr-2" />
                          Explore
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!selectedChoice && !selectedMood && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">Ready to discover amazing recipes?</h3>
                <p className="text-muted-foreground mb-8">Choose your preference or mood to get started!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;