import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-electric bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our products or need support? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-tech transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="border-border/50 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="border-border/50 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" className="border-border/50 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="How can we help you?" className="border-border/50 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    className="min-h-32 border-border/50 focus:border-primary resize-none" 
                  />
                </div>
                <Button variant="electric" size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-electric/5 hover:shadow-tech transition-all duration-500">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-electric rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-electric-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Address</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Drive<br />
                      Tech Valley, CA 94043<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric to-primary-glow rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-electric-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-electric">Phone</h3>
                    <p className="text-muted-foreground">
                      +1 (555) 123-4567<br />
                      +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-glow to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-electric-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-muted-foreground">
                      hello@harpy.com<br />
                      support@harpy.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-electric-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-electric">Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Fri: 9AM - 6PM<br />
                      Sat - Sun: 10AM - 4PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-electric/5 to-primary/5 hover:shadow-tech transition-all duration-500">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-lg font-semibold">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">
                  Need immediate assistance? Our support team is available around the clock.
                </p>
                <Button variant="outline" className="w-full">
                  Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;