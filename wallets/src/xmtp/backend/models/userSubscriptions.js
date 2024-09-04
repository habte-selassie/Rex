let userSubscriptions = {};

const subscribeUser = (walletAddress, subscriptionType) => {
  if (!userSubscriptions[walletAddress]) {
    userSubscriptions[walletAddress] = [];
  }
  if (!userSubscriptions[walletAddress].includes(subscriptionType)) {
    userSubscriptions[walletAddress].push(subscriptionType);
  }
};

const getUserSubscriptions = (walletAddress) => {
  return userSubscriptions[walletAddress] || [];
};

const getAllSubscribers = () => {
  return userSubscriptions;
};

module.exports = { subscribeUser, getUserSubscriptions, getAllSubscribers };
