import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import phoneHero from "@/assets/phone-hero.jpg";
import laptopHero from "@/assets/laptop-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-accent to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--electric)/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-electric to-primary-glow bg-clip-text text-transparent">
                  Next Generation
                </span>
                <br />
                <span className="text-foreground">Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover the perfect blend of innovation and performance with our premium collection of smartphones and laptops designed for the future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="electric" size="lg" className="group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative group">
                  <img
                    src={phoneHero}
                    alt="Premium Smartphone"
                    className="w-full h-80 object-cover rounded-2xl shadow-tech group-hover:shadow-glow transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative group">
                  <img
                    src={laptopHero}
                    alt="Premium Laptop"
                    className="w-full h-80 object-cover rounded-2xl shadow-tech group-hover:shadow-glow transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-electric/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-electric rounded-full blur-xl opacity-60 animate-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-electric to-primary-glow rounded-full blur-lg opacity-40 animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;