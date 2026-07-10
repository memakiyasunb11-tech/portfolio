import React, { useState, useEffect, useRef } from 'react';
import './App.css';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const GITHUB_USERNAME = 'Memakiyasunil';
const LINKEDIN_URL    = 'https://www.linkedin.com/in/sunil-memakiya-384ab7420';
const GITHUB_URL      = `https://github.com/${GITHUB_USERNAME}`;

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
    name: 'EduFordge',
    featured: true,
    image: '/edufordge.png',
    url: 'https://github.com/Memakiyasunil/Collage_demo',
    tagline: 'Transform Your Future With IT Education',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST API', 'JWT Auth'],
    description:
      'A full-featured EdTech platform offering industry-oriented IT education with practical learning, expert guidance, placement assistance, and 5,000+ enrolled students across partner universities.',
    role: 'Full-stack Developer',
    points: [
      'Built responsive React frontend with dynamic navigation, dropdowns, and multi-page routing.',
      'Developed REST APIs using Node.js and Express for all platform features.',
      'Integrated MongoDB for student data, course management, and skill swap records.',
      'Implemented JWT authentication and role-based access for students, colleges, and admins.',
    ],
    features: [
      {
        group: 'Services',
        icon: '🎓',
        items: [
          'Bootcamps', 'Internship Support', 'Career Counselling',
          'Resume Building', 'Mock Interviews', 'Placement Preparation',
          'Hackathons', 'Technical Communities',
        ],
      },
      {
        group: 'College Solutions',
        icon: '🏫',
        items: [
          'Managed Campus', 'Student Acquisition',
          'Corporate Connect', 'Integrated Programs',
        ],
      },
      {
        group: 'Labs',
        icon: '🔬',
        items: [
          'AI & Machine Learning Lab', 'IoT & Robotics Lab',
          'Cloud Computing Lab', 'Cyber Security Lab',
          'Data Science Lab', 'Web Development Lab',
          'Mobile App Dev Lab', 'AR/VR Innovation Lab',
        ],
      },
      {
        group: 'Skill Swap',
        icon: '🔄',
        items: [
          'Dashboard', 'My Skills', 'Wanted Skills',
          'Find Matches', 'Swap Requests', 'My Sessions',
          'Favorites', 'Learning History',
        ],
      },
      {
        group: 'Programs',
        icon: '📚',
        items: [
          'Undergraduate Programs (UG)', 'Postgraduate Programs (PG)',
          'Professional Certifications', 'Diploma Courses',
          'Industry Integrated Programs', 'Online Learning Programs',
        ],
      },
      {
        group: 'Partner Universities',
        icon: '🤝',
        items: [
          'Gandhinagar University — 12 Programs',
          'Vidhyadeep University — 13 Programs',
          'Shreyarth University — 4 Programs',
          'Rai University — 3 Programs',
          'Monark University',
          'The New Progressive College — 2 Programs',
        ],
      },
    ],
  },
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
  {
    name: 'Hospital Management System',
    tech: ['ASP.NET Core', 'React', 'SQL Server', 'REST API'],
    description:
      'A full-featured hospital management web app for managing patients, doctors, appointments, and billing records.',
    role: 'Full-stack Developer',
    points: [
      'Built RESTful APIs for patient and doctor management modules.',
      'Designed responsive React frontend with dynamic form handling.',
      'Implemented role-based access control for staff and admin users.',
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

/* ─── 3D Canvas Background ─────────────────────────────────────────────── */

function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const PARTICLE_COUNT = 90;
    const CONNECTION_DIST = 160;
    const MOUSE = { x: 0, y: 0 };

    window.addEventListener('mousemove', (e) => {
      MOUSE.x = e.clientX;
      MOUSE.y = e.clientY;
    });

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Create particles with z-depth for 3D effect
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      z:  Math.random() * 400 + 100,   // depth: 100–500
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: (Math.random() - 0.5) * 0.5,
      // colour hue: indigo-violet-cyan range
      hue: Math.random() * 80 + 200,
    }));

    function project(p) {
      const fov = 400;
      const scale = fov / (fov + p.z);
      return {
        sx:    p.x * scale + W / 2 * (1 - scale),
        sy:    p.y * scale + H / 2 * (1 - scale),
        scale,
      };
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Subtle mouse-parallax gradient
      const gx = MOUSE.x || W / 2;
      const gy = MOUSE.y || H / 2;
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(W, H) * 0.8);
      grad.addColorStop(0, 'rgba(99,102,241,0.04)');
      grad.addColorStop(0.5, 'rgba(139,92,246,0.02)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Update + draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap
        if (p.x < 0)   p.x = W;
        if (p.x > W)   p.x = 0;
        if (p.y < 0)   p.y = H;
        if (p.y > H)   p.y = 0;
        if (p.z < 50)  p.z = 500;
        if (p.z > 500) p.z = 50;

        // Slight mouse attraction
        const { sx, sy, scale } = project(p);
        const dx = MOUSE.x - sx;
        const dy = MOUSE.y - sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += dx * 0.00005;
          p.vy += dy * 0.00005;
        }

        // Clamp velocity
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) { p.vx /= speed; p.vy /= speed; }

        // Draw glowing dot
        const r = scale * 3;
        const alpha = scale * 0.9;
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 6);
        glow.addColorStop(0, `hsla(${p.hue},90%,70%,${alpha})`);
        glow.addColorStop(1, `hsla(${p.hue},90%,70%,0)`);

        ctx.beginPath();
        ctx.arc(sx, sy, r * 6, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},90%,80%,${alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const a = project(particles[i]);
        for (let j = i + 1; j < particles.length; j++) {
          const b = project(particles[j]);
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            const opacity = (1 - d / CONNECTION_DIST) * 0.35 * Math.min(a.scale, b.scale);
            const avgHue  = (particles[i].hue + particles[j].hue) / 2;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.strokeStyle = `hsla(${avgHue},80%,65%,${opacity})`;
            ctx.lineWidth   = 0.8 * Math.min(a.scale, b.scale);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}



/* ─── Social Icon SVGs ───────────────────────────────────────────────────── */

function IconGitHub({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755
        -1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07
        1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332
        -5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005
        -.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552
        3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0
        4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015
        3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function IconLinkedIn({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
        1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85
        3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065
        2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771
        C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227
        24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function IconEmail({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

/* ─── App ────────────────────────────────────────────────────────────────── */

function App() {
  return (
    <div className="app-root">
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GitHubSection />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */

function Navbar() {
  const links = [
    { href: '#home',       label: 'Home'       },
    { href: '#experience', label: 'Experience' },
    { href: '#projects',   label: 'Projects'   },
    { href: '#skills',     label: 'Skills'     },
    { href: '#github',     label: 'GitHub'     },
    { href: '#education',  label: 'Education'  },
    { href: '#contact',    label: 'Contact'    },
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

/* ─── Hero ───────────────────────────────────────────────────────────────── */

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
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact"  className="btn btn-secondary">Contact Me</a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a href={GITHUB_URL}   target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <IconGitHub size={18} />
              <span>GitHub</span>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="social-btn social-btn--linkedin" aria-label="LinkedIn">
              <IconLinkedIn size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="hero-meta-label">Experience</span>
              <span className="hero-meta-value">2+ Years</span>
            </div>
            <div>
              <span className="hero-meta-label">Contributions</span>
              <span className="hero-meta-value">223+ / Year</span>
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
            <p className="hero-card-title">Frontend &amp; Tools</p>
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

/* ─── About ──────────────────────────────────────────────────────────────── */

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

/* ─── Experience ──────────────────────────────────────────────────────────── */

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

/* ─── Projects ───────────────────────────────────────────────────────────── */

function FeaturedProject({ project }) {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <article className="featured-project-card">
      <div className="fp-badge">&#11088; Featured Project</div>
      <div className="fp-grid">
        <div className="fp-info">
          <div className="fp-header">
            <h3 className="fp-title">{project.name}</h3>
            <span className="fp-role">{project.role}</span>
          </div>
          <p className="fp-tagline">{project.tagline}</p>
          <p className="fp-description">{project.description}</p>
          <ul className="fp-points">
            {project.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <div className="card-tags" style={{ marginTop: '1rem' }}>
            {project.tech.map((t) => <span key={t} className="tag tag--accent">{t}</span>)}
          </div>
          <div className="fp-actions">
            {project.url && project.url !== '#' && (
              <a href={project.url} target="_blank" rel="noreferrer" className="fp-source-btn">
                <IconGitHub size={16} />
                View Source Code
              </a>
            )}
          </div>
        </div>
        <div className="fp-image-wrap">
          <img
            src={process.env.PUBLIC_URL + project.image}
            alt={project.name}
            className="fp-image"
          />
          <div className="fp-image-overlay">
            <span className="fp-stat">5,000+ Students</span>
            <span className="fp-stat">6 Partner Universities</span>
            <span className="fp-stat">8 Labs</span>
          </div>
        </div>
      </div>
      <div className="fp-tabs-section">
        <div className="fp-tabs">
          {project.features.map((f, i) => (
            <button
              key={f.group}
              className={`fp-tab ${activeTab === i ? 'fp-tab--active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {f.icon} {f.group}
            </button>
          ))}
        </div>
        <div className="fp-tab-content">
          <div className="fp-tab-grid">
            {project.features[activeTab].items.map((item) => (
              <span key={item} className="fp-feature-item">
                <span className="fp-feature-dot">+</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const featured = projects.filter((p) => p.featured);
  const regular  = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Real-world applications and personal projects I have designed and built.</p>
      </div>
      {featured.map((p) => <FeaturedProject key={p.name} project={p} />)}
      <h3 className="sub-section-title">Other Projects</h3>
      <div className="cards-grid">
        {regular.map((project) => (
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
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


/* ─── Skills ─────────────────────────────────────────────────────────────── */

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
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── GitHub Section ─────────────────────────────────────────────────────── */

function GitHubSection() {
  const statsUrl   = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=6366f1&icon_color=a78bfa&text_color=c9d1d9&count_private=true`;
  const streakUrl  = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&background=0d1117&stroke=6366f1&ring=a78bfa&fire=f59e0b&currStreakLabel=6366f1`;
  const chartUrl   = `https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`;

  return (
    <section id="github" className="section">
      <div className="section-header">
        <h2>GitHub Activity</h2>
        <p>223 contributions in the last year — building and learning every day.</p>
      </div>

      <div className="github-wrapper">
        {/* Stats cards row */}
        <div className="github-stats-row">
          <div className="github-stat-card">
            <img
              src={statsUrl}
              alt="Sunil Memakiya's GitHub Stats"
              className="github-stats-img"
              loading="lazy"
            />
          </div>
          <div className="github-stat-card">
            <img
              src={streakUrl}
              alt="GitHub Streak Stats"
              className="github-stats-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contribution heatmap */}
        <div className="github-chart-card">
          <div className="github-chart-header">
            <div className="github-chart-title">
              <IconGitHub size={18} />
              <span>{GITHUB_USERNAME}</span>
            </div>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="github-profile-btn">
              View Profile →
            </a>
          </div>
          <div className="github-chart-body">
            <img
              src={chartUrl}
              alt="GitHub Contribution Chart"
              className="github-chart-img"
              loading="lazy"
            />
          </div>
          <div className="github-chart-footer">
            <span className="github-stat-badge">🟩 223 contributions in 2025–2026</span>
            <span className="github-stat-badge">📦 10 repositories</span>
            <span className="github-stat-badge">🚀 Active developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Education ──────────────────────────────────────────────────────────── */

function Education() {
  return (
    <section id="education" className="section section-alt">
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
            <span>Focus: Programming &amp; Software Development</span>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="section">
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
              <a href="mailto:memakiyasunil.b11@gmail.com" className="contact-value contact-link">
                memakiyasunil.b11@gmail.com
              </a>
            </li>
            <li>
              <span className="contact-label">Phone</span>
              <a href="tel:+919554846003" className="contact-value contact-link">+91 9554846003</a>
            </li>
            <li>
              <span className="contact-label">Location</span>
              <span className="contact-value">Ahmedabad, India</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="contact-socials">
            <a href={GITHUB_URL}   target="_blank" rel="noreferrer" className="contact-social-btn" aria-label="GitHub Profile">
              <IconGitHub size={20} />
              <div>
                <span className="contact-social-label">GitHub</span>
                <span className="contact-social-handle">@{GITHUB_USERNAME}</span>
              </div>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="contact-social-btn contact-social-btn--linkedin" aria-label="LinkedIn Profile">
              <IconLinkedIn size={20} />
              <div>
                <span className="contact-social-label">LinkedIn</span>
                <span className="contact-social-handle">Sunil Memakiya</span>
              </div>
            </a>
            <a href="mailto:memakiyasunil.b11@gmail.com" className="contact-social-btn contact-social-btn--email" aria-label="Send Email">
              <IconEmail size={20} />
              <div>
                <span className="contact-social-label">Email</span>
                <span className="contact-social-handle">memakiyasunil.b11@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sunil Memakiya · Built with React</p>
      <div className="footer-socials">
        <a href={GITHUB_URL}   target="_blank" rel="noreferrer" aria-label="GitHub"   className="footer-social-link"><IconGitHub   size={16}/></a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-link"><IconLinkedIn size={16}/></a>
      </div>
    </footer>
  );
}

export default App;
