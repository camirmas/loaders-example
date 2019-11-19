import React from 'react';
import './App.css';

import {
  DualRing,
  Circle,
  Default,
  Ellipsis,
  Facebook,
  Grid,
  Heart,
  Hourglass,
  Ring,
  Ripple,
  Roller,
  Spinner,
} from 'spin-spin-spin';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DualRing />
        <Circle />
        <Default />
        <Ellipsis />
        <Facebook />
        <Grid />
        <Heart />
        <Hourglass />
        <Ring />
        <Ripple />
        <Roller />
        <Spinner />
      </header>
    </div>
  );
};

export default App;
