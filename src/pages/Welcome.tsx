import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, Utensils, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Welcome = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <ChefHat className="h-20 w-20 text-primary-foreground animate-float" />
              <div className="absolute -top-2 -right-2">
                <Heart className="h-8 w-8 text-accent animate-bounce-gentle" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-lg">
              Welcome to
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent drop-shadow-lg">
              CraveCraze SRTB Fusion
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Discover amazing recipes, explore fusion cuisine, and order delicious food crafted with love and passion.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 py-8">
            <div className="flex items-center space-x-2 bg-background/20 backdrop-blur-md rounded-full px-6 py-3">
              <Utensils className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground font-medium">Recipe Discovery</span>
            </div>
            <div className="flex items-center space-x-2 bg-background/20 backdrop-blur-md rounded-full px-6 py-3">
              <ChefHat className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground font-medium">Expert Cooking Tips</span>
            </div>
            <div className="flex items-center space-x-2 bg-background/20 backdrop-blur-md rounded-full px-6 py-3">
              <Heart className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground font-medium">Fusion Cuisine</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/login">
              <Button 
                variant="glass" 
                size="lg" 
                className="text-lg px-8 py-4 w-full sm:w-auto hover:scale-105 transition-all duration-300"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-8 py-4 w-full sm:w-auto hover:scale-105 transition-all duration-300"
              >
                Register
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="pt-12">
            <p className="text-primary-foreground/70 text-sm md:text-base">
              Join thousands of food lovers discovering new flavors every day
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <Utensils className="h-12 w-12 text-accent/30 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <ChefHat className="h-16 w-16 text-accent/30 animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Welcome;