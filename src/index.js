import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

const HomeScreen = () => {
  const handleSearch = (query) => {
    // Perform the search action based on the query
    console.log('Search query:', query);
    // Update the search results in your main screen component state or trigger a search action
  };

  return (
    <div>
      <h1>Home Screen</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Render the rest of your home screen */}
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
export default HomeScreen;
