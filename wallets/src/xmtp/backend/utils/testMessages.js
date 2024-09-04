const { notifySubscribers } = require('../services/xmtpService');

async function testRaceUpdate() {
  await notifySubscribers('raceUpdates', 'Test Race Update: The race is starting now!');
  console.log('Test race update sent to subscribers.');
}

async function testRaceResult() {
  await notifySubscribers('raceResults', 'Test Race Result: The race has ended. Check out the winners!');
  console.log('Test race result sent to subscribers.');
}

module.exports = { testRaceUpdate, testRaceResult };
