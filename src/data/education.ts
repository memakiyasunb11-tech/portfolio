export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  university: string;
  location: string;
  period: string;
  cgpa: string;
  grade: string;
  icon: string;
  color: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Sc. (Bachelor of Science)',
    field: 'Computer Science & Information Technology',
    institution: 'Sanskruti College of Engineering and Technology',
    university: 'Gujarat University',
    location: 'Ahmedabad, Gujarat',
    period: '2020 – 2023',
    cgpa: '84.05%',
    grade: 'First Class with Distinction',
    icon: '🎓',
    color: '#6366f1',
    highlights: [
      'Specialized in programming fundamentals, data structures, and DBMS',
      'Built final-year project using ASP.NET and SQL Server',
      'Participated in 2 state-level hackathons',
      'Active member of the college coding club',
    ],
  },
];

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  icon: string;
  color: string;
  url: string | null;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'ASP.NET Core Developer Certification',
    issuer: 'Microsoft (via LinkedIn Learning)',
    year: '2023',
    icon: '📜',
    color: '#6366f1',
    url: null,
  },
  {
    id: 2,
    name: 'SQL Server Query Optimization',
    issuer: 'Udemy',
    year: '2023',
    icon: '📜',
    color: '#22d3ee',
    url: null,
  },
  {
    id: 3,
    name: 'React JS — Complete Guide',
    issuer: 'Udemy',
    year: '2024',
    icon: '📜',
    color: '#a78bfa',
    url: null,
  },
];
