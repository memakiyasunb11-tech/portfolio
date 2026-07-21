export interface ProjectImage {
  src: string;
  label: string;
}

export interface Project {
  id: number;
  name: string;
  tagline: string;
  featured: boolean;
  category: string[];
  image: string | null;
  imageGallery: ProjectImage[] | null;
  github: string | null;
  live: string | null;
  status: string;
  year: string;
  tech: string[];
  description: string;
  features: string[];
  stats?: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'RecruitMatrix',
    tagline: 'End-to-End Human Resource Management System',
    featured: true,
    category: ['React', 'API'],
    image: '/recruitmatrix-admin.png',
    imageGallery: [
      { src: '/recruitmatrix-admin.png', label: 'Admin Portal' },
      { src: '/recruitmatrix-company.png', label: 'Company Portal' },
      { src: '/recruitmatrix-careers.png', label: 'Careers Page' },
    ],
    github: 'https://github.com/Memakiyasunil/RecruitMatrix',
    live: null,
    status: 'Completed',
    year: '2025',
    tech: [
      'React', 'Node.js', 'Express.js', 'MongoDB',
      'JWT Auth', 'REST API', 'Chart.js', 'Role-Based Access',
    ],
    description:
      'A comprehensive multi-role HRMS platform covering the entire recruitment lifecycle — from talent requisition and candidate pipeline to interviews, selection, offer letters, joining, and employee management.',
    features: [
      'Multi-role Auth: Admin, Company & Candidate portals',
      'Full hiring workflow: Requisition → Screening → Joining',
      'Live analytics dashboards with KPI cards & charts',
      'Public Careers page with job search & smart filters',
      'Employee Management, Attendance & Task modules',
      'Chart.js integration: line, donut & bar charts',
    ],
    stats: ['12,549 Candidates', '256 Active Jobs', '342 Hired'],
    color: '#6366f1',
  },
  {
    id: 2,
    name: 'EduFordge',
    tagline: 'Transform Your Future With IT Education',
    featured: true,
    category: ['React', 'API'],
    image: '/edufordge.png',
    imageGallery: null,
    github: 'https://github.com/Memakiyasunil/Collage_demo',
    live: null,
    status: 'Completed',
    year: '2024',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST API', 'JWT Auth'],
    description:
      'A full-featured EdTech platform offering industry-oriented IT education with practical learning, expert guidance, placement assistance, and 5,000+ enrolled students across partner universities.',
    features: [
      'Role-based access: Students, Colleges, Admins',
      'Skill Swap marketplace with session management',
      '6 Partner Universities with 30+ programs',
      '8 specialized tech labs (AI/ML, IoT, Cloud, etc.)',
      'Bootcamps, internship support, mock interviews',
      'Placement preparation and resume building tools',
    ],
    stats: ['5,000+ Students', '6 Universities', '8 Labs'],
    color: '#22d3ee',
  },
  {
    id: 3,
    name: 'JSON to SQL Query Converter',
    tagline: 'Instantly convert JSON to optimized SQL queries',
    featured: false,
    category: ['.NET', 'React', 'API'],
    image: null,
    imageGallery: null,
    github: null,
    live: null,
    status: 'Completed',
    year: '2024',
    tech: ['React', 'TypeScript', 'ASP.NET Core Web API', 'SQL Server'],
    description:
      'A developer tool that converts structured JSON input into optimized SQL queries, supporting SELECT, INSERT, UPDATE, and DELETE with SQL dialect options.',
    features: [
      'Live SQL preview as you type JSON',
      'Supports SELECT, INSERT, UPDATE, DELETE',
      'Server-side validation & error highlighting',
      'SQL dialect options (SQL Server, PostgreSQL)',
    ],
    color: '#a78bfa',
  },
  {
    id: 4,
    name: 'Bank Management System',
    tagline: 'Clean architecture banking app with CQRS & Repository Pattern',
    featured: false,
    category: ['.NET'],
    image: null,
    imageGallery: null,
    github: null,
    live: null,
    status: 'Completed',
    year: '2023',
    tech: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'CQRS'],
    description:
      'A modular banking application demonstrating clean architecture, CQRS, and Repository Pattern for handling customers, accounts, and transactions with full audit trails.',
    features: [
      'CQRS pattern for clear read/write separation',
      'Repository Pattern for data access abstraction',
      'Transaction-safe operations with rollback support',
      'Validation, error handling, and structured logging',
    ],
    color: '#34d399',
  },
  {
    id: 5,
    name: 'Hospital Management System',
    tagline: 'Full-stack hospital operations platform',
    featured: false,
    category: ['.NET', 'React'],
    image: null,
    imageGallery: null,
    github: null,
    live: null,
    status: 'Completed',
    year: '2023',
    tech: ['ASP.NET Core', 'React', 'SQL Server', 'REST API'],
    description:
      'A comprehensive hospital management web app for managing patients, doctors, appointments, billing, and medical records with role-based access control.',
    features: [
      'Patient registration & medical history tracking',
      'Doctor scheduling & appointment management',
      'Billing and payment records module',
      'Role-based access: Staff, Doctor, Admin',
    ],
    color: '#fb923c',
  },
];

export const projectFilters: string[] = ['All', '.NET', 'React', 'Angular', 'API'];
