import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import aboutConstruction1 from "@/assets/about-construction-1.jpg";
import aboutConstruction2 from "@/assets/about-construction-2.jpg";
import aboutConstruction3 from "@/assets/about-construction-3.jpg";
const About = () => {
  useScrollToTop();
  const values = [{
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "People-First Philosophy",
    description: "We listen before we build, ensuring every project reflects our clients' dreams and aspirations."
  }, {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Unmatched Attention to Detail",
    description: "From blueprint to brick, every element is crafted with precision and purpose."
  }, {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Design-Forward Thinking",
    description: "Breaking norms and setting trends in architectural innovation and luxury construction."
  }, {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Transparency & Trust",
    description: "No hidden costs, no guesswork - just honest communication and exceptional results."
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Root wrapper without global text-center to keep footer aligned */}
      
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              About Auranex Realty
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building Dreams into Reality{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-slate-950">
                with Precision and Excellence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              More than construction - we're architects of dreams, builders of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Built on Excellence - Section 1 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Built on Excellence
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Auranex Realty is a premier construction company founded by Swaraj Surana and Poonamchand Surana, 
                  dedicated to executing architectural visions with precision and excellence. Our mission is to create 
                  spaces that the city has never seen before, delivered through expert project management and 
                  uncompromising quality standards.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aboutConstruction1} 
                alt="Premium construction project by Auranex Realty" 
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built on Excellence - Section 2 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={aboutConstruction2} 
                alt="Luxury residential project execution" 
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With a deep commitment to construction excellence, transparency, and putting people first, every project we undertake becomes a landmark of purpose and quality. We don't just execute construction; we craft legacies that stand the test of time and define excellence in the built environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built on Excellence - Section 3 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our approach combines traditional craftsmanship with modern innovation, ensuring every project we deliver exceeds expectations and creates lasting value for our clients and communities. From initial concept to final handover, we maintain the highest standards of quality, safety, and sustainability.
                </p>
                <p className="text-primary font-medium text-xl">
                  "Luxury rooted in trust, crafted for the modern world."
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="premium" size="lg" className="group">
                    Transform Your Vision
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutConstruction3} 
                alt="Modern architectural innovation by Auranex" 
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Auranex?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values drive every decision, every design, and every dream we bring to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={index} className="group hover:shadow-elegant transition-premium border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-premium">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-12 text-center text-white shadow-premium">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 opacity-95">
              To execute architectural masterpieces that transcend ordinary construction projects. 
              We believe in delivering excellence through expert project management and quality construction, 
              resulting in landmarks that define luxury and innovation in the built environment.
            </p>
            <div className="text-lg font-medium opacity-90">
              "Excellence in execution, luxury in every detail."
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default About;