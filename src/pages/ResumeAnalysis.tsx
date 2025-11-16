import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResumeAnalysis = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      toast({
        title: "File uploaded",
        description: `${e.target.files[0].name} ready for analysis`,
      });
    }
  };

  const handleAnalyze = async () => {
    if (!file || !jobTitle || !jobDescription) {
      toast({
        title: "Missing information",
        description: "Please upload a resume and fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setResults({
        matchScore: 78,
        matchingSkills: ["JavaScript", "React", "TypeScript", "Node.js", "Problem Solving"],
        missingSkills: ["AWS", "Docker", "Kubernetes", "GraphQL"],
        suggestions: [
          "Add more quantifiable achievements to demonstrate impact",
          "Include specific technologies mentioned in job description",
          "Optimize keywords for ATS compatibility",
          "Add a professional summary at the top"
        ],
        atsScore: 85
      });
      setIsAnalyzing(false);
      toast({
        title: "Analysis complete",
        description: "Your resume has been analyzed successfully",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume Analysis</h1>
            <p className="text-xl text-muted-foreground">
              Upload your resume and get AI-powered insights to improve your job applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Your Resume</CardTitle>
                <CardDescription>Supported formats: PDF, DOC, DOCX</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    {file ? (
                      <div className="space-y-2">
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">Click to change file</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="font-medium">Click to upload your resume</p>
                        <p className="text-sm text-muted-foreground">or drag and drop</p>
                      </div>
                    )}
                  </label>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Job Title</label>
                    <Input
                      placeholder="e.g. Senior Software Engineer"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Job Description</label>
                    <Textarea
                      placeholder="Paste the job description here..."
                      rows={6}
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              {results ? (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Match Score</CardTitle>
                      <CardDescription>How well your resume matches the job</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-2">{results.matchScore}%</div>
                        <Progress value={results.matchScore} className="h-3" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        Matching Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {results.matchingSkills.map((skill: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-red-500" />
                        Missing Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {results.missingSkills.map((skill: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-red-500/10 text-red-700 dark:text-red-400 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-primary" />
                        Improvement Suggestions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {results.suggestions.map((suggestion: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>ATS Friendliness</CardTitle>
                      <CardDescription>Applicant Tracking System compatibility</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Score</span>
                          <span className="font-bold">{results.atsScore}%</span>
                        </div>
                        <Progress value={results.atsScore} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Your resume is well-formatted for ATS systems
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No Results Yet</h3>
                    <p className="text-muted-foreground">
                      Upload your resume and job details to see analysis results
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis;
