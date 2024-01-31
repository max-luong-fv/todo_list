import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');
  const { t } = useTranslation();
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
        placeholder={t('addTaskPlaceholder')}
        value={newTask}
        onChange={handleInputChange}
        className="border rounded px-2 py-1"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white px-3 py-1 rounded">
      {t('addTaskButton')}
      </button>
    </div>
  );
};

export default AddTaskForm;
