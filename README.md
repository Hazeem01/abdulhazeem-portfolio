# Abdulhazeem - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Real-time Projects**: Showcase of live streaming platforms and AI applications
- **Interactive UI**: Built with React, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading with modern build tools
- **Maintainable Code**: Clean architecture with separated data and components
- **Type Safety**: Full TypeScript support with proper interfaces

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Next.js 14, Redux Toolkit
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Backend**: Node.js, Express.js, Socket.IO, MySQL, Redis
- **Cloud**: Azure Blob Storage, AWS S3, Railway, Netlify
- **Real-time**: Socket.IO, HLS.js, NGINX-RTMP
- **Payments**: Stripe integration
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Hazeem01/abdulhazeem-portfolio.git
cd abdulhazeem-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Set up environment variables for the contact form:**
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your EmailJS credentials
# Get your credentials from https://www.emailjs.com/
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   └── Projects.tsx    # Projects showcase (refactored)
├── data/               # Static data files
│   ├── projects.json   # Projects data (extracted)
│   └── technologies.ts # Shared technologies list
├── types/              # TypeScript interfaces
│   └── projects.ts     # Project type definitions
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # App entry point
```

## 🎨 Customization

- Update personal information in components
- Modify colors in `tailwind.config.ts`
- Add new projects in `src/data/projects.json`
- Update skills in `src/components/About.tsx`
- All project data is centralized in JSON files for easy maintenance

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails. To set it up:

1. **Sign up for EmailJS** at [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. **Get your credentials** (Public Key, Service ID, Template ID)
5. **Update your `.env` file**:
```env
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
```

**Note**: The `.env` file is gitignored, so your credentials won't be exposed in the repository.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun run build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
# or
bun run preview
```

## 🌐 Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Railway**: Connect your repository

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Portfolio**: [www.hazeem.dev](https://www.hazeem.dev)
- **GitHub**: [@Hazeem01](https://github.com/Hazeem01)
- **LinkedIn**: [Abdulhazeem](https://www.linkedin.com/in/abdulhazeem-adenekan)
- **Email**: hazeem4877@gmail.com
