import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Cloud,
  Smartphone,
  Bot,
  ChevronRight,
  Mail,
  Linkedin,
  Github,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Layers,
  Info,
  Users,
  Settings,
  MessageSquare,
  CheckCircle,
  Clock,
  MessageCircle,
  Wrench,
  Activity
} from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamMemberModal from "@/components/TeamMemberModal";
import CompanyModal from "@/components/CompanyModal";
import ProjectModal from "@/components/ProjectModal";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: ""
  });
  
  const [selectedTeamMember, setSelectedTeamMember] = useState<any>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", requirements: "" });
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleTeamMemberClick = (memberId: string) => {
    setSelectedTeamMember({ id: memberId });
    setIsTeamModalOpen(true);
  };

  const handleCompanyInfoClick = () => {
    setIsCompanyModalOpen(true);
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject({ id: projectId });
    setIsProjectModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onNavigate={handleNavigate} />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 animate-gradient bg-300% blur-xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Future-Ready Technology
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 animate-gradient bg-300%">
            AI Powered Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Future-ready AI, Cloud, and Web Solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => handleNavigate("contact")}
              className="group px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleCompanyInfoClick}
              className="group px-8 py-6 text-lg font-semibold border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Info className="mr-2 w-5 h-5" />
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">Advanced AI integration</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Cloud-Native</h3>
              <p className="text-sm text-muted-foreground">Scalable infrastructure</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              We are a young tech company specializing in AI, Cloud, and Web/App solutions. 
              Our mission is to help businesses grow with scalable, AI-powered technology.
            </p>
            <Button 
              variant="outline" 
              onClick={handleCompanyInfoClick}
              className="group border-primary/50 hover:bg-primary/10"
            >
              <Info className="mr-2 w-4 h-4" />
              Learn More About Our Company
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
              onClick={() => handleTeamMemberClick("ai-developer")}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Alex Chen</CardTitle>
                <CardDescription>Full Stack AI Developer</CardDescription>
                <p className="text-sm text-muted-foreground">Expert in ML, NLP, and AI-powered features</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">React</Badge>
                </div>
                <div className="text-center">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    View Profile
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
              onClick={() => handleTeamMemberClick("cloud-developer")}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Sarah Kim</CardTitle>
                <CardDescription>Cloud Developer</CardDescription>
                <p className="text-sm text-muted-foreground">Specialist in AWS, GCP, Azure, and deployment</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">DevOps</Badge>
                </div>
                <div className="text-center">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    View Profile
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
              onClick={() => handleTeamMemberClick("web-developer")}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Mike Rodriguez</CardTitle>
                <CardDescription>Web Developer</CardDescription>
                <p className="text-sm text-muted-foreground">Skilled in React, Next.js, and modern web platforms</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
                <div className="text-center">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    View Profile
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Layers className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to power your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Web & E-Commerce Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Modern, responsive websites and e-commerce platforms built with the latest technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Mobile App Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Cross-platform mobile applications using Flutter and React Native for iOS and Android.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Cloud className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Cloud Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Deployment, hosting, and scaling solutions on AWS, GCP, and Azure platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">AI Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Intelligent chatbots, recommendation systems, and automation powered by AI.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Post-Launch Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Ongoing support, updates, bug fixes, and performance optimization for your applications.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Social Media Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Complete social media strategy, content creation, and community management for your brand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Our Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Project Showcase</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse portfolio of successful projects across different industries and technologies.
            </p>
          </div>

          {/* Project Status Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-green-400 mb-1">Completed</h3>
              <p className="text-sm text-muted-foreground">Successfully delivered projects</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <ProgressIcon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-400 mb-1">In Progress</h3>
              <p className="text-sm text-muted-foreground">Currently under development</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <MessageCircle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold text-yellow-400 mb-1">In Discussion</h3>
              <p className="text-sm text-muted-foreground">Requirements being finalized</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Wrench className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-purple-400 mb-1">Maintenance</h3>
              <p className="text-sm text-muted-foreground">Ongoing support & updates</p>
            </div>
          </div>

          {/* Current Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-400" />
              Current Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
                onClick={() => handleProjectClick("fintech-app")}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">IN PROGRESS</Badge>
                    <div className="text-sm text-muted-foreground">75% Complete</div>
                  </div>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl opacity-50">💰</div>
                  </div>
                  <CardTitle className="text-xl">AI-Powered Fintech App</CardTitle>
                  <CardDescription>
                    Intelligent financial management with AI-driven insights and automated trading recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Blockchain</Badge>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <Button variant="outline" className="w-full group">
                    View Project Details
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
                onClick={() => handleProjectClick("ecommerce-platform")}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">IN PROGRESS</Badge>
                    <div className="text-sm text-muted-foreground">60% Complete</div>
                  </div>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🛒</div>
                  </div>
                  <CardTitle className="text-xl">Custom E-Commerce Platform</CardTitle>
                  <CardDescription>
                    Scalable e-commerce solution with AI-powered product recommendations and advanced analytics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Shopify API</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <Button variant="outline" className="w-full group">
                    View Project Details
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Completed Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              Completed Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
                onClick={() => handleProjectClick("healthcare-app")}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">COMPLETED</Badge>
                    <div className="text-sm text-muted-foreground">Dec 2023</div>
                  </div>
                  <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🏥</div>
                  </div>
                  <CardTitle className="text-xl">HealthTracker Mobile App</CardTitle>
                  <CardDescription>
                    Comprehensive health monitoring app with AI-powered health insights and telemedicine features.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Flutter</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">TensorFlow Lite</Badge>
                    <Badge variant="secondary">Google Cloud</Badge>
                  </div>
                  <Button variant="outline" className="w-full group">
                    View Case Study
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
                onClick={() => handleProjectClick("restaurant-app")}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">MAINTENANCE</Badge>
                    <div className="text-sm text-muted-foreground">Oct 2023</div>
                  </div>
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🍽️</div>
                  </div>
                  <CardTitle className="text-xl">Restaurant Management System</CardTitle>
                  <CardDescription>
                    Complete restaurant management solution with online ordering, inventory, and staff management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>
                  <Button variant="outline" className="w-full group">
                    View Project Details
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Projects in Discussion */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-yellow-400" />
              Upcoming Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 cursor-pointer"
                onClick={() => handleProjectClick("ai-chatbot")}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">IN DISCUSSION</Badge>
                    <div className="text-sm text-muted-foreground">Q2 2024</div>
                  </div>
                  <div className="w-full h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🤖</div>
                  </div>
                  <CardTitle className="text-xl">Enterprise AI Chatbot</CardTitle>
                  <CardDescription>
                    Intelligent customer service chatbot with natural language processing and multi-language support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">OpenAI GPT</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                  <Button variant="outline" className="w-full group">
                    View Proposal
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex flex-col items-center justify-center">
                    <div className="text-4xl mb-4 opacity-50">💼</div>
                    <h3 className="text-lg font-semibold mb-2">Your Project Here</h3>
                    <p className="text-sm text-muted-foreground text-center max-w-xs">
                      Ready to discuss your next innovative project? Let's bring your ideas to life.
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => handleNavigate("contact")}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business with cutting-edge technology? Let's talk.
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="requirements" className="text-sm font-medium">Project Requirements</label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    placeholder="Tell us about your project..."
                    value={formData.requirements}
                    onChange={handleInputChange}
                    className="bg-background/50 min-h-32"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full group bg-primary hover:bg-primary/90">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Or reach us directly at:</p>
                  <a href="mailto:contact@aipoweredsolutions.com" className="text-primary hover:underline font-medium">
                    contact@aipoweredsolutions.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">AI Powered Solutions</h3>
              <p className="text-muted-foreground">© 2024 AI Powered Solutions. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TeamMemberModal
        member={selectedTeamMember}
        isOpen={isTeamModalOpen}
        onClose={() => {
          setIsTeamModalOpen(false);
          setSelectedTeamMember(null);
        }}
      />

      <CompanyModal
        isOpen={isCompanyModalOpen}
        onClose={() => setIsCompanyModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => {
          setIsProjectModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </div>
  );
}
