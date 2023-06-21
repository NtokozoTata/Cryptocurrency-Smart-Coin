import React from 'react';

const Watchlist = ({ watchlist, removeCoin }) => {
  const handleRemove = (coinId) => {
    removeCoin(coinId);
  };

  return (
    <div>
      <h2>My Watchlist</h2>
      <ul>
        {watchlist.map((coin) => (
          <li key={coin.id}>
            <span>{coin.name}</span>
            <button onClick={() => handleRemove(coin.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
