import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-center space-x-4">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
        className="text-green-500"
      />
      <span className={task.completed ? 'line-through text-gray-500' : 'text-black'}>
        {task.name}
      </span>
      <button onClick={onDelete} className="text-red-500 m-2">
        X
      </button>
    </li>
  );
};

export default TaskItem;
