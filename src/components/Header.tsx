import { useState, useEffect } from "react";
import { Menu, X, Code, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Hazeem01", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abdulhazeem-adenekan",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:hazeem4877@gmail.com", label: "Email" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a href='#home' className='flex items-center space-x-2 group'>
            <div className='p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:shadow-lg transition-all duration-300'>
              <Code className='w-6 h-6 text-white' />
            </div>
            <span className='font-heading font-bold text-xl text-foreground'>
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group'
              >
                {link.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300'></span>
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className='hidden md:flex items-center space-x-4'>
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant='ghost'
                size='sm'
                asChild
                className='hover:bg-secondary hover:text-primary'
              >
                <a href={social.href} target='_blank' aria-label={social.label}>
                  <social.icon className='w-5 h-5' />
                </a>
              </Button>
            ))}
            <Button
              asChild
              className='ml-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300'
            >
              <a href='#contact'>Let's Talk</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='sm'
            className='md:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden mt-4 p-4 rounded-lg bg-card border border-border shadow-lg animate-fade-up'>
            <nav className='flex flex-col space-y-3'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className='font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className='flex items-center justify-between mt-4 pt-4 border-t border-border'>
              <div className='flex space-x-2'>
                {socialLinks.map((social) => (
                  <Button key={social.label} variant='ghost' size='sm' asChild>
                    <a href={social.href} target="_blank" aria-label={social.label}>
                      <social.icon className='w-5 h-5' />
                    </a>
                  </Button>
                ))}
              </div>
              <Button
                asChild
                size='sm'
                className='bg-gradient-to-r from-primary to-accent'
              >
                <a href='#contact'>Let's Talk</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
