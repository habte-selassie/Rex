
import React, { useState } from 'react';

const NotificationSettings = ({ onUpdateSettings }) => {
  const [subscriptionType, setSubscriptionType] = useState('raceUpdates');

  const handleUpdate = () => {
    onUpdateSettings(subscriptionType);
  };

  return (
    <div>
      <h3>Manage Your Notifications</h3>
      <select value={subscriptionType} onChange={(e) => setSubscriptionType(e.target.value)}>
        <option value="raceUpdates">Race Updates</option>
        <option value="raceResults">Race Results</option>
        <option value="tournamentUpdates">Tournament Updates</option>
      </select>
      <button onClick={handleUpdate}>Update Settings</button>
    </div>
  );
};

export default NotificationSettings;