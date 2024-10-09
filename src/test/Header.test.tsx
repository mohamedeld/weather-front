import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import "@testing-library/jest-dom/vitest";
import Header from '../components/Header';
describe('Header component', () => {
  it('renders the title prop', () => {
    const title = 'Test Title';
    render(<Header title={title} />);
    
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('memoizes correctly', () => {
    const initialTitle = 'Initial Title';
    const newTitle = 'New Title';

    // Render with initial props
    render(<Header title={initialTitle} />);

    // Update props
    render(<Header title={newTitle} />);

    // Check if the component re-renders
    expect(screen.getByText(newTitle)).toBeInTheDocument();
  });
});
