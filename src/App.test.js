import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders task list and add new task', () => {
  render(<App />);

  // Check if the initial task list heading is present
  const taskListHeading = screen.getByText(/Liste de tâches/i);
  expect(taskListHeading).toBeInTheDocument();

  // Add a new task
  const addTaskInput = screen.getByPlaceholderText(/Écrire une tâche/i);
  const addButton = screen.getByText(/Ajouter/i);

  fireEvent.change(addTaskInput, { target: { value: 'Test task' } });
  fireEvent.click(addButton);

  // Check if the new task is present in the task list
  const newTaskElement = screen.getByText(/Test task/i);
  expect(newTaskElement).toBeInTheDocument();
});
