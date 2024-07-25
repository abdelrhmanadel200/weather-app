import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const API_KEY = 'c50cfa3c829efcd1294a3f02ca1b0983'; // Replace with your API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
<div className="w-3/4 flex flex-col items-center justify-center h-screen mx-4 my-4">
      <form onSubmit={handleSearch} className="flex flex-col w-full max-w-md p-4 bg-white rounded shadow-md">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city"
          className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 text-sm text-white bg-blue-500 hover:bg-blue-700 rounded">
          <i className="fas fa-search mr-2" /> Search
        </button>
      </form>
      {weatherData && (
        <div className="flex flex-col w-full max-w-md p-4 mt-4 bg-white rounded shadow-md">
          <h2 className="text-lg font-bold">{weatherData.name}</h2>
          <p className="text-sm text-gray-600">Temperature: {weatherData.main.temp}°C</p>
          <p className="text-sm text-gray-600">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-sm text-gray-600">Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;