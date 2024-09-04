const express = require('express');
const { sendRaceUpdate, sendInProgressUpdate, sendTournamentUpdate, sendRaceResult } = require('../controllers/notificationsController');
const { notifySubscribers } = require('../services/xmtpService');

const router = express.Router();

// Route for race updates (notifies subscribers about upcoming or ongoing races)
router.post('/race-update', async (req, res) => {
  const { topic, message } = req.body;
  try {
    await sendRaceUpdate(topic, message);
    res.status(200).send('Race update sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending race update');
  }
});

// Route for in-progress race updates
router.post('/in-progress-update', async (req, res) => {
  const { topic, message } = req.body;
  try {
    await sendInProgressUpdate(topic, message);
    res.status(200).send('In-progress update sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending in-progress update');
  }
});

// Route for tournament updates
router.post('/tournament-update', async (req, res) => {
  const { topic, message } = req.body;
  try {
    await sendTournamentUpdate(topic, message);
    res.status(200).send('Tournament update sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending tournament update');
  }
});

// Route for race results
router.post('/race-result', async (req, res) => {
  const { topic, message } = req.body;
  try {
    await sendRaceResult(topic, message);
    res.status(200).send('Race result sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending race result');
  }
});

module.exports = router;


// const express = require('express');
// const { sendRaceUpdate, sendInProgressUpdate, sendTournamentUpdate } = require('../controllers/notificationsController');
// const router = express.Router();

// router.post('/race-update', sendRaceUpdate);
// router.post('/in-progress-update', sendInProgressUpdate);
// router.post('/tournament-update', sendTournamentUpdate);

// router.post('/race-result', sendRaceResult);

// module.exports = router;
