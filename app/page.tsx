"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormGroup } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { CodeBlock } from "@/components/CodeBlock";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [gameTime, setGameTime] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [targetButton, setTargetButton] = useState<string>("");
  const [gameLevel, setGameLevel] = useState(1);

  const createRipple = () => {
    // Ripple effect is handled via CSS animation
    // This function is kept for potential future enhancements
  };

  const handleButtonClick = (variant: string) => {
    createRipple();
    setClickCount((prev) => prev + 1);
    toast({
      title: `${variant} Button Clicked! 🎉`,
      description: `You've clicked ${clickCount + 1} buttons so far! Keep exploring!`,
      duration: 2000,
    });
  };

  // Game functions
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameActive && gameTime > 0) {
      interval = setInterval(() => {
        setGameTime((prev) => {
          if (prev <= 1) {
            setGameActive(false);
            toast({
              title: "⏰ Time's Up!",
              description: `Final Score: ${gameScore} points! ${gameScore > 20 ? "Amazing! 🎉" : gameScore > 10 ? "Good job! 👏" : "Keep practicing! 💪"}`,
              duration: 5000,
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameActive, gameTime, gameScore, toast]);

  const startGame = () => {
    setGameActive(true);
    setGameScore(0);
    setGameTime(30);
    setGameLevel(1);
    generateNewTarget();
    toast({
      title: "🎮 Game Started!",
      description: "Find and click the target button as fast as you can!",
      duration: 3000,
    });
  };

  const generateNewTarget = useCallback(() => {
    const variants = ["default", "gradient", "glass", "glow", "outline", "ghost", "destructive", "secondary"];
    const randomIndex = Math.floor(Math.random() * variants.length);
    setTargetButton(variants[randomIndex]);
  }, []);

  const handleGameButtonClick = (variant: string) => {
    createRipple();
    if (!gameActive) return;
    
    if (variant === targetButton) {
      const points = gameLevel * 10;
      setGameScore((prev) => prev + points);
      setGameLevel((prev) => prev + 1);
      generateNewTarget();
      toast({
        title: `🎯 Correct! +${points} points!`,
        description: `Level ${gameLevel + 1} - Find the "${targetButton}" button!`,
        duration: 2000,
      });
    } else {
      toast({
        title: "❌ Wrong button!",
        description: `Look for the "${targetButton}" button!`,
        duration: 1500,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Toaster />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 bg-gradient-to-b from-transparent via-white/20 to-transparent dark:via-gray-900/20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
          <Badge variant="gradient" className="mb-4 text-sm px-6 py-2 text-base font-bold animate-bounce">
            ✨ Premium UI Components
          </Badge>
          <h1 className="text-6xl md:text-8xl font-extrabold gradient-text animate-slide-in drop-shadow-2xl">
            @ozkan/ui
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto animate-slide-in font-semibold">
            Modern, accessible, and beautifully designed React components with stunning effects. Build faster with premium UI components.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Button variant="gradient" size="lg" className="text-lg px-8 hover:scale-110 transition-transform" onClick={() => toast({ title: "Getting started...", description: "Check the installation section below!" })}>
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 hover:scale-110 transition-transform"
              asChild
            >
              <a 
                href="/storybook" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Docs
              </a>
            </Button>
            <Button 
              variant="glow" 
              size="lg" 
              className="text-lg px-8 hover:scale-110 transition-transform"
              onClick={() => {
                const element = document.getElementById('component-gallery');
                element?.scrollIntoView({ behavior: 'smooth' });
                toast({ title: "Scroll to Gallery", description: "Check out all the components!" });
              }}
            >
              Explore Components
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="glass" size="lg" className="text-lg px-8 hover:scale-110 transition-transform">
                  See Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="glass">
                <DialogHeader>
                  <DialogTitle>Welcome to @ozkan/ui</DialogTitle>
                  <DialogDescription>
                    Experience premium UI components with gradient, glass, and glow effects.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    This is a professional component library built with TypeScript, Tailwind CSS, and Radix UI.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="gradient">TypeScript</Badge>
                    <Badge variant="glass">Tailwind</Badge>
                    <Badge variant="glow">Radix UI</Badge>
        </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Learn More</Button>
                  <Button variant="gradient" onClick={() => toast({ title: "Let's get started!", description: "Scroll down to see installation guide" })}>Get Started</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Quick Button Showcase in Hero */}
          <div className="mt-16 max-w-5xl mx-auto">
            <p className="text-center text-sm text-muted-foreground mb-6 animate-pulse">
              ✨ Click any button to see magic happen! ✨
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                variant="default" 
                size="sm" 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200"
                onClick={() => handleButtonClick("Default")}
              >
                Default
              </Button>
              <Button 
                variant="secondary" 
                size="sm" 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200"
                onClick={() => handleButtonClick("Secondary")}
              >
                Secondary
              </Button>
              <Button 
                variant="destructive" 
                size="sm" 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/50"
                onClick={() => handleButtonClick("Destructive")}
              >
                Delete
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200 hover:border-2"
                onClick={() => handleButtonClick("Outline")}
              >
                Outline
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200"
                onClick={() => handleButtonClick("Ghost")}
              >
                Ghost
              </Button>
              <Button 
                variant="link" 
                size="sm" 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200"
                onClick={() => handleButtonClick("Link")}
              >
                Link
              </Button>
              <Button 
                variant="gradient" 
                size="sm" 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/50"
                onClick={() => handleButtonClick("Gradient")}
              >
                Gradient ✨
              </Button>
              <Button 
                variant="glass" 
                size="sm" 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200 hover:backdrop-blur-xl"
                onClick={() => handleButtonClick("Glass")}
              >
                Glass 🪟
              </Button>
              <Button 
                variant="glow" 
                size="sm" 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/60"
                onClick={() => handleButtonClick("Glow")}
              >
                Glow 💫
              </Button>
              <Button 
                size="sm" 
                loading 
                className="relative overflow-hidden hover:scale-110 transition-all duration-200"
                onClick={() => {}}
              >
                Loading
              </Button>
              <Button 
                variant="gradient" 
                size="sm" 
                shimmer 
                className="relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200"
                onClick={() => handleButtonClick("Shimmer")}
              >
                Shimmer
              </Button>
            </div>
            {clickCount > 0 && (
              <div className="mt-6 text-center">
                <Badge variant="gradient" className="text-sm px-4 py-1 animate-bounce">
                  🎉 {clickCount} button{clickCount > 1 ? 's' : ''} clicked! Keep going!
                </Badge>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/30 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card variant="glass" className="text-center hover-lift border-2 border-blue-200/50 dark:border-blue-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold gradient-text mb-2 drop-shadow-lg">9+</div>
                <p className="text-foreground font-semibold text-lg">Components</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 border-4 border-white/30 dark:border-white/20 shadow-2xl shadow-purple-500/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <CardContent className="pt-6 relative z-10">
                <div className="text-6xl font-extrabold text-white mb-2 drop-shadow-2xl">15+</div>
                <p className="text-white font-bold text-xl drop-shadow-lg">Variants</p>
              </CardContent>
            </Card>
            <Card variant="glow" className="text-center hover-lift border-2 border-green-300/50 dark:border-green-700/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg shadow-green-500/20">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2 drop-shadow-lg">100%</div>
                <p className="text-foreground font-semibold text-lg">Accessible</p>
              </CardContent>
            </Card>
            <Card variant="elevated" className="text-center hover-lift border-2 border-pink-200/50 dark:border-pink-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold gradient-text mb-2 drop-shadow-lg">∞</div>
                <p className="text-foreground font-semibold text-lg">Customizable</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose @ozkan/ui?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for modern web applications with attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="animate-scale-in hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold text-lg">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">✨</Badge>
                  Premium Effects
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Gradient, glassmorphism, glow effects, and shimmer animations that make your UI stand out.
                </p>
                <div className="flex gap-2">
                  <Badge variant="gradient" className="text-xs">Gradient</Badge>
                  <Badge variant="glass" className="text-xs">Glass</Badge>
                  <Badge variant="glow" className="text-xs">Glow</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold text-lg">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">♿</Badge>
                  Accessible
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Built on Radix UI primitives, ensuring full accessibility and keyboard navigation.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">WCAG</Badge>
                  <Badge variant="outline" className="text-xs">ARIA</Badge>
                  <Badge variant="outline" className="text-xs">Keyboard</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold text-lg">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">⚡</Badge>
                  Type-Safe
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Full TypeScript support with comprehensive type definitions for better DX.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                  <Badge variant="secondary" className="text-xs">IntelliSense</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold text-lg">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">🎨</Badge>
                  Customizable
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Easy to customize with Tailwind CSS. Change colors, sizes, and styles with simple class modifications.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold text-lg">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">📦</Badge>
                  Lightweight
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Tree-shakeable components. Only import what you need. No unnecessary bundle size.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold text-lg">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">🚀</Badge>
                  Production Ready
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Battle-tested components used in production. Well-documented and maintained.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
              <CardTitle className="text-2xl mb-2 text-white font-bold">⚡ Quick Installation</CardTitle>
              <CardDescription className="text-white/90">Get started in minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-semibold mb-2 block">1. Install the package</Label>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                    npm install @ozkan/ui
                  </div>
                </div>
                <div>
                  <Label className="text-base font-semibold mb-2 block">2. Import styles</Label>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                    import &quot;@ozkan/ui/styles&quot;
                  </div>
                </div>
                <div>
                  <Label className="text-base font-semibold mb-2 block">3. Use components</Label>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                    {`import { Button } from "@ozkan/ui"`}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="gradient" onClick={() => toast({ title: "Copied!", description: "npm install @ozkan/ui" })}>
                  Copy Install Command
                </Button>
                <Button variant="outline" onClick={() => toast({ title: "Documentation", description: "Check Storybook for detailed docs" })}>
                  View Full Docs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Component Gallery */}
      <section id="component-gallery" className="py-20 px-4 scroll-mt-20 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text drop-shadow-lg">🎨 Component Gallery</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold animate-slide-in">
              Explore all available components and their variants
            </p>
          </div>

          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-2 border-gray-200 dark:border-gray-700 shadow-lg">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
            </TabsList>

            <TabsContent value="buttons" className="space-y-6">
              <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                  <CardTitle className="text-white font-bold">All Button Variants</CardTitle>
                  <CardDescription className="text-white/90">Click any button to see toast notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="mb-3 block font-semibold text-lg">Standard Variants</Label>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="default" className="hover:scale-105 transition-transform" onClick={() => toast({ title: "Default button clicked!" })}>
                        Default
                      </Button>
                      <Button variant="secondary" className="hover:scale-105 transition-transform" onClick={() => toast({ title: "Secondary button!" })}>
                        Secondary
                      </Button>
                      <Button variant="destructive" className="hover:scale-105 transition-transform" onClick={() => toast({ title: "Destructive action", description: "This would delete something" })}>
                        Delete
                      </Button>
                      <Button variant="outline" className="hover:scale-105 transition-transform" onClick={() => toast({ title: "Outline button!" })}>
                        Outline
                      </Button>
                      <Button variant="ghost" className="hover:scale-105 transition-transform" onClick={() => toast({ title: "Ghost button!" })}>
                        Ghost
                      </Button>
                      <Button variant="link" className="hover:scale-105 transition-transform" onClick={() => toast({ title: "Link button!" })}>
                        Link
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-3 block font-semibold text-lg">Premium Variants</Label>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="gradient" className="hover:scale-105 transition-transform" onClick={() => toast({ title: "Gradient button!", description: "Beautiful gradient effect!" })}>
                        Gradient ✨
                      </Button>
                      <Button variant="glass" className="hover:scale-105 transition-transform" onClick={() => toast({ title: "Glass button!", description: "Glassmorphism effect!" })}>
                        Glass 🪟
                      </Button>
                      <Button variant="glow" className="hover:scale-105 transition-transform" onClick={() => toast({ title: "Glow button!", description: "Glowing effect!" })}>
                        Glow 💫
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-3 block font-semibold text-lg">Sizes</Label>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm" variant="gradient" className="hover:scale-105 transition-transform">Small</Button>
                      <Button size="default" variant="gradient" className="hover:scale-105 transition-transform">Default</Button>
                      <Button size="lg" variant="gradient" className="hover:scale-105 transition-transform">Large</Button>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-3 block font-semibold text-lg">Special States</Label>
                    <div className="flex flex-wrap gap-3">
                      <Button loading className="hover:scale-105 transition-transform">Loading...</Button>
                      <Button variant="gradient" shimmer className="hover:scale-105 transition-transform">
                        Shimmer Effect
                      </Button>
                      <Button disabled className="opacity-50 cursor-not-allowed">Disabled</Button>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-3 block font-semibold text-lg">More Examples</Label>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="gradient" size="lg" className="hover:scale-110 transition-transform">
                        Large Gradient
                      </Button>
                      <Button variant="glass" size="lg" className="hover:scale-110 transition-transform">
                        Large Glass
                      </Button>
                      <Button variant="glow" size="lg" className="hover:scale-110 transition-transform">
                        Large Glow
                      </Button>
                      <Button variant="outline" size="lg" className="hover:scale-110 transition-transform">
                        Large Outline
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inputs" className="space-y-6">
              <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                  <CardTitle className="text-white font-bold">Input Components</CardTitle>
                  <CardDescription className="text-white/90">Smart inputs with validation states and effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6 bg-white/10 backdrop-blur-md">
                  <div className="space-y-2 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                    <Label className="font-bold text-gray-900 dark:text-white">Normal Input</Label>
                    <Input placeholder="Type something here..." className="font-medium" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Standard input field</p>
                  </div>
                  <div className="space-y-2 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                    <Label className="font-bold text-gray-900 dark:text-white">Email Input</Label>
                    <Input type="email" placeholder="your@email.com" className="font-medium" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Email validation ready</p>
                  </div>
                  <div className="space-y-2 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                    <Label className="font-bold text-gray-900 dark:text-white">Password Input</Label>
                    <Input type="password" placeholder="Enter password" className="font-medium" />
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Secure password field</p>
                  </div>
                  <div className="space-y-2 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <Label className="font-bold text-red-700 dark:text-red-400">Error State</Label>
                    <Input error placeholder="This field has an error" className="font-medium" />
                    <p className="text-xs text-red-600 dark:text-red-400 font-bold">Shows error styling</p>
                  </div>
                  <div className="space-y-2 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <Label className="font-bold text-green-700 dark:text-green-400">Success State</Label>
                    <Input success placeholder="This field is valid" className="font-medium" />
                    <p className="text-xs text-green-600 dark:text-green-400 font-bold">Shows success styling</p>
                  </div>
                  <div className="space-y-2 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                    <Label className="font-bold text-blue-700 dark:text-blue-400">Glow Effect</Label>
                    <Input glow placeholder="Focus to see the glow effect" className="font-medium" />
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Glows on focus</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forms" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                    <CardTitle className="text-lg text-white font-bold">📝 Contact Form</CardTitle>
                    <CardDescription className="text-white/90">Real-world form implementation</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Form>
                      <FormGroup>
                        <FormField label="Name" required>
                          <Input 
                            placeholder="John Doe" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="font-medium"
                          />
                        </FormField>
                        <FormField label="Email" required>
                          <Input 
                            type="email" 
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="font-medium"
                          />
                        </FormField>
                      </FormGroup>
                      <div className="mt-6 flex gap-4">
                        <Button 
                          variant="gradient" 
                          className="font-bold shadow-lg hover:scale-110 transition-transform"
                          onClick={() => {
                            createRipple();
                            if (name && email) {
                              toast({
                                title: "✅ Form submitted!",
                                description: `Thanks ${name}, we'll contact you at ${email}`,
                              });
                            } else {
                              toast({
                                title: "⚠️ Please fill all fields",
                                description: "All fields are required",
                                variant: "destructive",
                              });
                            }
                          }}
                        >
                          Submit
                        </Button>
                        <Button 
                          variant="outline" 
                          className="font-bold border-2 hover:scale-110 transition-transform"
                          onClick={() => {
                            createRipple();
                            setName("");
                            setEmail("");
                            toast({ title: "🔄 Form reset" });
                          }}
                        >
                          Reset
                        </Button>
                      </div>
                    </Form>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                    <CardTitle className="text-lg text-white font-bold">🔐 Login Form</CardTitle>
                    <CardDescription className="text-white/90">Authentication form example</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Form>
                      <FormField label="Email" required>
                        <Input 
                          type="email" 
                          placeholder="email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="font-medium"
                        />
                      </FormField>
                      <FormField label="Password" required>
                        <Input 
                          type="password" 
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="font-medium"
                        />
                      </FormField>
                      <div className="mt-6">
                        <Button 
                          variant="gradient" 
                          className="w-full font-bold shadow-lg hover:scale-110 transition-transform"
                          onClick={() => {
                            createRipple();
                            if (email && password) {
                              toast({
                                title: "🎉 Login successful!",
                                description: "Welcome back!",
                              });
                            } else {
                              toast({
                                title: "⚠️ Please fill all fields",
                                description: "Email and password are required",
                                variant: "destructive",
                              });
                            }
                          }}
                        >
                          Sign In
                        </Button>
                      </div>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cards" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                    <CardTitle className="text-white font-bold">🪟 Glass Card</CardTitle>
                    <CardDescription className="text-white/90">Beautiful glassmorphism effect</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
                      This card features a stunning glass effect with backdrop blur. Perfect for modern UIs.
                    </p>
                    <Button variant="outline" size="sm" className="font-bold border-2 hover:scale-110 transition-transform">Learn More</Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                    <CardTitle className="text-white font-bold">🌈 Gradient Card</CardTitle>
                    <CardDescription className="text-white/90">Vibrant gradient background</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Eye-catching gradient that draws attention. Great for featured content.
                    </p>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">Explore</Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                    <CardTitle className="text-white font-bold">💫 Glow Card</CardTitle>
                    <CardDescription className="text-white/90">Card with glowing border</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Subtle glow effect that adds depth. Ideal for important information.
                    </p>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">View Details</Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                    <CardTitle className="text-white font-bold">⬆️ Elevated Card</CardTitle>
                    <CardDescription className="text-white/90">Hover to see it lift</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Interactive card that elevates on hover. Provides great user feedback.
                    </p>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">Try It</Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                    <CardTitle className="text-white font-bold">📄 Default Card</CardTitle>
                    <CardDescription className="text-white/90">Standard card variant</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Clean and simple card design. Perfect for general content display.
                    </p>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">Read More</Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                    <CardTitle className="flex items-center gap-2 text-white font-bold">
                      <Badge variant="glass" className="bg-white/20 text-white border-white/30">New</Badge>
                      ⭐ Featured Card
                    </CardTitle>
                    <CardDescription className="text-white/90">Card with badge</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Cards can include badges, icons, and other elements for rich content.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="gradient" size="sm" className="hover:scale-105 transition-transform">Action</Button>
                      <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">Cancel</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="dialogs" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                    <CardTitle className="text-lg text-white font-bold">⚠️ Confirmation Dialog</CardTitle>
                    <CardDescription className="text-white/90">Standard confirmation pattern</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="gradient" className="font-bold shadow-lg hover:scale-110 transition-transform" onClick={() => createRipple()}>Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Are you sure?</DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. This will permanently delete your account.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline" className="font-bold border-2">Cancel</Button>
                          <Button variant="destructive" className="font-bold shadow-lg">Delete</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                    <CardTitle className="text-lg text-white font-bold">ℹ️ Info Dialog</CardTitle>
                    <CardDescription className="text-white/90">Information display pattern</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="glass" className="font-bold bg-white/30 backdrop-blur-xl border-2 border-white/50 text-white shadow-lg hover:scale-110 transition-transform" onClick={() => createRipple()}>Show Info</Button>
                      </DialogTrigger>
                      <DialogContent className="glass">
                        <DialogHeader>
                          <DialogTitle>About @ozkan/ui</DialogTitle>
                          <DialogDescription>
                            A premium component library built with TypeScript, Tailwind CSS, and Radix UI.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <div className="flex gap-2 mb-4">
                            <Badge variant="gradient" className="font-bold">TypeScript</Badge>
                            <Badge variant="glass" className="font-bold">Tailwind</Badge>
                            <Badge variant="glow" className="font-bold">Radix UI</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-semibold">
                            All components are fully accessible, customizable, and production-ready.
                          </p>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" className="font-bold border-2">Close</Button>
                          <Button variant="gradient" className="font-bold shadow-lg">Learn More</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Badges & Tabs Showcase */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent dark:via-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="animate-fade-in bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                <CardTitle className="text-lg text-white font-bold">Badge Variants</CardTitle>
                <CardDescription className="text-white/90">Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="mb-2 block font-semibold">Standard Badges</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Error</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block font-semibold">Premium Badges</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="gradient">Gradient ✨</Badge>
                    <Badge variant="glass">Glass 🪟</Badge>
                    <Badge variant="glow" pulse>Pulsing Glow</Badge>
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block font-semibold">Use Cases</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="gradient">New</Badge>
                    <Badge variant="secondary">In Progress</Badge>
                    <Badge variant="destructive">Urgent</Badge>
                    <Badge variant="outline">Draft</Badge>
                    <Badge variant="glow" pulse>Featured</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" className="animate-fade-in">
              <CardHeader>
                <CardTitle>Tabs Component</CardTitle>
                <CardDescription>Smooth tab navigation</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tab1" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tab1">Overview</TabsTrigger>
                    <TabsTrigger value="tab2">Features</TabsTrigger>
                    <TabsTrigger value="tab3">Pricing</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-4">
                    <p className="text-muted-foreground">
                      Get an overview of all components and their capabilities. Perfect for understanding the library structure.
                    </p>
                  </TabsContent>
                  <TabsContent value="tab2" className="mt-4">
                    <p className="text-muted-foreground">
                      Explore premium features like gradient effects, glassmorphism, glow effects, and shimmer animations.
                    </p>
                  </TabsContent>
                  <TabsContent value="tab3" className="mt-4">
                    <p className="text-muted-foreground">
                      All components are free and open-source. Use them in any project, commercial or personal.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-muted-foreground">
              Ideal for various types of projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                <CardTitle className="text-lg text-white font-bold">🌐 Web Applications</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Build modern web applications with beautiful, accessible components. Perfect for dashboards, admin panels, and SaaS products.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                <CardTitle className="text-lg text-white font-bold">🚀 Landing Pages</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Create stunning landing pages with premium effects. Gradient buttons, glass cards, and glow effects make your page stand out.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Marketing</Badge>
                  <Badge variant="outline">Portfolio</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                <CardTitle className="text-lg text-white font-bold">🎨 Design Systems</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Use as a foundation for your design system. All components are customizable and follow best practices.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Scalable</Badge>
                  <Badge variant="outline">Maintainable</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Code Examples</h2>
            <p className="text-xl text-muted-foreground">
              Copy-paste ready code snippets for all components
            </p>
          </div>

          <Tabs defaultValue="button-code" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="button-code">Button</TabsTrigger>
              <TabsTrigger value="input-code">Input</TabsTrigger>
              <TabsTrigger value="dialog-code">Dialog</TabsTrigger>
              <TabsTrigger value="form-code">Form</TabsTrigger>
            </TabsList>

            <TabsContent value="button-code" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                    <CardTitle className="text-white font-bold">Basic Button</CardTitle>
                    <CardDescription className="text-white/90">Simple button usage</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CodeBlock code={`import { Button } from "@ozkan/ui";

<Button>Click me</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="glass">Glass</Button>
<Button variant="glow">Glow</Button>`} />
                  </CardContent>
                </Card>

                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                    <CardTitle className="text-white font-bold">Button Sizes</CardTitle>
                    <CardDescription className="text-white/90">Different button sizes</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CodeBlock code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`} />
                  </CardContent>
                </Card>

                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                    <CardTitle className="text-white font-bold">Button States</CardTitle>
                    <CardDescription className="text-white/90">Loading and shimmer effects</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CodeBlock code={`<Button loading>Loading...</Button>
<Button variant="gradient" shimmer>
  Shimmer Effect
</Button>
<Button disabled>Disabled</Button>`} />
                  </CardContent>
                </Card>

                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                    <CardTitle className="text-white font-bold">All Variants</CardTitle>
                    <CardDescription className="text-white/90">Complete button variant list</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CodeBlock code={`<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="glass">Glass</Button>
<Button variant="glow">Glow</Button>`} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="input-code" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                    <CardTitle className="text-white font-bold">Basic Input</CardTitle>
                    <CardDescription className="text-white/90">Standard input fields</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CodeBlock code={`import { Input } from "@ozkan/ui";

<Input placeholder="Enter text..." />
<Input type="email" placeholder="email@example.com" />
<Input type="password" placeholder="Password" />`} />
                  </CardContent>
                </Card>

                <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                    <CardTitle className="text-white font-bold">Input States</CardTitle>
                    <CardDescription className="text-white/90">Error, success, and glow states</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CodeBlock code={`<Input error placeholder="Error state" />
<Input success placeholder="Success state" />
<Input glow placeholder="Glow effect" />`} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="dialog-code" className="space-y-6">
              <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                  <CardTitle className="text-white font-bold">Dialog Component</CardTitle>
                  <CardDescription className="text-white/90">Modal dialogs with Radix UI</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <CodeBlock code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ozkan/ui";
import { Button } from "@ozkan/ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="form-code" className="space-y-6">
              <Card className="bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                  <CardTitle className="text-white font-bold">Form Component</CardTitle>
                  <CardDescription className="text-white/90">Complete form example</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <CodeBlock code={`import { Form, FormField, FormGroup } from "@ozkan/ui";
import { Input } from "@ozkan/ui";
import { Button } from "@ozkan/ui";

<Form>
  <FormGroup>
    <FormField label="First Name" required>
      <Input placeholder="John" />
    </FormField>
    <FormField label="Last Name" required>
      <Input placeholder="Doe" />
    </FormField>
  </FormGroup>
  <FormField label="Email" required>
    <Input type="email" placeholder="email@example.com" />
  </FormField>
  <Button type="submit">Submit</Button>
</Form>`} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-teal-50/30 to-transparent dark:via-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text drop-shadow-lg">📚 Documentation</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
              Complete API reference and usage guide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">📚</Badge>
                  Getting Started
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Learn how to install and set up @ozkan/ui in your project.
                </p>
                <Button variant="outline" size="sm" onClick={() => toast({ title: "Installation Guide", description: "npm install @ozkan/ui" })}>
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">🎨</Badge>
                  Components
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Browse all available components with examples and props.
                </p>
                <Button variant="outline" size="sm" onClick={() => toast({ title: "Components", description: "Check Storybook for all components" })}>
                  View All
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">⚙️</Badge>
                  Customization
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Learn how to customize components with Tailwind CSS.
                </p>
                <Button variant="outline" size="sm" onClick={() => toast({ title: "Customization", description: "All components use Tailwind classes" })}>
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">♿</Badge>
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Built on Radix UI primitives for full accessibility.
                </p>
                <Button variant="outline" size="sm" onClick={() => toast({ title: "Accessibility", description: "WCAG 2.1 AA compliant" })}>
                  Read Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">🔧</Badge>
                  API Reference
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Complete TypeScript API reference for all components.
                </p>
                <Button variant="outline" size="sm" onClick={() => toast({ title: "API Reference", description: "Full TypeScript definitions available" })}>
                  View API
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-pink-400">
                <CardTitle className="flex items-center gap-2 text-white font-bold">
                  <Badge variant="glass" className="bg-white/20 text-white border-white/30">💡</Badge>
                  Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Real-world examples and use cases for all components.
                </p>
                <Button variant="outline" size="sm" onClick={() => toast({ title: "Examples", description: "Scroll up to see interactive examples" })}>
                  View Examples
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Playground */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Interactive Playground</h2>
            <p className="text-xl text-muted-foreground">
              Try different combinations and play fun games with our components!
            </p>
          </div>

          {/* Button Click Challenge Game */}
          <Card className="mb-8 bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 text-white font-bold">🎮 Button Click Challenge</CardTitle>
                  <CardDescription className="text-white/90">
                    Find and click the target button as fast as you can! Test your UI skills!
                  </CardDescription>
                </div>
                {!gameActive && (
                  <Button 
                    variant="glass" 
                    size="lg" 
                    className="hover:scale-110 transition-transform bg-white/20 backdrop-blur-xl border-2 border-white/40 text-white font-bold text-lg px-8 shadow-xl"
                    onClick={startGame}
                  >
                    Start Game 🚀
                  </Button>
                )}
              </div>
            </CardHeader>
            {gameActive && (
              <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="text-center bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold gradient-text mb-2">⏱️ {gameTime}s</div>
                      <p className="text-gray-700 dark:text-gray-300 font-semibold">Time Left</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold gradient-text mb-2">🎯 {gameScore}</div>
                      <p className="text-gray-700 dark:text-gray-300 font-semibold">Score</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-white/95 dark:bg-gray-900/95 border-2 border-pink-200 dark:border-pink-800 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold gradient-text mb-2">📊 Level {gameLevel}</div>
                      <p className="text-gray-700 dark:text-gray-300 font-semibold">Current Level</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="bg-white/95 dark:bg-gray-900/95 rounded-xl p-6 text-center border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    🎯 Find the <span className="gradient-text font-extrabold">{targetButton}</span> button!
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">Click the correct button variant to score points!</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border-2 border-gray-200 dark:border-gray-700">
                  {(["default", "gradient", "glass", "glow", "outline", "ghost", "destructive", "secondary"] as const).map((variant) => (
                    <Button
                      key={variant}
                      variant={variant}
                      size="lg"
                      className={`relative overflow-hidden hover:scale-110 active:scale-95 transition-all duration-200 font-bold shadow-xl border-2 ${
                        variant === targetButton 
                          ? "ring-4 ring-yellow-400 ring-offset-4 animate-pulse shadow-2xl shadow-yellow-400/70 scale-110 border-yellow-500" 
                          : "border-transparent"
                      }`}
                      onClick={() => handleGameButtonClick(variant)}
                    >
                      {variant}
                      {variant === targetButton && (
                        <span className="absolute -top-2 -right-2 text-yellow-400 text-2xl animate-bounce drop-shadow-lg">✨</span>
                      )}
                    </Button>
                  ))}
                </div>
                <div className="text-center">
                  <Button 
                    variant="destructive" 
                    size="lg"
                    className="font-bold shadow-xl hover:scale-110 transition-transform"
                    onClick={() => {
                      setGameActive(false);
                      toast({
                        title: "Game Stopped",
                        description: `Final Score: ${gameScore} points`,
                      });
                    }}
                  >
                    Stop Game
                  </Button>
                </div>
              </CardContent>
            )}
            {!gameActive && gameScore > 0 && (
              <CardContent className="p-6">
                <div className="text-center space-y-6 bg-white/95 dark:bg-gray-900/95 rounded-xl p-8 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                  <div className="text-4xl font-bold gradient-text mb-3">Final Score: {gameScore}</div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                    {gameScore > 50 ? "🏆 Legendary! You're a UI master!" : 
                     gameScore > 30 ? "🌟 Excellent! Great job!" : 
                     gameScore > 20 ? "👏 Good job! Keep practicing!" : 
                     "💪 Nice try! Play again to improve!"}
                  </p>
                  <Button variant="gradient" size="lg" className="font-bold text-lg px-8 hover:scale-105 transition-transform" onClick={startGame}>
                    Play Again 🎮
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Button Playground */}
          <Card className="hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-blue-400">
              <CardTitle className="text-xl text-white font-bold">Button Playground</CardTitle>
              <CardDescription className="text-white/90">
                Customize button properties and see the result live
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6 bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <Label className="text-lg font-bold text-indigo-900 dark:text-indigo-100">Variant</Label>
                    <div className="flex flex-wrap gap-3">
                      {(["default", "gradient", "glass", "glow", "outline", "ghost", "destructive"] as const).map((variant) => (
                        <Button
                          key={variant}
                          variant={variant}
                          size="sm"
                          className="hover:scale-110 active:scale-95 transition-all duration-200 font-semibold shadow-md"
                          onClick={() => toast({ title: `Selected: ${variant}`, description: "Try clicking the button below!" })}
                        >
                          {variant}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-lg font-bold text-indigo-900 dark:text-indigo-100">Size</Label>
                    <div className="flex gap-3">
                      {(["sm", "default", "lg"] as const).map((size) => (
                        <Button
                          key={size}
                          variant="outline"
                          size={size}
                          className="hover:scale-110 active:scale-95 transition-all duration-200 font-semibold shadow-md border-2"
                          onClick={() => toast({ title: `Size: ${size}` })}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center border-2 border-dashed border-purple-300 dark:border-purple-700 rounded-xl p-6 bg-white/50 dark:bg-gray-800/50">
                  <div className="text-center space-y-6">
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Live Preview</p>
                    <div className="space-y-4">
                      <Button 
                        variant="gradient" 
                        size="lg" 
                        shimmer
                        className="hover:scale-110 active:scale-95 transition-all duration-200 font-bold shadow-xl px-8"
                        onClick={() => {
                          createRipple();
                          toast({ title: "Preview Button Clicked! ✨" });
                        }}
                      >
                        Click Me!
                      </Button>
                      <Button 
                        variant="glass" 
                        size="lg" 
                        className="hover:scale-110 active:scale-95 transition-all duration-200 font-bold shadow-xl px-8 bg-white/20 backdrop-blur-xl border-2 border-white/40"
                        onClick={() => {
                          createRipple();
                          toast({ title: "Glass Button Clicked! 🪟" });
                        }}
                      >
                        Try Me!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Card className="p-8 hover-lift bg-white/95 dark:bg-gray-900/95 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-lg border-b-2 border-purple-400">
              <CardTitle className="text-3xl mb-2 text-white font-bold">🚀 Ready to Build Something Amazing?</CardTitle>
              <CardDescription className="text-white/90">
                Start using @ozkan/ui in your next project today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="text-lg px-8 font-bold hover:scale-105 transition-transform"
                  onClick={() => {
                    createRipple();
                    navigator.clipboard.writeText("npm install @ozkan/ui");
                    toast({
                      title: "✅ Copied!",
                      description: "npm install @ozkan/ui",
                    });
                  }}
                >
                  📦 npm install @ozkan/ui
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 font-bold hover:scale-105 transition-transform"
                  onClick={() => {
                    createRipple();
                    toast({
                      title: "📚 Documentation",
                      description: "Check out the Storybook for full documentation",
                    });
                  }}
                >
                  📖 View Documentation
                </Button>
                <Button 
                  variant="glow" 
                  size="lg"
                  className="text-lg px-8 font-bold hover:scale-105 transition-transform"
                  asChild
                >
                  <a 
                    href="/storybook" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => createRipple()}
                  >
                    🎨 Open Storybook
                  </a>
                </Button>
              </div>
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Free and open-source • MIT License • Built with ❤️
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-white/30 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">@ozkan/ui</h3>
              <p className="text-sm text-muted-foreground">
                Premium UI component library for React. Built with TypeScript, Tailwind CSS, and Radix UI.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto">Documentation</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Storybook</Button></li>
                <li><Button variant="link" className="p-0 h-auto">GitHub</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Components</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Button, Input, Card</li>
                <li>Dialog, Toast, Tabs</li>
                <li>Badge, Form, Label</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-muted-foreground">
            <p>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</p>
            <p className="mt-2 text-sm">© 2024 @ozkan/ui - Premium UI Component Library</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
