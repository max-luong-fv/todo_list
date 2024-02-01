import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from '../components/LanguageSwitcher';

test('renders LanguageSwitcher component', () => {
  render(<LanguageSwitcher />);
  expect(screen.getByText(/english/i)).toBeInTheDocument();
  expect(screen.getByText(/français/i)).toBeInTheDocument();
});

test('changes language to English when English button is clicked', () => {
  const changeLanguageMock = jest.fn();
  render(<LanguageSwitcher />);
  
  fireEvent.click(screen.getByText(/english/i));
  
  expect(changeLanguageMock).toHaveBeenCalledWith('en');
});
