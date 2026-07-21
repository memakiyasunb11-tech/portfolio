export interface Experience {
  id: number;
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  duration: string;
  current: boolean;
  logo: string | null;
  color: string;
  highlights: string[];
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Virtual Coders',
    role: 'Junior .NET Developer',
    type: 'Full-time',
    location: 'Ahmedabad, India',
    period: '2023 – Present',
    duration: '2+ Years',
    current: true,
    logo: null,
    color: '#6366f1',
    highlights: [
      'Develop scalable web applications using ASP.NET Core and Web API following clean architecture patterns.',
      'Design and optimize SQL stored procedures, views, and functions in SQL Server for high-performance data access.',
      'Integrate RESTful APIs with React and Angular frontends, ensuring seamless data flow and UI responsiveness.',
      'Work with AG Grid to efficiently render and manipulate large datasets on the frontend.',
      'Improve database performance through advanced query optimization, indexing strategies, and execution plan analysis.',
      'Participate in Agile ceremonies: sprint planning, daily standups, code reviews, and retrospectives.',
    ],
    technologies: [
      'ASP.NET Core', 'Web API', 'C#', 'SQL Server', 'Entity Framework Core',
      'React', 'Angular', 'AG Grid', 'ADO.NET', 'REST API',
    ],
    achievements: [
      'Reduced API response time by 40% through query optimization and caching.',
      'Delivered 5+ production modules on time with zero critical bugs.',
    ],
  },
  {
    id: 2,
    company: 'OmTechie Websoft',
    role: '.NET Developer Intern',
    type: 'Internship',
    location: 'India',
    period: '2022 – 2023',
    duration: '1 Year',
    current: false,
    logo: null,
    color: '#22d3ee',
    highlights: [
      'Implemented backend modules using C# and ASP.NET MVC for client-facing applications.',
      'Used AJAX for dynamic, responsive UI updates without full-page reloads.',
      'Wrote complex SQL queries, stored procedures, and reports for data processing.',
      'Collaborated with senior developers in an Agile environment.',
      'Conducted unit testing and bug fixing across multiple feature branches.',
    ],
    technologies: [
      'ASP.NET MVC', 'C#', 'SQL Server', 'AJAX', 'JavaScript',
      'HTML5', 'CSS3', 'Bootstrap',
    ],
    achievements: [
      'Completed 3 full-cycle projects from requirements to deployment.',
      'Recognized for clean code practices and thorough documentation.',
    ],
  },
];
