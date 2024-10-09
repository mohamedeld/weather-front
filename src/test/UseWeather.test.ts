import { describe,afterEach,it,expect } from 'vitest';
// src/hooks/__tests__/useWeather.test.ts
import { renderHook, act } from '@testing-library/react';
// import axios from 'axios';
import { vi } from 'vitest';
import toast from 'react-hot-toast';
import useWeather from '../hooks/useWeather';
// Mock the axios module
vi.mock('axios');
vi.mock('react-hot-toast');

describe('useWeather hook', () => {
  const mockWeatherData = {
    name: 'London',
    sys: { country: 'GB' },
    main: { temp: 15 },
    weather: [{ description: 'clear sky' }],
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should start with initial state', () => {
    const { result } = renderHook(() => useWeather());
    expect(result.current.weather).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('should set loading to true and fetch weather data successfully', async () => {
    // (axios.get as vi.Mock).mockResolvedValueOnce({ data: mockWeatherData });

    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.fetchWeather('London');
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.weather).toEqual(mockWeatherData);
    expect(toast.error).not.toHaveBeenCalled();
  });

  it('should handle errors and show toast message', async () => {
    // (axios.get as vi.Mock).mockRejectedValueOnce(new Error('City not found'));

    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.fetchWeather('InvalidCity');
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.weather).toBeNull();
    expect(toast.error).toHaveBeenCalledWith('City not found. Please try again.');
  });

  it('should show toast error when search input is empty', async () => {
    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.fetchWeather('');
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.weather).toBeNull();
    expect(toast.error).toHaveBeenCalledWith('please full search input');
  });
});