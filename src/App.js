import React from 'react';
import '../src/App.css';
import Page01 from './components/Page01';
import TopLogo from './components/TopLogo';

const App = () => {
  return (
    <section className='container'>
      <div classname="Main">
        <TopLogo />
        <Page01 classname="Page" />
      </div>
    </section>

  );
};

export default App;