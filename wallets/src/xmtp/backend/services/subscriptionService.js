const { subscribeUser, getAllSubscribers } = require('../models/userSubscriptions');

const subscribe = (walletAddress, subscriptionType) => {
  subscribeUser(walletAddress, subscriptionType);
};

const getSubscribersByType = (subscriptionType) => {
  const allSubscribers = getAllSubscribers();
  return Object.keys(allSubscribers).filter(walletAddress =>
    allSubscribers[walletAddress].includes(subscriptionType)
  );
};

module.exports = { subscribe, getSubscribersByType };
