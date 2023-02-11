import { type } from 'os';
import React, { useState } from 'react';
import './App.css';
import Todolist, { TaskType } from './Todolist';

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'REACT', isDone: false },
    { id: 4, title: 'REDUX', isDone: false },
  ]);

  let [filter, setFilter] = useState<FilterValuesType>('all');

  function removeTask(id: number) {
    let filtredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filtredTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodolist = tasks;
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }
  if (filter === 'active') {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }
  return (
    <div className="App">
      <Todolist
        changeFilter={changeFilter}
        title="what to learn"
        tasks={tasksForTodolist}
        removeTasks={removeTask}
      />
    </div>
  );
}

export default App;
