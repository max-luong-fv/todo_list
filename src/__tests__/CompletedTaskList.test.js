/** @jest-environment jsdom */

import React from 'react';
import { render, screen } from '@testing-library/react';
import CompletedTaskList from '../components/CompletedTaskList';

test('renders CompletedTaskList component', () => {
  render(<CompletedTaskList tasks={[]} onToggle={() => {}} onDelete={() => {}} />);
  expect(screen.getByText(/completed task list/i)).toBeInTheDocument();
});

test('renders tasks in CompletedTaskList', () => {
  const tasks = [
    { id: 1, name: 'Task 1', completed: true },
    { id: 2, name: 'Task 2', completed: true },
  ];

  render(<CompletedTaskList tasks={tasks} onToggle={() => {}} onDelete={() => {}} />);

  tasks.forEach((task) => {
    expect(screen.getByText(task.name)).toBeInTheDocument();
  });
});
