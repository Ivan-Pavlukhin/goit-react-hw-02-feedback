import { Component } from "react";
import { Statistic } from "../Statistic";
import { Button } from "./Button";

export class Card extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedbackHandler = (value) => () => {
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
        <h1>Please leave feedback</h1>
        <Button
          onIncrement={this.incrementFeedbackHandler("good")}
          name="Good"
        />
        <Button
          onIncrement={this.incrementFeedbackHandler("neutral")}
          name="Neutral"
        />
        <Button onIncrement={this.incrementFeedbackHandler("bad")} name="Bad" />
        {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
        <h2>Statistics</h2>
        <Statistic name="Good" count={good} />
        <Statistic name="Neutral" count={neutral} />
        <Statistic name="Bad" count={bad} />
        <Statistic name="Total" count={this.totalSumFeedbacks(this.state)} />
        <Statistic
          name="Positive feedbacks"
          count={this.countPositiveFeedbackPercentage(this.state)}
        />
      </div>
    );
  }
}

// export class Counter extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{/* {this.props.name} {this.props.count} */}</h1>
//         <div>{/* <Increment onClick={this.props.onIncrement} /> */}</div>
//       </div>
//     );
//   }
// }
