 import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'; // Import a custom CSS file for styling

const Carousel = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      );
      const data = await response.json();
      setTrendingCoins(data);
    } catch (error) {
      console.error('Error fetching trending coins:', error);
    }
  };

  const renderTrendingCoinsCarousel = () => {
    const handleOnSlideChange = (event) => {
      // Handle slide change event if needed
      console.log('Slide changed:', event);
    };

    return (
      <div className="trending-coins-carousel">
        <h2 className="carousel-title">Get All The Info Regarding Your Favorite Crypto Currency</h2>
        
        <AliceCarousel
          mouseTracking
          items={trendingCoins}
          responsive={{
            0: { items: 1 },
            768: { items: 3 },
            1024: { items: 5 },
          }}
          autoPlay
          autoPlayInterval={2000} // Adjust the auto-play interval as needed (in milliseconds)
          disableButtonsControls // Disable navigation buttons (previous/next)
          infinite // Enable infinite loop
          autoPlayStrategy="all" // Move all items to the start when reaching the last item
          onSlideChanged={handleOnSlideChange}
        >
          {trendingCoins.map((coin) => (
            <div key={coin.id} className="coin-item">
            <a href={`/coin/${coin.id}`} className="coin-link">
              <img src={coin.image} alt={coin.name} className="coin-image" />
              <div className="coin-details">
            <span className="coin-name">{coin.name}</span>
            
            <span className="coin-percentage">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
            <span className="coin-price">${coin.current_price.toFixed(2)}</span>
      </div>
    </a>
  </div>
))}

        </AliceCarousel>
      </div>
    );
  };

  return <div className="carousel-container">{renderTrendingCoinsCarousel()}</div>;
};


export default Carousel;
