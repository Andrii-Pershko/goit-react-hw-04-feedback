import Section from './section/section.js';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';
import Notification from './Notification';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedBack = () => {
    return good + neutral + bad;
  };

  const goodFeedbackInPercent = () => {
    const percentPositive = totalFeedBack()
      ? Number(((good * 100) / totalFeedBack()).toFixed())
      : 0;
    return percentPositive;
  };

  const addFedbackPoint = ({ target }) => {
    switch (target.name) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          option={{ good, neutral, bad }}
          onLeaveFeedback={addFedbackPoint}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedBack() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + bad + neutral}
            positivePercentage={goodFeedbackInPercent()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};

export default App;
