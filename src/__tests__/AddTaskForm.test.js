/** @jest-environment jsdom */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskForm from '../components/AddTaskForm';

test('renders AddTaskForm component', () => {
  render(<AddTaskForm onAddTask={() => {}} />);
  const input = screen.getByPlaceholderText(/write a task/i);
  const button = screen.getByRole('button', { name: /ajouter/i });

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('handles input change', () => {
  render(<AddTaskForm onAddTask={() => {}} />);
  const input = screen.getByPlaceholderText(/write a task/i);

  fireEvent.change(input, { target: { value: 'New Task' } });

  expect(input).toHaveValue('New Task');
});

test('calls onAddTask when button is clicked', () => {
  const onAddTaskMock = jest.fn();
  render(<AddTaskForm onAddTask={onAddTaskMock} />);
  const input = screen.getByPlaceholderText(/write a task/i);
  const button = screen.getByRole('button', { name: /ajouter/i });

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  expect(onAddTaskMock).toHaveBeenCalledWith('New Task');
});
