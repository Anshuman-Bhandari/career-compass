import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Search, 
  Building2, 
  TrendingUp, 
  Users, 
  Briefcase,
  MapPin,
  DollarSign,
  ArrowRight
} from "lucide-react";

const companies = [
  {
    id: "google",
    name: "Google",
    logo: "🔍",
    employees: "150,000+",
    industry: "Technology",
    locations: ["Mountain View", "New York", "London"],
    openings: 1200
  },
  {
    id: "amazon",
    name: "Amazon",
    logo: "📦",
    employees: "1,500,000+",
    industry: "E-commerce & Cloud",
    locations: ["Seattle", "Worldwide"],
    openings: 5000
  },
  {
    id: "meta",
    name: "Meta",
    logo: "👤",
    employees: "86,000+",
    industry: "Social Media",
    locations: ["Menlo Park", "Remote"],
    openings: 800
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "🪟",
    employees: "220,000+",
    industry: "Technology",
    locations: ["Redmond", "Global"],
    openings: 2500
  },
  {
    id: "apple",
    name: "Apple",
    logo: "🍎",
    employees: "164,000+",
    industry: "Consumer Electronics",
    locations: ["Cupertino", "Worldwide"],
    openings: 1500
  },
  {
    id: "tcs",
    name: "TCS",
    logo: "💼",
    employees: "600,000+",
    industry: "IT Services",
    locations: ["Mumbai", "Global"],
    openings: 3000
  },
  {
    id: "infosys",
    name: "Infosys",
    logo: "ℹ️",
    employees: "340,000+",
    industry: "IT Consulting",
    locations: ["Bangalore", "Worldwide"],
    openings: 2000
  },
  {
    id: "netflix",
    name: "Netflix",
    logo: "🎬",
    employees: "12,000+",
    industry: "Entertainment",
    locations: ["Los Gatos", "Remote"],
    openings: 150
  },
];

const IndustryInsights = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry Insights</h1>
            <p className="text-xl text-muted-foreground">
              Explore companies, understand trends, and discover opportunities
            </p>
          </div>

          {!selectedCompany ? (
            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search companies or industries..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies.map((company) => (
                  <Card
                    key={company.id}
                    className="cursor-pointer transition-all hover:shadow-hover hover:-translate-y-1"
                    onClick={() => setSelectedCompany(company)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-4xl">{company.logo}</div>
                          <div>
                            <CardTitle>{company.name}</CardTitle>
                            <CardDescription>{company.industry}</CardDescription>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{company.employees} employees</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{company.locations.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="font-medium text-primary">{company.openings} open positions</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <Button variant="outline" onClick={() => setSelectedCompany(null)}>
                ← Back to Companies
              </Button>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{selectedCompany.logo}</div>
                    <div>
                      <CardTitle className="text-3xl">{selectedCompany.name}</CardTitle>
                      <CardDescription className="text-lg">{selectedCompany.industry}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="font-bold text-xl">{selectedCompany.employees}</div>
                        <div className="text-sm text-muted-foreground">Employees</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <MapPin className="h-8 w-8 mx-auto mb-2 text-accent" />
                        <div className="font-bold text-xl">{selectedCompany.locations.length}+</div>
                        <div className="text-sm text-muted-foreground">Locations</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Briefcase className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="font-bold text-xl">{selectedCompany.openings}</div>
                        <div className="text-sm text-muted-foreground">Open Roles</div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Company Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {selectedCompany.name} is a leading company in the {selectedCompany.industry} sector with a 
                    global presence and innovative culture. Known for cutting-edge technology and employee 
                    development programs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Innovation Focused</Badge>
                    <Badge variant="secondary">Global Presence</Badge>
                    <Badge variant="secondary">Competitive Benefits</Badge>
                    <Badge variant="secondary">Career Growth</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Industry Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p className="text-muted-foreground">
                      Strong focus on AI and machine learning integration across products
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p className="text-muted-foreground">
                      Emphasis on remote work and flexible working arrangements
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p className="text-muted-foreground">
                      Investing heavily in sustainability and green technology initiatives
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Current Openings
                  </CardTitle>
                  <CardDescription>Sample positions available at {selectedCompany.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: "Senior Software Engineer", location: selectedCompany.locations[0], salary: "$150k-$200k" },
                      { title: "Product Manager", location: selectedCompany.locations[0], salary: "$130k-$180k" },
                      { title: "UX Designer", location: "Remote", salary: "$120k-$160k" },
                      { title: "Data Scientist", location: selectedCompany.locations[0], salary: "$140k-$190k" },
                    ].map((job, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary transition-colors">
                        <div>
                          <h4 className="font-medium">{job.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {job.salary}
                            </span>
                          </div>
                        </div>
                        <Button size="sm">Apply</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustryInsights;
