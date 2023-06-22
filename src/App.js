import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import Coin from './routes/Coin';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { Switch, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import firebase from './firebase';

function App() {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [user, setUser] = useState(null);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

  const handleSearch = () => {
    axios
      .get(url)
      .then((response) => {
        const result = response.data.find(
          (coin) => coin.name.toLowerCase() === searchQuery.toLowerCase()
        );
        setSearchResult(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <Carousel />
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search coins..."
          style={styles.searchInput}
        />
        <button onClick={handleSearch} style={styles.searchButton}>
          Search
        </button>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            searchResult ? (
              <div style={styles.coinContainer}>
                <h2>{searchResult.name}</h2>
                <img
                  src={searchResult.image}
                  alt={searchResult.name}
                  style={styles.coinImage}
                />
                <p>Symbol: {searchResult.symbol}</p>
                <p>Current Price: ${searchResult.current_price}</p>
                {/* Render additional coin details as needed */}
              </div>
            ) : (
              <Coins coins={coins.filter(coin => coin.name.toLowerCase().includes(searchQuery.toLowerCase()))} />
            )
          }
        />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

const styles = {
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 30,
  },
  searchInput: {
    marginRight: 10,
    width: '300px',
    padding: '5px 10px',
    border: '1px solid #ccc',
    borderRadius: 4,
  },
  searchButton: {
    padding: '5px 10px',
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    marginLeft: 10,
  },
  coinContainer: {
    padding: '100px',
    border: '10px solid blue',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  coinImage: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    marginBottom: '10px',
  },
};

export default App;
