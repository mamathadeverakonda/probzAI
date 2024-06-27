
import React from 'react';
import './TimeSelector.css';

const TimeSelector = ({ onSelect, activeTimeframe }) => (
  <div className="timeframe-selector">
    <button
      className={`timeframe-button ${activeTimeframe === 'daily' ? 'active' : ''}`}
      onClick={() => onSelect('daily')}
    >
      Daily
    </button>
    <button
      className={`timeframe-button ${activeTimeframe === 'weekly' ? 'active' : ''}`}
      onClick={() => onSelect('weekly')}
    >
      Weekly
    </button>
    <button
      className={`timeframe-button ${activeTimeframe === 'monthly' ? 'active' : ''}`}
      onClick={() => onSelect('monthly')}
    >
      Monthly
    </button>
  </div>
);

export default TimeSelector;
