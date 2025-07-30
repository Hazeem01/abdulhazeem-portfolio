import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: Globe,
      technologies: ['React', 'Next.js 14', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Ant Design', 'Tailwind CSS', 'PWA'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend Development',
      icon: Server,
      technologies: ['Node.js', 'Express.js', 'Java 23', 'RESTful APIs', 'Socket.IO', 'JWT', 'bcryptjs', 'Sequelize ORM', 'Swagger', 'Multer', 'Nodemailer', 'Express-validator', 'Morgan', 'CORS', 'PDFKit', 'Axios'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Programming Languages',
      icon: Code,
      technologies: ['Java 23', 'JavaScript', 'TypeScript', 'Python', 'OOP', 'Exception Handling', 'File I/O'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      category: 'Real-time & Streaming',
      icon: Smartphone,
      technologies: ['Socket.IO', 'HLS.js', 'NGINX-RTMP', 'Video.js', 'Live Chat', 'Stream Recording', 'Real-time Communication', 'WebSocket Connections'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Databases & Cloud',
      icon: Database,
      technologies: ['MySQL', 'MongoDB', 'Redis', 'Azure Blob Storage', 'AWS S3', 'PostgreSQL', 'Database Management', 'Complex Relationships', 'MVC Architecture', 'Database Design', '25+ Database Models'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'DevOps & Infrastructure',
      icon: Palette,
      technologies: ['Docker', 'NGINX', 'CI/CD', 'Digital Ocean', 'Railway', 'Netlify', 'Load Balancing'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      category: 'Payment & E-commerce',
      icon: Code,
      technologies: ['Stripe', 'Payment Processing', 'Subscription Management', 'Ticket Sales', 'Analytics', 'Role-based Access Control', 'OTP Verification', 'Refund Management'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      category: 'Learning Management Systems',
      icon: Globe,
      technologies: ['LMS Development', 'Course Management', 'Student Enrollment', 'Instructor Booking', 'Task Management', 'Educational APIs', 'Progress Tracking'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      category: 'Property Management Systems',
      icon: Database,
      technologies: ['Damage Assessment', 'Case Management', 'Inspector Assignment', 'Photo Documentation', 'Report Generation', 'Rental Management', 'Multi-role Systems'],
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '60+', label: 'Technologies' },
    { number: '4+', label: 'Companies' },
    { number: '11+', label: 'Featured Projects' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a mid-level experienced full-stack developer with love for creating innovative digital solutions. 
            Currently pursuing a BEng in Computer Science at Anglia Ruskin University, I've led tech teams 
            and delivered secure, high-performance software solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="card-gradient border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h3 className="font-heading font-semibold text-2xl mb-6">My Journey</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  My journey in technology began with a passion for creating impactful digital solutions. 
                  As Head of the Tech Department at Cosonas Ltd., I've led teams to deliver high-quality 
                  software while ensuring timely delivery and seamless collaboration.
                </p>
                <p>
                  Over the years, I've had the privilege of working with startups and established companies, 
                  contributing to projects that range from AI-powered recruitment platforms to comprehensive 
                  live streaming solutions. My recent work includes building production-ready backends for 
                  live streaming platforms, modern full-stack applications with real-time capabilities, and 
                  academic projects like the SQL Explorer database management application.
                </p>
                <p>
                  Currently pursuing my BEng in Computer Science at Anglia Ruskin University, I continue to 
                  enhance my skills while delivering innovative solutions that focus on user experience, 
                  security, and performance optimization. I specialize in real-time applications, payment 
                  processing, and scalable cloud architectures. I believe in the power of collaboration 
                  and continuous learning to drive innovation forward.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="font-heading font-semibold text-3xl text-center mb-12">
            Skills & <span className="gradient-text">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <Card 
                key={skill.category}
                className="card-hover group bg-card/50 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading font-semibold text-lg">
                      {skill.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;