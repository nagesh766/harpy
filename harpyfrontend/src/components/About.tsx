import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Award, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500K+", label: "Happy Customers", color: "from-primary to-electric" },
    { icon: Globe, value: "50+", label: "Countries", color: "from-electric to-primary-glow" },
    { icon: Award, value: "25+", label: "Awards Won", color: "from-primary-glow to-primary" },
    { icon: TrendingUp, value: "99%", label: "Satisfaction Rate", color: "from-electric to-primary" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-electric bg-clip-text text-transparent">
                  Innovating the Future
                </span>
                <br />
                <span className="text-foreground">of Technology</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Harpy, we believe technology should enhance life, not complicate it. Since our founding, we've been dedicated to creating devices that seamlessly blend cutting-edge innovation with intuitive design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of passionate engineers and designers work tirelessly to push the boundaries of what's possible, ensuring every product we create meets the highest standards of quality and performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="electric" size="lg">
                Our Story
              </Button>
              <Button variant="outline" size="lg">
                Join Our Team
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {stats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-tech transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-electric-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <Card className="bg-gradient-to-br from-primary/5 to-electric/5 border-0 hover:shadow-tech transition-all duration-500">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to premium technology by creating innovative, reliable, and beautifully designed devices that empower people to achieve more in their personal and professional lives.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-electric/5 to-primary/5 border-0 hover:shadow-tech transition-all duration-500">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-electric">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in consumer technology, known for our unwavering commitment to innovation, sustainability, and creating products that truly make a difference in people's lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;