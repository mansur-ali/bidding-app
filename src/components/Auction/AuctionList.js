import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuctionList = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      const response = await axios.get('/api/auctions');
      setAuctions(response.data);
    };

    fetchAuctions();
  }, []);

  return (
    <div>
      <h1>Auction List</h1>
      <ul>
        {auctions.map(auction => (
          <li key={auction._id}>{auction.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuctionList;
