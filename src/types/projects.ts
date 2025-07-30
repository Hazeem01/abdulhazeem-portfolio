export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  technologies: string[];
  categories: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  date: string;
  role: string;
  teamSize: string;
  challenges: string[];
  achievements: string[];
}

export interface ProjectsData {
  projects: Project[];
}

export interface Category {
  id: string;
  label: string;
} 