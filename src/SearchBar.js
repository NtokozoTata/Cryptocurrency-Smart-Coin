import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search coins..."
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    color: 'red',
    paddingTop: 80,
  },
  input: {
    marginRight: 10,
    padding: '5px 10px',
    border: '1px solid #ccc',
    borderRadius: 4,
  },
  button: {
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
};

function App() {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Function to fetch coins based on the search query
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&ids=${searchQuery}`
        );
        setCoins(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Call the fetchCoins function when searchQuery changes
    if (searchQuery) {
      fetchCoins();
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* Render the coins data */}
      {coins.map((coin) => (
        <div key={coin.id}>
          <h3>{coin.name}</h3>
          <p>Symbol: {coin.symbol}</p>
          <p>Current Price: {coin.current_price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
