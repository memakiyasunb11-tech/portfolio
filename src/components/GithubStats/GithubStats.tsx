import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Users, Code } from 'lucide-react';
import { personal } from '../../data/personal';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import { cn } from '../../utils/cn';

const USERNAME = personal.githubUsername;

const statsUrl = `https://github-readme-stats-eight-theta.vercel.app/api?username=${USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1535&title_color=6366f1&icon_color=a78bfa&text_color=94a3b8&count_private=true`;
const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=tokyonight&hide_border=true&background=0d1535&stroke=6366f1&ring=a78bfa&fire=f59e0b&currStreakLabel=6366f1`;
const langUrl = `https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1535&title_color=6366f1&text_color=94a3b8&langs_count=8`;
const chartUrl = `https://ghchart.rshah.org/6366f1/${USERNAME}`;

const quickStats = [
  { icon: <Code size={20} />, label: 'Repositories', value: '10+', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  { icon: <GitBranch size={20} />, label: 'Contributions', value: '223+', color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
  { icon: <Star size={20} />, label: 'Total Stars', value: '15+', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
  { icon: <Users size={20} />, label: 'Followers', value: '10+', color: 'text-success', bg: 'bg-success/10', border: 'border-success/20' },
];

const GithubStats: React.FC = () => {
  return (
    <section id="github" className="py-24 relative bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="GitHub Activity"
          accent="GitHub"
          subtitle="Open source contributions, streaks, and language insights."
        />

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 mb-8">
          {quickStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={cn(
                "glass-panel rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center gap-3 border transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
                stat.border
              )}
            >
              <div className={cn("p-3 rounded-full", stat.bg, stat.color)}>
                {stat.icon}
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">{stat.value}</h4>
                <p className="text-sm font-medium text-secondary-text">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column: Stats & Streak */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl p-4 md:p-6 border border-white/5 overflow-hidden flex justify-center hover:border-primary/30 transition-colors"
            >
              <img src={statsUrl} alt="GitHub Stats" className="max-w-full h-auto object-contain" loading="lazy" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel rounded-2xl p-4 md:p-6 border border-white/5 overflow-hidden flex justify-center hover:border-accent/30 transition-colors"
            >
              <img src={streakUrl} alt="GitHub Streak" className="max-w-full h-auto object-contain" loading="lazy" />
            </motion.div>
          </div>

          {/* Right Column: Top Langs & Contributions */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel rounded-2xl p-4 md:p-6 border border-white/5 overflow-hidden flex justify-center hover:border-primary/30 transition-colors h-full items-center"
            >
              <img src={langUrl} alt="Top Languages" className="max-w-full h-auto object-contain" loading="lazy" />
            </motion.div>
          </div>
        </div>

        {/* Full width Contribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-panel rounded-2xl p-4 md:p-8 mt-6 lg:mt-8 border border-white/5 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Github size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-white">{USERNAME}</h3>
                <p className="text-sm text-secondary-text">Contribution Graph</p>
              </div>
            </div>
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-primary hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              View Profile &rarr;
            </a>
          </div>
          
          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <img src={chartUrl} alt="Contribution Graph" className="min-w-[700px] w-full h-auto" loading="lazy" />
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-white/10 text-sm text-secondary-text">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#6366f1]"></span>
              <span>223+ contributions</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={16} />
              <span>10+ repositories</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              <span>Active developer</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" href={personal.github} icon={<Github size={20} />} external>
            Explore GitHub Profile
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
