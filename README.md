Abdulhazeem Adenekan - Portfolio

This is a portfolio website built with Next.js and styled using Material-UI (MUI). It showcases my skills, experience, and projects as a Full-Stack Developer.

Features
	•	Fully responsive design for mobile, tablet, and desktop.
	•	Dynamic routing with Next.js for pages like Home, About, Projects, and Contact.
	•	Styled with Material-UI for a modern and professional look.
	•	Integrated drawer navigation for better mobile usability.
	•	A dedicated “View My Resume” button linking to a downloadable PDF of my resume.

Getting Started

Prerequisites

Make sure you have the following installed:
	•	Node.js
	•	npm or yarn

Steps to Run Locally
	1.	Clone the repository:

git clone https://github.com/Hazeem01/abdulhazeem-portfolio.git
cd portfolio


	2.	Install dependencies:

npm install
# or
yarn install


	3.	Start the development server:

npm run dev
# or
yarn dev


	4.	Open http://localhost:3000 in your browser to view the application.

Project Structure

.
├── app/               # Next.js App Directory
│   ├── about/         # About page
│   ├── contact/       # Contact page
│   ├── projects/      # Projects page
│   ├── layout.tsx     # Root layout for shared components (header, footer)
│   └── page.tsx       # Home page
├── components/        # Reusable UI components
│   ├── Header.tsx     # Header component with navigation
│   ├── Footer.tsx     # Footer component
│   ├── SkillCard.tsx  # Skill card for About page
│   └── ProjectCard.tsx# Project card for Projects page
├── public/            # Static assets (images, resume)
│   ├── profile.jpg    # Profile picture
│   └── resume.pdf     # Resume file
├── styles/            # Global styles (if any)
├── README.md          # Project documentation
├── package.json       # Project dependencies and scripts
└── tsconfig.json      # TypeScript configuration

Customization

Changing Profile Picture
	•	Replace public/profile.jpg with your own profile picture. Ensure the new file has the same name.

Updating Resume
	•	Replace public/resume.pdf with your latest resume. The “View My Resume” button will automatically link to this file.

Adding/Editing Projects
	1.	Go to src/app/projects/page.tsx.
	2.	Add or modify the projects array:

const projects = [
  {
    title: "Portfolio Website",
    description: "This portfolio website, built using Next.js and MUI.",
    link: "https://github.com/Hazeem01/abdulhazeem-portfolio.git",
  },
  {
    title: "Coming soon",
    description:
      "Check back later for more projects 🙂",
  },
];

Deployment

Deploy on Vercel

The easiest way to deploy this Next.js app is to use Vercel.
	1.	Push your code to a GitHub repository.
	2.	Import your repository into Vercel:
	•	Go to Vercel Dashboard.
	•	Select “New Project” and import your GitHub repo.
	3.	Follow the deployment instructions.
	4.	Your live website will be available at a generated URL.

For more information, check out Next.js deployment documentation.

Technologies Used
	•	Next.js: For server-side rendering and routing.
	•	Material-UI (MUI): For styling and responsive design.
	•	TypeScript: For static typing and better code maintainability.

Learn More

To learn more about the tools and frameworks used in this project:
	•	Next.js Documentation
	•	Material-UI Documentation
	•	TypeScript Documentation

Feel free to fork and customize this portfolio to suit your needs. Contributions and feedback are welcome!