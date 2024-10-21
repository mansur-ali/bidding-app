import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuctionItem = ({ match }) => {
  const [auction, setAuction] = useState({});
  const [bids, setBids] = useState([]);
  const [bidAmount, setBidAmount] = useState('');

  useEffect(() => {
    const fetchAuction = async () => {
      const auctionResponse = await axios.get(`/api/auctions/${match.params.id}`);
      setAuction(auctionResponse.data);
      const bidsResponse = await axios.get(`/api/auctions/${match.params.id}/bids`);
      setBids(bidsResponse.data);
    };

    fetchAuction();
  }, [match.params.id]);

  const placeBid = async () => {
    const userId = /* Get the logged-in user's ID */;
    await axios.post(`/api/auctions/${match.params.id}/bids`, { userId, amount: bidAmount });
    setBidAmount('');
    // Refresh bids
    const bidsResponse = await axios.get(`/api/auctions/${match.params.id}/bids`);
    setBids(bidsResponse.data);
  };

  return (
    <div>
      <h1>{auction.title}</h1>
      <p>{auction.description}</p>
      <h3>Current Bids:</h3>
      <ul>
        {bids.map(bid => (
          <li key={bid._id}>{bid.amount} by {bid.user.username}</li>
        ))}
      </ul>
      <input
        type="number"
        value={bidAmount}
        onChange={e => setBidAmount(e.target.value)}
        placeholder="Enter your bid"
      />
      <button onClick={placeBid}>Place Bid</button>
    </div>
  );
};

export default AuctionItem;
