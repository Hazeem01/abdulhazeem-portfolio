export const technologies = [
  'React',
  'TypeScript', 
  'Node.js',
  'Next.js',
  'Express.js',
  'MySQL',
  'MongoDB',
  'Redis',
  'AWS',
  'Docker',
  'Socket.IO',
  'Stripe'
] as const;

export type Technology = typeof technologies[number]; 