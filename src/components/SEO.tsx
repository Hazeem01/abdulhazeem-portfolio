import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  structuredData?: object;
}

const SEO = ({ 
  title = "Abdulhazeem Adenekan (Hazeem) - Full Stack Developer | React, Node.js, Real-time Applications",
  description = "Abdulhazeem Adenekan (Hazeem) is a Full Stack Developer with over 3 years of experience at Cosonas Ltd, specializing in React, Node.js, real-time applications, and modern web technologies. Based in London, UK.",
  keywords = "Abdulhazeem Adenekan, Hazeem, Full Stack Developer, React Developer, Node.js Developer, Web Developer, JavaScript Developer, TypeScript Developer, Real-time Applications, Live Streaming, AI Applications, Portfolio, London, UK, Birmingham, Croydon",
  image = "https://www.hazeem.dev/og-image.png",
  url = "https://www.hazeem.dev",
  type = "website",
  structuredData
}: SEOProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
          "name": "Abdulhazeem Adenekan",
      "alternateName": "Hazeem",
      "jobTitle": "Full Stack Developer",
      "description": "Full Stack Developer with over 3 years of experience at Cosonas Ltd, specializing in React, Node.js, real-time applications, and modern web technologies",
      "url": "https://www.hazeem.dev",
      "image": "https://www.hazeem.dev/abdulhazeem-profile.jpg",
      "email": "hazeem4877@gmail.com",
      "sameAs": [
        "https://github.com/Hazeem01",
        "https://linkedin.com/in/abdulhazeem-adenekan",
        "https://x.com/adenekanhazeem",
        "https://instagram.com/abdulhazeem.a"
      ],
    "knowsAbout": [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Full Stack Development",
      "Real-time Applications",
      "Live Streaming Platforms",
      "AI Applications",
      "Web Development",
      "Frontend Development",
      "Backend Development"
    ],
          "worksFor": {
        "@type": "Organization",
        "name": "Cosonas Ltd"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Abdulhazeem Adenekan Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@abdulhazeem" />
      <meta name="twitter:creator" content="@abdulhazeem" />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
