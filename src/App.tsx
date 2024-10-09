import { useState } from 'react'

import './App.css'
import  { Toaster } from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';
import useWeather from './hooks/useWeather';
import Button from './components/Button';
import Search from './components/Search';
import WeatherResult from './components/WeatherResult';
import { Home, HomeSearch } from './StyledHome';
import WeatherNoResult from './components/WeatherNoResult';
import Header from './components/Header';




function App() {
  const [search,setSearch] = useState<string>('');
  const {weather, loading, fetchWeather} = useWeather();
  
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value);
  }

  const handleSearchBtn = ()=>{
    fetchWeather(search);
  }
  
  return (
    <>

      <Home>
      <Header title={"Weather country app"}/>
      <HomeSearch>

      <Search search={search} handleSearch={handleSearch} type='text' placeholder='Enter your country or city name...' name='search' />  
        
      <Button handleSearchBtn={handleSearchBtn} disabled={loading}>Search</Button>
      </HomeSearch>
      {loading ? (
          <BeatLoader /> // Display loading indicator while fetching
        ) : (weather && <WeatherResult weather={weather} />) || (
          <WeatherNoResult message='There are no results' /> // Show no result or weather data based on response
        )}
    </Home>
<Toaster />
</>
  )
}

export default App
