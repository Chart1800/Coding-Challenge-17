// U94741303

// TaskGenerator

import React, { useState } from 'react';
import tasks from '../tasks';
import FancyText from './FancyText';

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const HandleTheNextTask = () => {
    const nextIndex = currentTaskIndex + 1;
    if (nextIndex < tasks.length) {
      setCurrentTaskIndex(nextIndex);
    } 
    else {
      alert('Nice Job! You finished all the tasks!');
    }
  };

  const handleTaskCompletion = () => {
    const updatedTasks = [...tasks];
    updatedTasks[currentTaskIndex].isCompleted = true;
    
  };

  const currentTasks = tasks[currentTaskIndex];

  return (
    <div>
      <div>
        <FancyText title text="Tasks Needed to Complete" />
        <p>{TasksNededCompleted.name}</p>
        <p>Status: {currentTask.isCompleted ? "Completed!" : "Not Complete"}</p>
      </div>
      <div>
        <FancyText text="Finish tasks by 3pm and take the rest of the day off!" />
        <button onClick={handleTaskCompletion}>Mark it as Completed</button>
        <button onClick={handleNextTask}>Next Task To Do</button>
      </div>
    </div>
  );
};


export default TaskGenerator;
