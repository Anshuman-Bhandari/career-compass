import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Globe, 
  Database, 
  Brain, 
  Cloud,
  ChevronRight,
  Trophy,
  Target
} from "lucide-react";

const roles = [
  { id: "software", name: "Software Engineer", icon: Code, color: "text-blue-500" },
  { id: "web", name: "Web Developer", icon: Globe, color: "text-green-500" },
  { id: "data", name: "Data Scientist", icon: Database, color: "text-purple-500" },
  { id: "ai", name: "AI/ML Engineer", icon: Brain, color: "text-pink-500" },
  { id: "cloud", name: "Cloud Engineer", icon: Cloud, color: "text-cyan-500" },
];

const sampleQuestions = {
  software: [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1
    },
    {
      question: "Which data structure uses LIFO principle?",
      options: ["Queue", "Stack", "Array", "Tree"],
      correct: 1
    }
  ]
};

const InterviewPrep = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleStartTest = () => {
    if (selectedRole) {
      setIsTestStarted(true);
      setCurrentQuestion(0);
      setScore(0);
      setShowResults(false);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const questions = sampleQuestions[selectedRole as keyof typeof sampleQuestions] || sampleQuestions.software;
      if (selectedAnswer === questions[currentQuestion].correct) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleRestart = () => {
    setIsTestStarted(false);
    setSelectedRole(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  const questions = sampleQuestions[selectedRole as keyof typeof sampleQuestions] || sampleQuestions.software;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Interview Preparation</h1>
            <p className="text-xl text-muted-foreground">
              Practice with role-specific MCQs and ace your next interview
            </p>
          </div>

          {!isTestStarted ? (
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Select Your Role</CardTitle>
                  <CardDescription>Choose the role you're preparing for</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {roles.map((role) => (
                      <Card
                        key={role.id}
                        className={`cursor-pointer transition-all hover:shadow-hover hover:-translate-y-1 ${
                          selectedRole === role.id ? "border-primary border-2" : ""
                        }`}
                        onClick={() => setSelectedRole(role.id)}
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center ${role.color}`}>
                              <role.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold">{role.name}</h3>
                              <p className="text-sm text-muted-foreground">20 questions</p>
                            </div>
                            {selectedRole === role.id && (
                              <ChevronRight className="h-5 w-5 text-primary" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button 
                    className="w-full mt-6" 
                    size="lg"
                    disabled={!selectedRole}
                    onClick={handleStartTest}
                  >
                    Start Test
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Test Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Role-Specific Questions</h4>
                      <p className="text-sm text-muted-foreground">Tailored questions for your target role</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium">Instant Feedback</h4>
                      <p className="text-sm text-muted-foreground">Get your score and identify weak areas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : !showResults ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
                  <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-lg font-medium">
                  {questions[currentQuestion].question}
                </div>

                <RadioGroup 
                  value={selectedAnswer?.toString()} 
                  onValueChange={(value) => setSelectedAnswer(parseInt(value))}
                >
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-secondary transition-colors cursor-pointer">
                        <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                        <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>

                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    onClick={handleRestart}
                    className="flex-1"
                  >
                    Exit Test
                  </Button>
                  <Button 
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="flex-1"
                  >
                    {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Test"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <Trophy className="h-16 w-16 mx-auto mb-4 text-primary" />
                <CardTitle className="text-3xl">Test Complete!</CardTitle>
                <CardDescription>Here are your results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <p className="text-muted-foreground">
                    You got {score} out of {questions.length} questions correct
                  </p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Performance Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    {score === questions.length 
                      ? "Perfect score! You're well prepared for this role."
                      : score >= questions.length * 0.7
                      ? "Great job! You have a strong understanding of the fundamentals."
                      : "Keep practicing! Review the topics and try again."}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={handleRestart} className="flex-1">
                    Choose Another Role
                  </Button>
                  <Button onClick={handleStartTest} className="flex-1">
                    Retake Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
