import React, { Component } from 'react';

import Section from './section/section.js';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFedbackPoint = ({ target }) => {
    this.setState(state => ({
      [target.name]: state[target.name] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback()
      ? Number(((this.state.good * 100) / this.countTotalFeedback()).toFixed())
      : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            option={this.state}
            onLeaveFeedback={this.addFedbackPoint}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
