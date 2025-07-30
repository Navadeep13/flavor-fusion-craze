import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Heart, Users, Award } from "lucide-react";
import restaurantBg from "@/assets/restaurant-food-bg.jpg";

const About = () => {
  return (
    <Layout isAuthenticated={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card/30">
        {/* Hero Section */}
        <section 
          className="bg-gradient-hero py-16 px-4 relative bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${restaurantBg})` 
          }}
        >
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <ChefHat className="h-16 w-16 mx-auto mb-6 animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About CraveCraze SRTB Fusion
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Where culinary passion meets innovative fusion cuisine
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
          {/* Brand Story */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                CraveCraze SRTB Fusion was born from a passion for bringing together the best of traditional 
                flavors with modern culinary innovation. Located in the heart of Gachibowli, Hyderabad, 
                we've been serving food lovers since our inception, creating memorable dining experiences 
                that satisfy every craving.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began with a simple belief: great food brings people together. Today, we continue 
                to craft dishes that not only nourish the body but also feed the soul, using only the finest 
                ingredients and time-honored cooking techniques paired with contemporary presentation.
              </p>
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Passion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every dish is crafted with love and dedication to culinary excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Building connections through shared meals and food experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Using only the finest ingredients to ensure exceptional taste and nutrition.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <ChefHat className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Constantly evolving our menu to bring you exciting new flavors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading destination for fusion cuisine in Hyderabad, where every meal 
                  is a celebration of flavors, culture, and innovation. We envision a world where 
                  food transcends boundaries and brings people together.
                </p>
                <Badge variant="accent" className="w-full justify-center py-2">
                  Culinary Excellence Since Day One
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional dining experiences through innovative fusion cuisine, 
                  outstanding service, and a welcoming atmosphere. We're committed to supporting 
                  our community while maintaining the highest standards of quality and sustainability.
                </p>
                <Badge variant="secondary" className="w-full justify-center py-2">
                  Serving Happiness Daily
                </Badge>
              </CardContent>
            </Card>
          </section>

          {/* Specialties */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Specialties</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center">🍛 Fusion Bowls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Nutritious and delicious bowls that combine international flavors with local ingredients.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center">🌶️ Spice Blends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Signature spice combinations that create unique flavor profiles in every dish.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center">🥗 Healthy Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Wholesome meals designed for health-conscious food lovers without compromising taste.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Team Message */}
          <section className="text-center bg-gradient-accent rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-accent-foreground mb-6">
              From Our Kitchen to Your Heart
            </h2>
            <p className="text-lg text-accent-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Every recipe we share, every dish we prepare, and every service we provide comes from 
              our genuine desire to make your day a little brighter. Thank you for being part of 
              the CraveCraze family!
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;