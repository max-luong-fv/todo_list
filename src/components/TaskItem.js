import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-3 border-b border-gray-300">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="text-green-500"
        />
        <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
          {task.name}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={onDelete} className="text-red-500 hover:text-red-700 focus:outline-none">
          X
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
