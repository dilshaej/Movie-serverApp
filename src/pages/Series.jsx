import React, { useState, useEffect } from 'react';

import axios from 'axios';
import SearchBar from '../components/SeriesBody';
import SeriesCard from '../components/SeriesCard';

function Series() {
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSeries();
  }, []);

  const fetchSeries = async () => {
    try {
      const response = await axios.get(`https://api.example.com/series?search=${searchTerm}`);
      setSeries(response.data);
    } catch (error) {
      console.error('Error fetching series:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
       <div className="app">
     
      <SearchBar onSearch={handleSearch} />
      <div className="series-list">
        {series.map((serie) => (
          <SeriesCard key={serie.id} serie={serie} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Series