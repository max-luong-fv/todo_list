import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
