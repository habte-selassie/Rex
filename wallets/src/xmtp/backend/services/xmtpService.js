const { Client } = require('@xmtp/xmtp-js');
const { Wallet } = require('ethers');
const { getSubscribersByType } = require('./subscriptionService');

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;
const wallet = new Wallet(walletPrivateKey);

async function initializeXMTP() {
  const xmtp = await Client.create(wallet);
  return xmtp;
}

async function sendNotification(xmtp, walletAddress, message) {
  const conversation = await xmtp.conversations.newConversation(walletAddress);
  await conversation.send(message);
}

async function notifySubscribers(subscriptionType, message) {
  const xmtp = await initializeXMTP();
  const subscribers = getSubscribersByType(subscriptionType);

  subscribers.forEach(async (walletAddress) => {
    await sendNotification(xmtp, walletAddress, message);
  });
}

module.exports = { notifySubscribers };
