import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hazeem4877@gmail.com",
      href: "mailto:hazeem4877@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+447340515936",
      href: "tel:+447340515936",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "London, United Kingdom",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Calendar,
      label: "Schedule",
      value: "Book a Meeting",
      href: "https://calendly.com/hazeem",
      color: "from-orange-500 to-red-500",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Feature Coming Soon",
      description: "This contact form is under development. Please reach out via email or phone for now.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section id='contact' className='py-20 bg-secondary/20'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='font-heading font-bold text-4xl md:text-5xl mb-6'>
            Let's <span className='gradient-text'>Connect</span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            I'm always excited to discuss new opportunities, collaborate on
            projects, or simply chat about technology. Feel free to reach out
            through any of the channels below or send me a message directly.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Contact Information */}
          <div className='lg:col-span-1'>
            <h3 className='font-heading font-semibold text-2xl mb-8'>
              Get in Touch
            </h3>

            <div className='space-y-6 mb-8'>
              {contactInfo.map((info) => (
                <Card
                  key={info.label}
                  className='group card-hover bg-card/50 backdrop-blur-sm border-border/50'
                >
                  <CardContent className='p-6'>
                    <a
                      href={info.href}
                      target={info.label == "Schedule" ? "_blank" : undefined}
                      className='flex items-center space-x-4 text-left w-full'
                    >
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className='w-6 h-6' />
                      </div>
                      <div>
                        <p className='font-medium text-foreground group-hover:text-primary transition-colors duration-300'>
                          {info.label}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Response Promise */}
            <Card className='card-gradient border-0 shadow-lg'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-3'>
                  <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-foreground mb-2'>
                      Quick Response Guarantee
                    </h4>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      I typically respond to all inquiries within 24 hours. For
                      urgent matters, feel free to call or text directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <Card className='card-gradient border-0 shadow-lg'>
              <CardContent className='p-8'>
                <div className='flex items-center mb-6'>
                  <MessageSquare className='w-6 h-6 text-primary mr-3' />
                  <h3 className='font-heading font-semibold text-2xl'>
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label
                        htmlFor='name'
                        className='text-foreground font-medium'
                      >
                        Full Name
                      </Label>
                      <Input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Your full name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='bg-background/50 border-border/50 focus:border-primary transition-all duration-300'
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label
                        htmlFor='email'
                        className='text-foreground font-medium'
                      >
                        Email Address
                      </Label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='your.email@example.com'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='bg-background/50 border-border/50 focus:border-primary transition-all duration-300'
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='subject'
                      className='text-foreground font-medium'
                    >
                      Subject
                    </Label>
                    <Input
                      id='subject'
                      name='subject'
                      type='text'
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className='bg-background/50 border-border/50 focus:border-primary transition-all duration-300'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='message'
                      className='text-foreground font-medium'
                    >
                      Message
                    </Label>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder='Tell me about your project, ideas, or just say hello...'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className='bg-background/50 border-border/50 focus:border-primary transition-all duration-300 resize-none'
                    />
                  </div>

                  <Button
                    type='submit'
                    size='lg'
                    disabled={isSubmitting}
                    className='w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group'
                  >
                    {isSubmitting ? (
                      <>
                        <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2' />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className='w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300' />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className='mt-6 pt-6 border-t border-border/30'>
                  <p className='text-sm text-muted-foreground text-center'>
                    Your information is secure and will never be shared with
                    third parties. I respect your privacy and will only use your
                    contact details to respond to your inquiry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className='text-center mt-16'>
          <Card className='max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20'>
            <CardContent className='p-8'>
              <h3 className='font-heading font-semibold text-2xl mb-4'>
                Ready to Start Your Project?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
                Whether you need a complete web application, mobile app, or
                technical consultation, I'm here to help bring your vision to
                life with modern technology and best practices.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  variant='outline'
                  className='hover:bg-primary hover:text-primary-foreground transition-all duration-300'
                  asChild
                >
                  <a href='mailto:hazeem4877@gmail.com'>
                    <Mail className='w-5 h-5 mr-2' />
                    Quick Email
                  </a>
                </Button>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300'
                  asChild
                >
                  <a
                    href='https://calendly.com/hazeem'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Calendar className='w-5 h-5 mr-2' />
                    Schedule Call
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
