import React from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

const SearchComponent = () => {
  return (
    <div id="first-page-search-container">
      <div className="nebula"></div>
      <div className="starfield"></div>
      <div className="cosmic-dust"></div>
      <div className="cosmic-dust"></div>
      <div className="cosmic-dust"></div>
      <div className="stardust"></div>
      <div className="cosmic-ring"></div>

      <div id="main">
        {/* <input
          className="input"
          name="text"
          type="text"
          placeholder="AI帮我写代码..."
        /> */}
        <InputBase
          className="input"
          sx={{ flex: 1 }}
          placeholder="AI帮我工作..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <div id="input-mask"></div>
        <div id="cosmic-glow"></div>
        <div className="wormhole-border"></div>
        {/* 后图标 */}
        <div id="wormhole-icon">
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="#a9c7ff"
            fill="none"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <circle r="10" cy="12" cx="12"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>

        {/* 前图标 */}
        <div id="search-icon">
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="url(#cosmic-search)"
            fill="none"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <circle r="8" cy="11" cx="11"></circle>
            <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
            <defs>
              <linearGradient gradientTransform="rotate(45)" id="cosmic-search">
                <stop stopColor="#a9c7ff" offset="0%"></stop>
                <stop stopColor="#6e8cff" offset="100%"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
