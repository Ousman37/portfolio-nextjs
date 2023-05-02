import React from 'react';
import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Contact from '../components/Contact';

import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ethmane | Front-End Developer</title>
        <meta name="description" content="This is a sample Next.js app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
