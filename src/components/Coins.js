import React from 'react';
import CoinItem from './CoinItem';
import Coin from '../routes/Coin';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

import './Coins.css';

const Coins = (props) => {
  return (
    <div className="container">
   

      <div className="search-bar">
        {/* Your search bar component goes here */}
      </div>

      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>

        {props.coins.map((coin) => (
          <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
            <CoinItem coins={coin} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coins;
