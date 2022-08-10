import React from 'react';
import '../src/App.css';
import Page01 from './components/Page01';
import TopLogo from './components/TopLogo';

const App = () => {
  return (
    <section className='Main'>
      <TopLogo />
      <Page01 classname="Page01" />
    </section>

  );
};

export default App;