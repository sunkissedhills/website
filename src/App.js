import React from 'react';
import Landing from './components/Landing';
import Bio from './components/Bio';
import Music from './components/Music';
import Contact from './components/Contact';
import Events from './components/Events';
import Merch from './components/Merch';

const App = () => (
  <div>
    <Landing />
    <Music />
    <Bio />
    <Events />
    <Merch />
    <Contact />
  </div>
);

export default App;
