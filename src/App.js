import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import CompletedTaskList from './components/CompletedTaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
  
      const toggledTask = updatedTasks.find((task) => task.id === taskId);
  
      if (toggledTask && toggledTask.completed) {
        setCompletedTasks((prevCompletedTasks) =>
          prevCompletedTasks.some((task) => task.id === taskId)
            ? prevCompletedTasks
            : [...prevCompletedTasks, toggledTask]
        );
      } else {
        setCompletedTasks((prevCompletedTasks) =>
          prevCompletedTasks.filter((task) => task.id !== taskId)
        );
      }
  
      return updatedTasks.filter((task) => task.id !== taskId);
    });
  };
  
  
  
  
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setCompletedTasks((prevCompletedTasks) => prevCompletedTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-blue-200 rounded-md shadow-lg flex flex-col items-center justify-center">
    
      <h1 className="text-3xl font-bold mb-4">Liste de tâches</h1>
      
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      

      <CompletedTaskList tasks={completedTasks} onDelete={deleteTask}/>
    
    </div>
  );
};

export default App;
