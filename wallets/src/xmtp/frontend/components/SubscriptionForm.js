import React, { useState } from 'react';

const SubscriptionForm = ({ onSubscribe }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('raceUpdates');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe(walletAddress, subscriptionType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        placeholder="Enter your wallet address"
      />
      <select value={subscriptionType} onChange={(e) => setSubscriptionType(e.target.value)}>
        <option value="raceUpdates">Race Updates</option>
        <option value="raceResults">Race Results</option>
        <option value="tournamentUpdates">Tournament Updates</option>
      </select>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscriptionForm;
