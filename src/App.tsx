import { useState } from 'react'

import './App.css'
import Search from './components/Search';
import Button from './components/Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { IWeather } from './types/weather';
import WeatherResult from './components/WeatherResult';
import { BeatLoader } from 'react-spinners';
import WeatherNoResult from './components/WeatherNoResult';
import useWeather from './hooks/useWeather';




function App() {
  const [search,setSearch] = useState<string>('');
  
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value);
  }
  const {weather, loading, fetchWeather} = useWeather();

  const handleSearchBtn = ()=>{
    fetchWeather(search);
  }
  
  return (
    <>
      <div className='container'>
      <div className='search-container'>
        {/* search component */}
      <Search search={search} handleSearch={handleSearch} type='text' placeholder='Search...' name='search' className="search-input"/>  
        {/* add resuable button  */}
      <Button handleSearchBtn={handleSearchBtn} className="search-btn">Search</Button>
      </div>
      {loading ? (
          <BeatLoader /> // Display loading indicator while fetching
        ) : (weather && <WeatherResult weather={weather} />) || (
          <WeatherNoResult message='There are no results' /> // Show no result or weather data based on response
        )}
    </div>
<Toaster />
</>
  )
}

export default App
