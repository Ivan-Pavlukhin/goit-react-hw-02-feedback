import { Component } from "react";

export class Statistic extends Component {
  render() {
    return (
      <p>
        {this.props.name} : {this.props.count}
      </p>
    );
  }
}
