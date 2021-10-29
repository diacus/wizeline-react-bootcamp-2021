import { useState } from 'react'
import { v4 as uuid4 } from 'uuid';

function useToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (value) => {
    const task = { id: uuid4(), value };
    setTasks((tasksSoFar) => ([ ...tasksSoFar, task ]));
  };

  const removeTask = () => {
    if (tasks.length === 0) return;

    const [first, ...rest] = tasks;
    console.debug(`Deleting task ${first.value}`);
    setTasks(rest);
  };

  return { tasks, addTask, removeTask };
}

export default useToDoList;
