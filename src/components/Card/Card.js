import { Component } from "react";
import { Statistic } from "../Statistic";
import { Button } from "./Button";
import { Section } from "../Section";
import { Notification } from "./Notification";

export class Card extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedbackHandler = () => (value) => {
    this.setState({
      [value]: this.state[value] + 1,
    });
  };

  totalSumFeedbacks({ good, neutral, bad }) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage({ good, neutral, bad }) {
    if (good === 0) {
      return "0%";
    }
    return Math.round((good / (good + neutral + bad)) * 100) + "%";
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <Button
            options={this.state}
            onLeaveFeedback={this.incrementFeedbackHandler()}
          ></Button>
        </Section>
        {this.totalSumFeedbacks(this.state) !== 0 ? (
          <Section title="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalSumFeedbacks(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            ></Statistic>
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}
