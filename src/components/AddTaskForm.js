import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={handleInputChange}
        className="border rounded px-2 py-1"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white px-3 py-1 rounded">
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
