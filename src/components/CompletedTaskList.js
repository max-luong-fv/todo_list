import React from 'react';
import TaskItem from './TaskItem';

const CompletedTaskList = ({ tasks, onToggle, onDelete }) => {
    
    return (
        <div className="container mx-auto mt-8 p-4 rounded-md flex flex-col items-center justify-center">
            <h1 className='text-3xl font-bold mb-4'>Liste complète</h1>
            <div>
            <ul className="space-y-2 ">
                {tasks.map((task ) => (
                    <TaskItem
                        key={task.id}
                        task={task} 
                        onToggle={() => onToggle(task.id)}
                        onDelete={() => onDelete(task.id)}
                    />
                ))}
            </ul>
            </div>
        </div>
    );
};

export default CompletedTaskList;