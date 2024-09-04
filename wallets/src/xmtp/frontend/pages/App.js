import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SubscriptionForm from '../components/SubscriptionForm';
import NotificationSettings from '../components/NotificationSettings';
import FeedbackForm from '../components/FeedbackForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Win-Me Game</h1>
        <Switch>
          <Route path="/subscribe" component={SubscriptionForm} />
          <Route path="/settings" component={NotificationSettings} />
          <Route path="/feedback" component={FeedbackForm} />
          <Route path="/" exact>
            <h2>Welcome to the Win-Me Game!</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
