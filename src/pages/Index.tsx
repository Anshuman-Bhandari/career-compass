import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Navigate Your Career with{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                AI-Powered Guidance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get personalized resume analysis, interview preparation, and industry insights
              to make smarter career decisions
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                Start Your Journey <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to help you excel in your career journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/resume">
              <Card className="group cursor-pointer transition-all hover:shadow-hover hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Resume Analysis</CardTitle>
                  <CardDescription>
                    Get AI-powered insights on your resume with ATS compatibility checks and improvement suggestions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="gap-2">
                    Analyze Resume <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/interview">
              <Card className="group cursor-pointer transition-all hover:shadow-hover hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Interview Preparation</CardTitle>
                  <CardDescription>
                    Practice with role-specific MCQs and get instant feedback to ace your interviews
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="gap-2">
                    Start Practicing <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/insights">
              <Card className="group cursor-pointer transition-all hover:shadow-hover hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Industry Insights</CardTitle>
                  <CardDescription>
                    Explore company trends, culture insights, and current job openings in your field
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="gap-2">
                    Explore Insights <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-muted-foreground">Helping professionals achieve their career goals</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold mb-2">100K+</div>
                <div className="text-muted-foreground">Resumes Analyzed</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2">75K+</div>
                <div className="text-muted-foreground">Interviews Prepared</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground">Real stories from professionals who transformed their careers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Software Engineer at Google</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "MindSphere's resume analysis helped me identify key improvements. I got my dream job at Google within 2 months!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>Data Scientist at Meta</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The interview preparation MCQs were spot-on. They covered exactly what I needed to know for my Meta interview."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle>Emily Rodriguez</CardTitle>
                <CardDescription>Product Manager at Amazon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The industry insights feature gave me valuable knowledge about Amazon's culture and helped me prepare perfectly."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 MindSphere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
