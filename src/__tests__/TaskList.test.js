import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('renders TaskList component with tasks', () => {
  const tasks = [
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
  ];
  render(<TaskList tasks={tasks} />);
  expect(screen.getByText(/task 1/i)).toBeInTheDocument();
  expect(screen.getByText(/task 2/i)).toBeInTheDocument();
});
