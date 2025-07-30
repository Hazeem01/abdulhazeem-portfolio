import { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import projectsData from "@/data/projects.json";
import { Project, Category } from "@/types/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories: Category[] = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "backend", label: "Backend" },
    { id: "ai", label: "AI & ML" },
    { id: "streaming", label: "Live Streaming" },
  ];

  const projects: Project[] = projectsData.projects;

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='font-heading font-bold text-4xl md:text-5xl mb-6'>
            Featured <span className='gradient-text'>Projects</span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Here are some of my recent projects that showcase my skills in web
            development, mobile applications, and full-stack solutions. Each
            project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className='mb-16'>
          <h3 className='font-heading font-semibold text-2xl mb-8'>
            Highlighted Work
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className='group overflow-hidden card-hover bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer'
                onClick={() => handleProjectClick(project)}
              >
                <div className='aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden'>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                  <div className='absolute top-4 left-4'>
                    <Badge className='bg-accent text-accent-foreground'>
                      Featured
                    </Badge>
                  </div>
                  <div className='absolute bottom-4 right-4 flex gap-2'>
                    <Button
                      size='sm'
                      variant='secondary'
                      className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      asChild
                    >
                      <a href={project.githubUrl} aria-label='View source code'>
                        <Github className='w-4 h-4' />
                      </a>
                    </Button>
                    <Button
                      size='sm'
                      className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        aria-label='View live demo'
                      >
                        <ExternalLink className='w-4 h-4' />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className='p-6'>
                  <div className='flex items-center justify-between mb-3'>
                    <h4 className='font-heading font-semibold text-xl group-hover:text-primary transition-colors duration-300'>
                      {project.title}
                    </h4>
                    <div className='flex items-center text-sm text-muted-foreground'>
                      <Calendar className='w-4 h-4 mr-1' />
                      {project.date}
                    </div>
                  </div>

                  <p className='text-muted-foreground mb-4 leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300'
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

        {/* Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-12'>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                  : "hover:bg-secondary"
              }`}
            >
              <Tag className='w-4 h-4 mr-2' />
              {category.label}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className='group overflow-hidden card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-fade-up cursor-pointer'
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className='aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden'>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
                <div className='absolute top-3 right-3 flex gap-2'>
                  {project.githubUrl !== "#" && (
                    <Button
                      size='sm'
                      variant='secondary'
                      className='w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      asChild
                    >
                      <a href={project.githubUrl} aria-label='View source code'>
                        <Github className='w-4 h-4' />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl !== "#" && (
                    <Button
                      size='sm'
                      className='w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        aria-label='View live demo'
                      >
                        <ExternalLink className='w-4 h-4' />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <CardContent className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <h4 className='font-heading font-semibold text-lg group-hover:text-primary transition-colors duration-300'>
                    {project.title}
                  </h4>
                  <span className='text-xs text-muted-foreground'>
                    {project.date}
                  </span>
                </div>

                <p className='text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-1'>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className='px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className='px-2 py-1 text-xs text-muted-foreground'>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <Card className='max-w-2xl mx-auto card-gradient border-0 shadow-lg'>
            <CardContent className='p-8'>
              <h3 className='font-heading font-semibold text-2xl mb-4'>
                Interested in collaborating?
              </h3>
              <p className='text-muted-foreground mb-6'>
                I'm always excited to work on new projects and bring innovative
                ideas to life. Let's discuss how we can create something amazing
                together.
              </p>
              <Button
                size='lg'
                className='bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300'
                asChild
              >
                <a href='#contact'>Start a Conversation</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
          <DialogHeader>
            <DialogTitle className='text-2xl font-heading font-bold'>
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className='space-y-6'>
              {/* Project Image */}
              <div className='aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden'>
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className='w-full h-full object-cover'
                  />
                )}
              </div>

              {/* Project Meta Information */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='flex items-center space-x-2'>
                  <Calendar className='w-5 h-5 text-primary' />
                  <span className='text-sm text-muted-foreground'>
                    {selectedProject.date}
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Users className='w-5 h-5 text-primary' />
                  <span className='text-sm text-muted-foreground'>
                    {selectedProject.role}
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Users className='w-5 h-5 text-primary' />
                  <span className='text-sm text-muted-foreground'>
                    {selectedProject.teamSize}
                  </span>
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <h3 className='font-semibold text-lg mb-3'>Project Overview</h3>
                <div className='prose prose-sm max-w-none text-muted-foreground leading-relaxed'>
                  {selectedProject.detailedDescription
                    .split("\n")
                    .map((line, index) => (
                      <p key={index} className='mb-2'>
                        {line}
                      </p>
                    ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className='font-semibold text-lg mb-3'>
                  Technologies Used
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant='secondary' className='text-sm'>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className='font-semibold text-lg mb-3'>Key Challenges</h3>
                <ul className='space-y-2'>
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className='flex items-start space-x-2'>
                      <span className='text-primary mt-1'>•</span>
                      <span className='text-muted-foreground'>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h3 className='font-semibold text-lg mb-3'>Key Achievements</h3>
                <ul className='space-y-2'>
                  {selectedProject.achievements.map((achievement, index) => (
                    <li key={index} className='flex items-start space-x-2'>
                      <Zap className='w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className='flex flex-col sm:flex-row gap-3 pt-4 border-t border-border'>
                {selectedProject.githubUrl !== "#" && (
                  <Button variant='outline' className='flex-1' asChild>
                    <a
                      href={selectedProject.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github className='w-4 h-4 mr-2' />
                      View Source Code
                    </a>
                  </Button>
                )}
                {selectedProject.liveUrl !== "#" && (
                  <Button
                    className='flex-1 bg-gradient-to-r from-primary to-accent'
                    asChild
                  >
                    <a
                      href={selectedProject.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ExternalLink className='w-4 h-4 mr-2' />
                      View Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
