const { notifySubscribers } = require('../services/xmtpService');

exports.sendRaceUpdate = (req, res) => {
  const { raceDetails } = req.body;
  notifySubscribers('raceUpdates', `Race update: ${raceDetails}`);
  res.json({ success: true, message: 'Race update sent to subscribers' });
};

exports.sendInProgressUpdate = (req, res) => {
  const { raceStatus } = req.body;
  notifySubscribers('inProgressUpdates', `Race in-progress update: ${raceStatus}`);
  res.json({ success: true, message: 'In-progress update sent to subscribers' });
};

exports.sendTournamentUpdate = (req, res) => {
  const { tournamentDetails } = req.body;
  notifySubscribers('tournamentUpdates', `Tournament update: ${tournamentDetails}`);
  res.json({ success: true, message: 'Tournament update sent to subscribers' });
};


exports.sendRaceResult = (req, res) => {
    const { raceResults } = req.body;
    notifySubscribers('raceResults', `Race results: ${raceResults}`);
    res.json({ success: true, message: 'Race results sent to subscribers' });
  };
  