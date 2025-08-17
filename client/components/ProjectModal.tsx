import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Users, 
  Code, 
  Rocket,
  GitBranch,
  FileText,
  Target,
  TrendingUp,
  AlertCircle,
  ExternalLink
} from "lucide-react";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "discussion" | "maintenance";
  progress: number;
  client: string;
  startDate: string;
  endDate?: string;
  team: string[];
  technologies: string[];
  features: string[];
  milestones: { name: string; completed: boolean; date: string }[];
  challenges?: string[];
  achievements?: string[];
  nextSteps?: string[];
  budget?: string;
  timeline: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

const projects: Record<string, ProjectData> = {
  "fintech-app": {
    id: "fintech-app",
    title: "AI-Powered Fintech App",
    description: "Intelligent financial management with AI-driven insights and automated trading recommendations.",
    status: "in-progress",
    progress: 75,
    client: "FinanceFlow Inc.",
    startDate: "2024-01-15",
    endDate: "2024-04-30",
    team: ["Alex Chen", "Sarah Kim", "Mike Rodriguez"],
    technologies: ["React Native", "TensorFlow", "AWS", "Blockchain", "Node.js", "PostgreSQL"],
    features: [
      "AI-powered portfolio analysis",
      "Real-time market predictions",
      "Automated trading recommendations",
      "Risk assessment algorithms",
      "Secure blockchain transactions",
      "Mobile-first design"
    ],
    milestones: [
      { name: "Project Setup & Architecture", completed: true, date: "2024-01-30" },
      { name: "User Authentication System", completed: true, date: "2024-02-15" },
      { name: "AI Model Integration", completed: true, date: "2024-03-01" },
      { name: "Trading Algorithm Development", completed: false, date: "2024-03-30" },
      { name: "Security Testing & Compliance", completed: false, date: "2024-04-15" },
      { name: "Beta Testing & Launch", completed: false, date: "2024-04-30" }
    ],
    challenges: [
      "Integrating complex AI models with real-time data",
      "Meeting financial regulatory compliance requirements",
      "Optimizing mobile performance for large datasets"
    ],
    budget: "$150,000",
    timeline: "4 months"
  },
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "Custom E-Commerce Platform",
    description: "Scalable e-commerce solution with AI-powered product recommendations and advanced analytics.",
    status: "in-progress",
    progress: 60,
    client: "ShopSmart Ltd.",
    startDate: "2024-02-01",
    endDate: "2024-05-15",
    team: ["Mike Rodriguez", "Sarah Kim"],
    technologies: ["Next.js", "Shopify API", "Stripe", "PostgreSQL", "Redis", "AWS"],
    features: [
      "AI product recommendations",
      "Advanced analytics dashboard",
      "Multi-vendor support",
      "Inventory management",
      "Payment gateway integration",
      "Mobile responsive design"
    ],
    milestones: [
      { name: "Platform Architecture Design", completed: true, date: "2024-02-15" },
      { name: "User Interface Development", completed: true, date: "2024-03-01" },
      { name: "Payment Integration", completed: true, date: "2024-03-15" },
      { name: "AI Recommendation Engine", completed: false, date: "2024-04-01" },
      { name: "Analytics Dashboard", completed: false, date: "2024-04-30" },
      { name: "Testing & Deployment", completed: false, date: "2024-05-15" }
    ],
    budget: "$120,000",
    timeline: "3.5 months"
  },
  "healthcare-app": {
    id: "healthcare-app",
    title: "HealthTracker Mobile App",
    description: "Comprehensive health monitoring app with AI-powered health insights and telemedicine features.",
    status: "completed",
    progress: 100,
    client: "MedTech Solutions",
    startDate: "2023-09-01",
    endDate: "2023-12-15",
    team: ["Alex Chen", "Mike Rodriguez"],
    technologies: ["Flutter", "Firebase", "TensorFlow Lite", "Python", "Google Cloud"],
    features: [
      "Health metrics tracking",
      "AI symptom analyzer",
      "Telemedicine integration",
      "Medication reminders",
      "Doctor appointment scheduling",
      "Health report generation"
    ],
    milestones: [
      { name: "App Design & Prototyping", completed: true, date: "2023-09-15" },
      { name: "Core Features Development", completed: true, date: "2023-10-30" },
      { name: "AI Integration", completed: true, date: "2023-11-15" },
      { name: "Testing & Quality Assurance", completed: true, date: "2023-12-01" },
      { name: "App Store Deployment", completed: true, date: "2023-12-15" }
    ],
    achievements: [
      "50,000+ downloads in first month",
      "4.8/5 star rating on app stores",
      "Featured in Google Play Store",
      "HIPAA compliance certified"
    ],
    budget: "$85,000",
    timeline: "3.5 months"
  },
  "ai-chatbot": {
    id: "ai-chatbot",
    title: "Enterprise AI Chatbot",
    description: "Intelligent customer service chatbot with natural language processing and multi-language support.",
    status: "discussion",
    progress: 0,
    client: "Global Corp Inc.",
    startDate: "2024-04-01",
    endDate: "2024-07-30",
    team: ["Alex Chen", "Sarah Kim"],
    technologies: ["Python", "OpenAI GPT", "React", "Node.js", "MongoDB", "Docker"],
    features: [
      "Natural language understanding",
      "Multi-language support",
      "Integration with existing CRM",
      "Analytics and reporting",
      "Voice message support",
      "24/7 availability"
    ],
    milestones: [
      { name: "Requirements Analysis", completed: false, date: "2024-04-15" },
      { name: "Chatbot Training", completed: false, date: "2024-05-15" },
      { name: "CRM Integration", completed: false, date: "2024-06-15" },
      { name: "Testing & Optimization", completed: false, date: "2024-07-15" },
      { name: "Deployment & Training", completed: false, date: "2024-07-30" }
    ],
    nextSteps: [
      "Finalize project requirements with client",
      "Set up development environment",
      "Begin chatbot training data collection",
      "Design conversation flows"
    ],
    budget: "$95,000",
    timeline: "4 months"
  },
  "restaurant-app": {
    id: "restaurant-app",
    title: "Restaurant Management System",
    description: "Complete restaurant management solution with online ordering, inventory, and staff management.",
    status: "maintenance",
    progress: 100,
    client: "Bistro Chain",
    startDate: "2023-06-01",
    endDate: "2023-10-15",
    team: ["Mike Rodriguez", "Sarah Kim"],
    technologies: ["React", "Node.js", "Express", "MySQL", "Stripe", "AWS"],
    features: [
      "Online ordering system",
      "Inventory management",
      "Staff scheduling",
      "Customer loyalty program",
      "Analytics dashboard",
      "Multi-location support"
    ],
    milestones: [
      { name: "System Design", completed: true, date: "2023-06-15" },
      { name: "Core Development", completed: true, date: "2023-08-30" },
      { name: "Testing & Deployment", completed: true, date: "2023-10-15" }
    ],
    achievements: [
      "40% increase in online orders",
      "25% reduction in food waste",
      "Deployed across 15 restaurant locations",
      "99.9% uptime maintained"
    ],
    budget: "$75,000",
    timeline: "4.5 months"
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "in-progress":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "discussion":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "maintenance":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const projectData = projects[project.id] || project;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-md border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            {projectData.title}
          </DialogTitle>
          <div className="flex items-center gap-4 mt-2">
            <Badge className={getStatusColor(projectData.status)}>
              {projectData.status.toUpperCase()}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{projectData.startDate} - {projectData.endDate || "Ongoing"}</span>
            </div>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - Project Overview */}
          <div className="space-y-6">
            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Client</h4>
                  <p className="text-sm text-muted-foreground">{projectData.client}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Budget</h4>
                  <p className="text-sm text-muted-foreground">{projectData.budget}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Timeline</h4>
                  <p className="text-sm text-muted-foreground">{projectData.timeline}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Progress</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completion</span>
                      <span>{projectData.progress}%</span>
                    </div>
                    <Progress value={projectData.progress} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {projectData.team.map((member) => (
                    <div key={member} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {projectData.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {projectData.description}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projectData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Project Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectData.milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${
                          milestone.completed ? "bg-green-400" : "bg-gray-400"
                        }`}></div>
                        {index < projectData.milestones.length - 1 && (
                          <div className="w-px h-8 bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className={`font-medium ${
                            milestone.completed ? "text-foreground" : "text-muted-foreground"
                          }`}>
                            {milestone.name}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {milestone.date}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dynamic Status Content */}
            {projectData.achievements && (
              <Card className="bg-background/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {projectData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {projectData.challenges && (
              <Card className="bg-background/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    Challenges & Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {projectData.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {projectData.nextSteps && (
              <Card className="bg-background/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-blue-400" />
                    Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {projectData.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          {projectData.status === "completed" && (
            <Button className="bg-primary hover:bg-primary/90">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Project
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
