require('dotenv').config();

const config = {
  walletPrivateKey: process.env.WALLET_PRIVATE_KEY,
  xmtp: {
    env: process.env.XMTP_ENV || 'production',
  },
  server: {
    port: process.env.PORT || 5000,
  },
};

module.exports = config;
