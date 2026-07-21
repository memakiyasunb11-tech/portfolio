export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  color: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend & .NET',
    icon: '⚙️',
    color: '#6366f1',
    skills: [
      { name: 'ASP.NET Core', level: 90, icon: '🔷' },
      { name: 'C#', level: 88, icon: '🔷' },
      { name: 'Web API', level: 87, icon: '🔗' },
      { name: 'Entity Framework Core', level: 82, icon: '🗄️' },
      { name: 'ADO.NET', level: 80, icon: '🔌' },
      { name: 'LINQ', level: 78, icon: '🔍' },
      { name: 'MVC Pattern', level: 82, icon: '🏗️' },
      { name: 'CQRS', level: 72, icon: '↔️' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: '🗄️',
    color: '#22d3ee',
    skills: [
      { name: 'SQL Server', level: 90, icon: '💾' },
      { name: 'Stored Procedures', level: 88, icon: '📋' },
      { name: 'Query Optimization', level: 82, icon: '⚡' },
      { name: 'Indexing & Execution Plans', level: 78, icon: '📈' },
      { name: 'PostgreSQL', level: 60, icon: '🐘' },
      { name: 'MongoDB', level: 65, icon: '🍃' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    color: '#a78bfa',
    skills: [
      { name: 'React', level: 80, icon: '⚛️' },
      { name: 'JavaScript', level: 78, icon: '🟨' },
      { name: 'TypeScript', level: 70, icon: '🔷' },
      { name: 'Angular', level: 65, icon: '🅰️' },
      { name: 'HTML5', level: 85, icon: '🌐' },
      { name: 'CSS3 / SCSS', level: 78, icon: '🎨' },
      { name: 'Bootstrap', level: 80, icon: '🅱️' },
      { name: 'AG Grid', level: 75, icon: '📊' },
      { name: 'Tailwind CSS', level: 85, icon: '🌊' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: '🛠️',
    color: '#34d399',
    skills: [
      { name: 'Git & GitHub', level: 85, icon: '🐙' },
      { name: 'Visual Studio', level: 90, icon: '💻' },
      { name: 'VS Code', level: 88, icon: '📝' },
      { name: 'Postman', level: 82, icon: '📮' },
      { name: 'Azure', level: 55, icon: '☁️' },
      { name: 'Docker', level: 50, icon: '🐳' },
      { name: 'Agile / Scrum', level: 80, icon: '🔄' },
    ],
  },
];

export const techBadges: string[] = [
  'C#', 'ASP.NET Core', 'Web API', 'EF Core', 'ADO.NET',
  'SQL Server', 'LINQ', 'React', 'Angular', 'JavaScript',
  'TypeScript', 'Git', 'Postman', 'Azure', 'MongoDB',
];
