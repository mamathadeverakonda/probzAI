
// src/App.js
// src/App.js
import React, { useState, useEffect } from 'react';
import ChartComponent from './components/ChartComponent';
import TimeSelector from './components/TimeSelector';
import './App.css';
import data from './data/ChartData.json';

const App = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
  
    const filterData = () => {
      
      setFilteredData(data);
    };

    filterData();
  }, [timeframe]);

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="App">
      <h1>Chart with Timeframe Selector</h1>
      <TimeSelector onSelect={handleTimeframeChange} activeTimeframe={timeframe} />
      <ChartComponent data={filteredData} timeframe={timeframe} />
    </div>
  );
};

export default App;


