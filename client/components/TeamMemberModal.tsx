import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Cloud, 
  Layers, 
  Github, 
  Linkedin, 
  Mail,
  Star,
  Award,
  Calendar,
  MapPin
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: typeof Code;
  skills: string[];
  experience: string;
  location: string;
  projects: number;
  email: string;
  github?: string;
  linkedin?: string;
  bio: string;
  achievements: string[];
  skillLevels: { name: string; level: number }[];
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const teamMembers: Record<string, TeamMember> = {
  "ai-developer": {
    id: "ai-developer",
    name: "Alex Chen",
    role: "Full Stack AI Developer",
    description: "Expert in ML, NLP, and AI-powered features",
    icon: Code,
    skills: ["Python", "TensorFlow", "NLP", "React", "PyTorch", "OpenAI API"],
    experience: "5+ Years",
    location: "San Francisco, CA",
    projects: 50,
    email: "alex.chen@aipoweredsolutions.com",
    github: "alexchen-ai",
    linkedin: "alexchen-ml",
    bio: "Alex is a passionate AI developer with over 5 years of experience in machine learning and natural language processing. He has led the development of multiple AI-powered applications and has a strong background in both frontend and backend technologies.",
    achievements: [
      "Published 3 research papers on NLP",
      "Led AI integration for 20+ projects",
      "Certified TensorFlow Developer",
      "Winner of AI Hackathon 2023"
    ],
    skillLevels: [
      { name: "Python", level: 95 },
      { name: "Machine Learning", level: 90 },
      { name: "React", level: 85 },
      { name: "TensorFlow", level: 92 },
      { name: "NLP", level: 88 },
      { name: "API Development", level: 87 }
    ]
  },
  "cloud-developer": {
    id: "cloud-developer",
    name: "Sarah Kim",
    role: "Cloud Developer",
    description: "Specialist in AWS, GCP, Azure, and deployment",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "DevOps", "Terraform", "Azure"],
    experience: "6+ Years",
    location: "Seattle, WA",
    projects: 75,
    email: "sarah.kim@aipoweredsolutions.com",
    github: "sarahkim-cloud",
    linkedin: "sarahkim-devops",
    bio: "Sarah is a cloud infrastructure expert with extensive experience in designing and implementing scalable cloud solutions. She specializes in multi-cloud deployments and has helped numerous startups scale their infrastructure efficiently.",
    achievements: [
      "AWS Solutions Architect Professional",
      "Kubernetes Certified Administrator",
      "Reduced infrastructure costs by 40% for clients",
      "Built CI/CD pipelines for 100+ projects"
    ],
    skillLevels: [
      { name: "AWS", level: 98 },
      { name: "Kubernetes", level: 92 },
      { name: "Docker", level: 95 },
      { name: "Terraform", level: 88 },
      { name: "DevOps", level: 90 },
      { name: "Azure", level: 85 }
    ]
  },
  "web-developer": {
    id: "web-developer",
    name: "Mike Rodriguez",
    role: "Web Developer",
    description: "Skilled in React, Next.js, and modern web platforms",
    icon: Layers,
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "GraphQL"],
    experience: "4+ Years",
    location: "Austin, TX",
    projects: 60,
    email: "mike.rodriguez@aipoweredsolutions.com",
    github: "mikerod-dev",
    linkedin: "mikerodriguez-web",
    bio: "Mike is a frontend specialist who creates beautiful, performant web applications. He has a keen eye for design and user experience, and specializes in modern React ecosystems and performance optimization.",
    achievements: [
      "Built 40+ production React apps",
      "Core team member of open-source library",
      "Speaker at React conferences",
      "Improved app performance by 60% on average"
    ],
    skillLevels: [
      { name: "React", level: 96 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Performance Optimization", level: 88 },
      { name: "UI/UX Design", level: 82 }
    ]
  }
};

export default function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  if (!member) return null;

  const memberData = teamMembers[member.id] || member;
  const IconComponent = memberData.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-md border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-primary-foreground" />
            </div>
            {memberData.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - Basic Info */}
          <div className="space-y-6">
            <div className="bg-background/50 rounded-xl p-6 border border-border/50">
              <h3 className="font-semibold text-lg mb-4 text-primary">{memberData.role}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{memberData.experience} Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{memberData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-muted-foreground" />
                  <span>{memberData.projects}+ Projects Completed</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-background/50 rounded-xl p-6 border border-border/50">
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  {memberData.email}
                </Button>
                {memberData.github && (
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Github className="w-4 h-4 mr-2" />
                    {memberData.github}
                  </Button>
                )}
                {memberData.linkedin && (
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Linkedin className="w-4 h-4 mr-2" />
                    {memberData.linkedin}
                  </Button>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-background/50 rounded-xl p-6 border border-border/50">
              <h4 className="font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {memberData.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <div className="bg-background/50 rounded-xl p-6 border border-border/50">
              <h4 className="font-semibold mb-4">About</h4>
              <p className="text-muted-foreground leading-relaxed">
                {memberData.bio}
              </p>
            </div>

            {/* Skill Levels */}
            <div className="bg-background/50 rounded-xl p-6 border border-border/50">
              <h4 className="font-semibold mb-4">Skill Proficiency</h4>
              <div className="space-y-4">
                {memberData.skillLevels.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-background/50 rounded-xl p-6 border border-border/50">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {memberData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
