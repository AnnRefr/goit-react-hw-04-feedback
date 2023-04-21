import { useState } from 'react';
import Statistics from '../components/Statistics/Statistics';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Section from '../components/Section/Section';
import Notification from '../components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedbacks = () => {
    console.log(good + neutral + bad);
    return good + neutral + bad;
  };

  const countPositivePercent = () => {
    const total = totalFeedbacks();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const buttonNames = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonNames}
          onLeaveFeedback={handleClickButton}
        />
      </Section>

      {totalFeedbacks() ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks()}
            positivePercentage={countPositivePercent()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}

export default App;
