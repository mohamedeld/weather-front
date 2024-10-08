// src/hooks/useWeather.ts
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { IWeather } from '../types/weather';

const useWeather = () => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async (search: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`);
      setWeather(response.data);
    } catch (err) {
      toast.error('City not found. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, fetchWeather };
};

export default useWeather;