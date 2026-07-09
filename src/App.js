import React, { useState, useEffect } from 'react';
import './App.css';

const experiences = [
  {
    company: 'Virtual Coders',
    role: 'Junior .NET Developer',
    location: 'Ahmedabad, India',
    period: '2023 - Present',
    highlights: [
      'Develop scalable web applications using ASP.NET Core and Web API.',
      'Design optimized SQL stored procedures and views in SQL Server.',
      'Integrate REST APIs with React and Angular frontends.',
      'Work with AG Grid to efficiently handle large datasets.',
      'Improve database performance through query optimization and indexing.',
    ],
  },
  {
    company: 'OmTechie Websoft',
    role: '.NET Developer Intern',
    location: 'India',
    period: '2022 - 2023',
    highlights: [
      'Implemented backend modules using C# and ASP.NET.',
      'Used AJAX for dynamic and responsive UI updates.',
      'Wrote complex SQL queries for reporting and data processing.',
      'Collaborated with senior developers in an Agile environment.',
    ],
  },
];

const projects = [
  {
    name: 'JSON to SQL Query Converter',
    tech: ['React', 'TypeScript', 'ASP.NET Core Web API', 'SQL Server'],
    description:
      'A tool that converts structured JSON input into optimized SQL queries, helping developers quickly generate complex SELECT, INSERT, and UPDATE statements.',
    role: 'Full-stack Developer',
    points: [
      'Designed a clean React UI for JSON input and live SQL preview.',
      'Implemented server-side validation and query generation using ASP.NET Core.',
      'Handled different SQL dialect nuances and edge cases.',
    ],
  },
  {
    name: 'Bank Management System',
    tech: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'CQRS'],
    description:
      'A modular banking application demonstrating clean architecture, CQRS, and Repository Pattern for handling customers, accounts, and transactions.',
    role: 'Backend Developer',
    points: [
      'Implemented CQRS and Repository Pattern for clear separation of concerns.',
      'Designed normalized database schemas and transaction-safe operations.',
      'Added validation, error handling, and logging for critical flows.',
    ],
  },
];

const skills = {
  'Backend & .NET': ['C#', 'ASP.NET Core', 'Web API', 'ADO.NET', 'Entity Framework Core'],
  'Database & Data': ['SQL Server', 'Stored Procedures', 'Query Optimization', 'Indexing', 'AG Grid (large datasets)'],
  Frontend: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  'Architecture & Practices': ['CQRS', 'Repository Pattern', 'RESTful APIs', 'Layered Architecture'],
  'Tools & Process': ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Agile / Scrum'],
};

function SplashScreen({ show }) {
  return (
    <div className={`splash-screen ${show ? '' : 'hidden'}`}>
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Loading..." className="splash-logo" />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-root">
      <SplashScreen show={showSplash} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="SM Logo" className="navbar-logo-img" />
        </div>
        <nav className="navbar-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Sunil Memakiya" className="hero-photo" />
          <p className="hero-eyebrow">Hello, I&apos;m</p>
          <h1 className="hero-title">
            Sunil <span>Memakiya</span>
          </h1>
          <h2 className="hero-subtitle">.NET Developer</h2>
          <p className="hero-description">
            I build robust, scalable web applications using ASP.NET Core, Web API, and SQL Server.
            With over 2 years of experience, I specialize in backend development, database
            optimization, and integrating APIs with modern frontends like React and Angular.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <span className="hero-meta-label">Experience</span>
              <span className="hero-meta-value">2+ Years</span>
            </div>
            <div>
              <span className="hero-meta-label">Role</span>
              <span className="hero-meta-value">Junior .NET Developer</span>
            </div>
            <div>
              <span className="hero-meta-label">Location</span>
              <span className="hero-meta-value">Ahmedabad, India</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-inner">
            <p className="hero-card-title">Core Stack</p>
            <ul className="hero-tag-list">
              <li>.NET</li>
              <li>C#</li>
              <li>ASP.NET Core</li>
              <li>Ado.Net</li>
              <li>Web API</li>
              <li>Entity Framework Core</li>
              <li>SQL Server</li>
            </ul>
            <p className="hero-card-title">Frontend & Tools</p>
            <ul className="hero-tag-list">
              <li>React</li>
              <li>Angular</li>
              <li>AG Grid</li>
              <li>Git</li>
              <li>Agile</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About Me</h2>
        <p>Short background about who I am and how I work.</p>
      </div>
      <div className="about-grid">
        <p className="about-main-text">
          I am a <strong>.NET Developer</strong> with over{' '}
          <strong>2 years of experience</strong> in building web applications and backend services.
          I specialize in <strong>C#, ASP.NET Core, Web API, ADO.NET, Entity Framework Core</strong>{' '}
          and <strong>SQL Server</strong>. I enjoy transforming business requirements into clean,
          maintainable, and performant code.
        </p>
        <p className="about-main-text">
          I am comfortable working in <strong>Agile teams</strong>, participating in sprint
          planning, code reviews, and daily standups. I like digging into performance issues,
          especially around <strong>database queries, indexing, and API performance</strong>, to
          make applications more responsive and reliable.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="section-header">
        <h2>Experience</h2>
        <p>Professional roles where I have built and delivered .NET applications.</p>
      </div>
      <div className="timeline">
        {experiences.map((exp) => (
          <article key={exp.company} className="timeline-card">
            <div className="timeline-header">
              <h3>{exp.role}</h3>
              <span className="timeline-company">{exp.company}</span>
            </div>
            <div className="timeline-meta">
              <span>{exp.location}</span>
              <span>{exp.period}</span>
            </div>
            <ul className="timeline-list">
              {exp.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Some of the personal and learning projects I have worked on.</p>
      </div>
      <div className="cards-grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <div className="card-header">
              <h3>{project.name}</h3>
              <p className="card-role">{project.role}</p>
            </div>
            <p className="card-description">{project.description}</p>
            <ul className="card-list">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="card-tags">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technologies and practices I work with regularly.</p>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category} className="skills-card">
            <h3>{category}</h3>
            <div className="skills-tags">
              {items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-header">
        <h2>Education</h2>
        <p>My academic background.</p>
      </div>
      <div className="cards-grid">
        <article className="card">
          <div className="card-header">
            <h3>B.Sc. (Bachelor of Science)</h3>
            <p className="card-role">Sanskruti College of Engineering and Technology</p>
          </div>
          <p className="card-description">
            Graduated with <strong>84.05%</strong>, building a strong foundation in programming,
            data structures, and software development fundamentals.
          </p>
          <div className="card-meta">
            <span>Focus: Programming & Software Development</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="section-header">
        <h2>Contact</h2>
        <p>Interested in working together or discussing an opportunity? Let&apos;s connect.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <p className="contact-text">
            I&apos;m open to roles as a <strong>.NET / Backend Developer</strong> and enjoy working
            with teams that value clean code, learning, and collaboration. Feel free to reach out
            about full-time roles, freelance work, or interesting side projects.
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <span className="contact-value">memakiyasunil.b11@gmail.com</span>
            </li>
            <li>
              <span className="contact-label">Location</span>
              <span className="contact-value">Ahmedabad, India</span>
            </li>
            <li>
              <span className="contact-label">Contect</span>
              <span className="contact-value">9554846003</span>
            </li>
          </ul>
          <p className="contact-note">
            Update the email above with your actual address and add LinkedIn/GitHub links to make
            it easier for people to contact you.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Sunil Memakiya. Built with React and crafted for .NET
        opportunities.
      </p>
    </footer>
  );
}

export default App;
