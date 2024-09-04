import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission (e.g., send it to the backend or log it)
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback"
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
