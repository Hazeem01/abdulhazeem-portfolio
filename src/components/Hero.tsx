import { useEffect, useState } from 'react';
import { ChevronDown, Download, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { technologies } from '@/data/technologies';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Developer', 'Frontend Developer', 'Backend Engineer', 'Tech Team Lead'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping && charIndex < currentRole.length) {
      const timer = setTimeout(() => {
        setTypedText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      
      return () => clearTimeout(timer);
    } else if (isTyping && charIndex >= currentRole.length) {
      // Finished typing current role, pause before deleting
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else if (!isTyping) {
      // Start deleting
      const timer = setTimeout(() => {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          // Finished deleting, move to next role
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0);
          setIsTyping(true);
        }
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [currentRoleIndex, isTyping, charIndex, typedText, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pb-16 pt-24 md:pt-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Welcome to my digital space
              </span>
            </div>
          </div>

          {/* Main heading */}
          <div className="animate-fade-up delay-200">
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">
                Abdulhazeem Adenekan
              </span>
            </h1>
          </div>

          {/* Typed role */}
          <div className="animate-fade-up delay-400">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
              <span className="font-medium">{typedText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-up delay-600">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              A mid-level experienced full-stack developer with over 4 years of experience in building scalable web applications. 
              Passionate about creating user-focused applications and enhancing development efficiency.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-800">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                asChild
              >
                <a href="#projects" className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  View My Work
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-secondary hover:-translate-y-1 transition-all duration-300 group"
                asChild
              >
                <a href="/abdulhazeem-resume.pdf" className="flex items-center gap-2" download>
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Tech stack preview */}
          <div className="animate-fade-up delay-1000">
            <div className="mt-16 pt-8 pb-20 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-4">Technologies I work with</p>
              <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm bg-secondary/80 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300">
          <span className="text-xs md:text-sm mb-1 md:mb-2">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;