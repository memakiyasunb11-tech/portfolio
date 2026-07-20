/* ============================================================
   COMPONENT — GithubStats
   GitHub stats using readme-stats images + profile info
   ============================================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiUsers, FiCode } from 'react-icons/fi';
import { personal } from '../../data/personal';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button       from '../Button/Button';
import { staggerContainer, fadeUpVariant, viewportConfig } from '../../utils/motion';
import './GithubStats.css';

const USERNAME = personal.githubUsername;

const statsUrl  = `https://github-readme-stats-eight-theta.vercel.app/api?username=${USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1535&title_color=6366f1&icon_color=a78bfa&text_color=94a3b8&count_private=true`;
const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=tokyonight&hide_border=true&background=0d1535&stroke=6366f1&ring=a78bfa&fire=f59e0b&currStreakLabel=6366f1`;
const langUrl   = `https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1535&title_color=6366f1&text_color=94a3b8&langs_count=8`;
const chartUrl  = `https://ghchart.rshah.org/6366f1/${USERNAME}`;

const quickStats = [
  { icon: <FiCode size={20} />,      label: 'Repositories', value: '10+',  color: '#6366f1' },
  { icon: <FiGitBranch size={20} />, label: 'Contributions',value: '223+', color: '#22d3ee' },
  { icon: <FiStar size={20} />,      label: 'Total Stars',   value: '15+',  color: '#fbbf24' },
  { icon: <FiUsers size={20} />,     label: 'Followers',     value: '10+',  color: '#34d399' },
];

function GithubStats() {
  return (
    <section id="github" className="section">
      <div className="container">
        <SectionTitle
          title="GitHub Activity"
          accent="GitHub"
          subtitle="Open source contributions, streaks, and language insights."
        />

        {/* Quick stats */}
        <motion.div
          className="gh-quick-stats"
          variants={staggerContainer(0.10)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {quickStats.map(({ icon, label, value, color }) => (
            <motion.div
              key={label}
              className="gh-stat-chip glass"
              variants={fadeUpVariant}
              whileHover={{ y: -4, scale: 1.03 }}
              style={{ '--chip-color': color }}
            >
              <span className="gh-stat-chip__icon" style={{ color }}>{icon}</span>
              <span className="gh-stat-chip__value">{value}</span>
              <span className="gh-stat-chip__label">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats images row */}
        <motion.div
          className="gh-stats-row"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <motion.div className="gh-img-card glass" variants={fadeUpVariant}>
            <img src={statsUrl} alt="GitHub Stats" className="gh-img" loading="lazy" />
          </motion.div>
          <motion.div className="gh-img-card glass" variants={fadeUpVariant}>
            <img src={streakUrl} alt="GitHub Streak" className="gh-img" loading="lazy" />
          </motion.div>
        </motion.div>

        {/* Languages + Contribution chart */}
        <motion.div
          className="gh-bottom-row"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <motion.div className="gh-img-card glass gh-lang-card" variants={fadeUpVariant}>
            <img src={langUrl} alt="Top Languages" className="gh-img" loading="lazy" />
          </motion.div>

          <motion.div className="gh-chart-card glass" variants={fadeUpVariant}>
            <div className="gh-chart-header">
              <div className="gh-chart-title">
                <FiGithub size={18} />
                <span>{USERNAME}</span>
              </div>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="gh-profile-link">
                View Profile →
              </a>
            </div>
            <img src={chartUrl} alt="Contribution Graph" className="gh-chart-img" loading="lazy" />
            <div className="gh-chart-footer">
              <span>🟩 223 contributions</span>
              <span>📦 10+ repositories</span>
              <span>🚀 Active developer</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="gh-cta"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <Button variant="outline" size="lg" href={personal.github} icon={<FiGithub />} external>
            View GitHub Profile
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default GithubStats;
