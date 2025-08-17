import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Target,
  Users,
  Calendar,
  Award,
  TrendingUp,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Star,
} from "lucide-react";

interface CompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyModal({ isOpen, onClose }: CompanyModalProps) {
  const companyStats = [
    { label: "AI Solutions Built", value: "10+", icon: Award },
    { label: "Happy Clients", value: "8+", icon: Heart },
    { label: "Founding Team", value: "3", icon: Users },
    { label: "Years Combined Experience", value: "6", icon: Calendar },
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay at the forefront of technology, constantly exploring new AI and cloud solutions.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Our clients trust us to deliver secure, scalable solutions that perform when it matters.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Every project is tailored to meet our clients' unique needs and business objectives.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "We optimize processes and leverage automation to deliver results faster and more efficiently.",
    },
  ];

  const milestones = [
    {
      year: "Aug 2025",
      event:
        "Prismora AI founded by three passionate engineers with individual expertise",
    },
    {
      year: "Sep 2025",
      event: "Launched first AI-powered solution and secured initial clients",
    },
    {
      year: "Oct 2025",
      event:
        "Expanded service offerings to include cloud architecture solutions",
    },
    {
      year: "Nov 2025",
      event:
        "Reached 5+ successful project deliveries across different domains",
    },
    {
      year: "Dec 2025",
      event: "Established partnerships and growing client base",
    },
    {
      year: "2026",
      event: "Scaling AI solutions and expanding market presence",
    },
  ];

  const technologies = [
    { name: "Artificial Intelligence", expertise: 95 },
    { name: "Cloud Computing", expertise: 92 },
    { name: "Web Development", expertise: 90 },
    { name: "Mobile Apps", expertise: 85 },
    { name: "DevOps", expertise: 88 },
    { name: "Data Analytics", expertise: 82 },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-md border-border/50">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            Prismora AI
          </DialogTitle>
          <p className="text-muted-foreground text-lg">
            Next-generation artificial intelligence company solving real-world
            problems
          </p>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companyStats.map((stat) => (
              <Card
                key={stat.label}
                className="text-center bg-background/50 border-border/50"
              >
                <CardContent className="p-4">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To harness the power of AI, cloud, and software engineering to
                  create intelligent solutions for businesses and people —
                  shaping the future with technology. We believe in making
                  cutting-edge AI accessible and practical for real-world
                  applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To solve real-world problems through innovation, technology,
                  and scalable AI-powered solutions. We envision a future where
                  intelligent systems seamlessly integrate with everyday life,
                  making complex problems simple to solve.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <Card className="bg-background/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Core Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((value) => (
                  <div key={value.title} className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technology Expertise */}
          <Card className="bg-background/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Technology Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-muted-foreground">
                        {tech.expertise}%
                      </span>
                    </div>
                    <Progress value={tech.expertise} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Company Timeline */}
          <Card className="bg-background/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Our Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      {index < milestones.length - 1 && (
                        <div className="w-px h-8 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-3 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {milestone.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications & Partnerships */}
          <Card className="bg-background/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications & Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border border-border/30 rounded-lg">
                  <div className="text-2xl mb-2">☁️</div>
                  <div className="text-sm font-medium">AWS Partner</div>
                  <div className="text-xs text-muted-foreground">
                    Select Tier
                  </div>
                </div>
                <div className="text-center p-4 border border-border/30 rounded-lg">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="text-sm font-medium">Google Cloud</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
                <div className="text-center p-4 border border-border/30 rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-medium">Microsoft Azure</div>
                  <div className="text-xs text-muted-foreground">
                    Solutions Partner
                  </div>
                </div>
                <div className="text-center p-4 border border-border/30 rounded-lg">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm font-medium">OpenAI</div>
                  <div className="text-xs text-muted-foreground">
                    API Partner
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
