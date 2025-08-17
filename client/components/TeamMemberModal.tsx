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
  "vandana-kumari": {
    id: "vandana-kumari",
    name: "Vandana Kumari",
    role: "Founder & Full Stack AI Engineer",
    description: "Expert in building end-to-end AI systems",
    icon: Code,
    skills: ["Python", "Machine Learning", "Deep Learning", "AI Systems", "TensorFlow", "PyTorch"],
    experience: "2 Years",
    location: "India",
    projects: 15,
    email: "vandana@prismora.tech",
    github: "vandana-kumari",
    linkedin: "vandana-kumari-ai",
    bio: "Vandana is the visionary founder of Prismora AI with a B.Tech in Computer Science & Engineering. With 2 years of individual experience, she is passionate about building end-to-end AI systems, merging machine learning, deep learning, and software engineering to create impactful solutions that solve real-world problems.",
    achievements: [
      "Founded Prismora AI in August 2025",
      "2 years of AI development experience",
      "B.Tech in Computer Science & Engineering",
      "Built 15+ individual AI projects"
    ],
    skillLevels: [
      { name: "Python", level: 95 },
      { name: "Machine Learning", level: 98 },
      { name: "Deep Learning", level: 95 },
      { name: "AI Systems", level: 92 },
      { name: "TensorFlow", level: 90 },
      { name: "Software Engineering", level: 88 }
    ]
  },
  "shivam-singh": {
    id: "shivam-singh",
    name: "Shivam Singh",
    role: "Co-founder & Cloud Engineer",
    description: "Specialist in cloud architecture and DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "DevOps", "Cloud Architecture", "Infrastructure"],
    experience: "2 Years",
    location: "India",
    projects: 12,
    email: "shivam@prismora.tech",
    github: "shivam-singh-cloud",
    linkedin: "shivam-singh-devops",
    bio: "Shivam is a co-founder of Prismora AI with a B.Tech in Computer Science & Engineering. With 2 years of individual experience in cloud technologies, he specializes in cloud architecture and DevOps, ensuring Prismora AI solutions are secure, scalable, and future-ready.",
    achievements: [
      "Co-founded Prismora AI in August 2025",
      "2 years of cloud engineering experience",
      "B.Tech in Computer Science & Engineering",
      "Completed 12+ individual cloud projects"
    ],
    skillLevels: [
      { name: "AWS", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "Docker", level: 95 },
      { name: "DevOps", level: 92 },
      { name: "Cloud Architecture", level: 88 },
      { name: "Infrastructure", level: 85 }
    ]
  },
  "anshuman-sharma": {
    id: "anshuman-sharma",
    name: "Anshuman Sharma",
    role: "Co-founder & Full Stack Engineer",
    description: "Expert in front-end and back-end systems",
    icon: Layers,
    skills: ["React", "Node.js", "Full Stack", "TypeScript", "MongoDB", "API Development"],
    experience: "2 Years",
    location: "India",
    projects: 18,
    email: "anshuman@prismora.tech",
    github: "anshuman-sharma",
    linkedin: "anshuman-sharma-dev",
    bio: "Anshuman is a co-founder of Prismora AI with a Master of Computer Applications (MCA). With 2 years of individual experience in full-stack development, he bridges front-end and back-end systems to deliver seamless, user-centric products that provide exceptional user experiences.",
    achievements: [
      "Co-founded Prismora AI in August 2025",
      "Master of Computer Applications (MCA)",
      "2 years of full-stack development experience",
      "Built 18+ individual full-stack applications"
    ],
    skillLevels: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Full Stack Development", level: 95 },
      { name: "API Development", level: 88 },
      { name: "UI/UX Design", level: 85 }
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
