export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  whatsapp: string;
  roles: string[];
  stats: { label: string; value: string }[];
  availability: string;
  resumeUrl: string;
}

export const personal: PersonalInfo = {
  name: 'Sunil Memakiya',
  firstName: 'Sunil',
  lastName: 'Memakiya',
  tagline: 'Building scalable backends with .NET & SQL Server',
  bio: `I build scalable, secure, and high-performance enterprise web applications using ASP.NET Core, SQL Server, React, and Angular. Passionate about clean architecture, REST APIs, and writing maintainable code.`,
  email: 'memakiyasunil.b11@gmail.com',
  phone: '+91 9554846003',
  location: 'Ahmedabad, Gujarat, India',
  github: 'https://github.com/Memakiyasunil',
  githubUsername: 'Memakiyasunil',
  linkedin: 'https://www.linkedin.com/in/sunil-memakiya-384ab7420',
  whatsapp: 'https://wa.me/919554846003',
  roles: [
    'ASP.NET Core Developer',
    'Backend Engineer',
    'REST API Developer',
    'C# Developer',
    'Full Stack .NET Developer',
  ],
  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects', value: '10+' },
    { label: 'GitHub Commits', value: '200+' },
    { label: 'Technologies', value: '20+' },
  ],
  availability: 'Open to full-time opportunities',
  resumeUrl: '/resume/Sunil_Memakiya_Resume.pdf',
};
