import { Heart, Code2, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { technologies } from "@/data/technologies";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Hazeem01", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abdulhazeem-adenekan",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:hazeem4877@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];



  return (
    <footer className='bg-card border-t border-border'>
      <div className='container mx-auto px-6 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand & Description */}
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='p-2 rounded-lg bg-gradient-to-br from-primary to-accent'>
                <Code2 className='w-6 h-6 text-white' />
              </div>
              <span className='font-heading font-bold text-xl text-foreground'>
                Abdulhazeem Adenekan
              </span>
            </div>
            <p className='text-muted-foreground leading-relaxed mb-6 max-w-md'>
              Mid-level experienced full-stack developer with over 4 years of
              experience in building scalable web applications. Currently
              pursuing BEng in Computer Science at Anglia Ruskin University.
            </p>
            <div className='flex space-x-3'>
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant='outline'
                  size='sm'
                  className='hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300'
                  asChild
                >
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <social.icon className='w-4 h-4' />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-heading font-semibold text-lg text-foreground mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-muted-foreground hover:text-primary transition-colors duration-300 relative group'
                  >
                    {link.label}
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300'></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className='font-heading font-semibold text-lg text-foreground mb-4'>
              Technologies
            </h3>
            <div className='flex flex-wrap gap-2'>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className='px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='border-t border-border pt-8 mb-8'>
          <div className='max-w-md mx-auto text-center'>
            <h3 className='font-heading font-semibold text-lg text-foreground mb-2'>
              Stay Updated
            </h3>
            <p className='text-muted-foreground text-sm mb-4'>
              Get notified about new projects and blog posts
            </p>
            <div className='flex gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:border-primary transition-colors duration-300'
              />
              <Button
                disabled={true}
                size='sm'
                className='bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300'
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-border pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
              <span>
                © {currentYear} Abdulhazeem Adenekan. All rights reserved.
              </span>
            </div>

            <div className='flex items-center space-x-1 text-sm text-muted-foreground'>
              <span>Made with</span>
              <Heart className='w-4 h-4 text-red-500 animate-pulse' />
              <span>and</span>
              <Code2 className='w-4 h-4 text-primary' />
              <span>in London</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
