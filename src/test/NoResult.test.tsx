import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import "@testing-library/jest-dom/vitest"
import WeatherNoResult from "../components/WeatherNoResult";

describe('WeatherNoResult component', () => {
  it('renders the message prop', () => {
    const message = 'No weather data found';
    render(<WeatherNoResult message={message} />);
    
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('memoizes correctly', () => {
    const initialMessage = 'Initial Message';
    const newMessage = 'New Message';

    // Render with initial props
    render(<WeatherNoResult message={initialMessage} />);

    // Update props
    render(<WeatherNoResult message={newMessage} />);

    // Check if the component re-renders
    expect(screen.getByText(newMessage)).toBeInTheDocument();
  });
});