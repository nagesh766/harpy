import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Smartphone, Laptop, Zap, Shield, Heart } from "lucide-react";
import phonesCollection from "@/assets/phones-collection.jpg";
import laptopsCollection from "@/assets/laptops-collection.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Harpy Phone Pro",
      category: "Smartphone",
      price: "$999",
      image: phonesCollection,
      icon: Smartphone,
      features: ["6.7'' OLED Display", "Triple Camera", "5G Ready", "All-Day Battery"],
      rating: 4.9,
      description: "The most advanced smartphone with cutting-edge technology and stunning design."
    },
    {
      id: 2,
      name: "Harpy Laptop Elite",
      category: "Laptop",
      price: "$1,299",
      image: laptopsCollection,
      icon: Laptop,
      features: ["15.6'' 4K Display", "16GB RAM", "1TB SSD", "Intel i7 Processor"],
      rating: 4.8,
      description: "Professional laptop designed for productivity and performance excellence."
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-electric bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully crafted collection of premium devices that combine innovation, performance, and elegant design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={product.id} className={`group hover:shadow-tech transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm animate-slide-up`} style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-primary to-electric rounded-lg">
                      <product.icon className="w-6 h-6 text-electric-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {product.category}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{product.price}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <p className="text-muted-foreground">{product.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button variant="electric" className="flex-1">
                    Buy Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-electric rounded-2xl mx-auto flex items-center justify-center">
              <Zap className="w-8 h-8 text-electric-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Lightning Fast</h3>
            <p className="text-muted-foreground">Experience unmatched performance with our cutting-edge processors and optimized software.</p>
          </div>

          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-electric to-primary-glow rounded-2xl mx-auto flex items-center justify-center">
              <Shield className="w-8 h-8 text-electric-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Secure & Private</h3>
            <p className="text-muted-foreground">Your data is protected with advanced encryption and privacy-first design principles.</p>
          </div>

          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-primary rounded-2xl mx-auto flex items-center justify-center">
              <Heart className="w-8 h-8 text-electric-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Made with Love</h3>
            <p className="text-muted-foreground">Every device is crafted with attention to detail and passion for excellence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;