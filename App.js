// U94741303

import React from './react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';

function App() {
  return (
    <div className="Tasks">
      <header className="Tasks to Complete">
        <FancyText title text="Task Management and Motivation Function" />
      </header>
      <main>
        <TaskGenerator />
      </main>
    </div>
  );
}

export default App;