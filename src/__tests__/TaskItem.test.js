import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';

test('renders TaskItem component', () => {
  const task = { id: 1, name: 'Example Task', completed: false };
  render(<TaskItem task={task} />);
  expect(screen.getByText(/example task/i)).toBeInTheDocument();
  expect(screen.getByText(/x/i)).toBeInTheDocument();
});

test('marks task as completed when checkbox is checked', () => {
  const task = { id: 1, name: 'Example Task', completed: false };
  const onToggleMock = jest.fn();
  render(<TaskItem task={task} onToggle={onToggleMock} />);
  
  fireEvent.click(screen.getByText(/example task/i)); // Click on the text to simulate checkbox click

  expect(onToggleMock).toHaveBeenCalled();
});

test('deletes task when delete button is clicked', () => {
  const task = { id: 1, name: 'Example Task', completed: false };
  const onDeleteMock = jest.fn();
  render(<TaskItem task={task} onDelete={onDeleteMock} />);
  
  fireEvent.click(screen.getByText(/x/i));

  expect(onDeleteMock).toHaveBeenCalled();
});

// Add more tests based on your component's functionality and behavior
