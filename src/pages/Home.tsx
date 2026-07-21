import React from 'react';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import GithubStats from '../components/GithubStats/GithubStats';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <GithubStats />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
