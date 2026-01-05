import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, Layout, Palette, Router as RouterIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            GymLogger Stack
          </div>
          <div className="flex gap-4">
            <Link to="/features">
               <Button variant="ghost">Features</Button>
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Build Faster with <span className="text-primary">Modern Stack</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            A powerful template featuring Vite, React, TailwindCSS, Shadcn UI, Convex, and React Router DOM.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105">
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Palette className="h-8 w-8 text-blue-500" />}
              title="Tailwind CSS"
              description="Utility-first CSS framework for rapid UI development."
            />
            <FeatureCard 
              icon={<Layout className="h-8 w-8 text-purple-500" />}
              title="Shadcn UI"
              description="Beautifully designed components built with Radix UI."
            />
            <FeatureCard 
              icon={<Database className="h-8 w-8 text-orange-500" />}
              title="Convex DB"
              description="Reactive backend-as-a-service for realtime data."
            />
            <FeatureCard 
              icon={<RouterIcon className="h-8 w-8 text-pink-500" />}
              title="React Router"
              description="Declarative routing for single-page applications."
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 border-t border-border">
          <div className="text-center text-muted-foreground">
              Built by Antigravity
          </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 inline-block p-3 rounded-2xl bg-muted">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
