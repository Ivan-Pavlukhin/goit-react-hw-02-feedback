import { Component } from "react";
import PropTypes from "prop-types";

export class Statistic extends Component {
  stringModification(string) {
    return [...string]
      .map((item, index) => {
        if (index === 0) {
          return item.toUpperCase();
        }
        return item === item.toUpperCase() ? " " + item.toLowerCase() : item;
      })
      .join("");
  }

  render() {
    return (
      <div>
        {Object.entries(this.props).map((item) => (
          <p key={item[0]}>
            {this.stringModification(item[0])} : {item[1]}
          </p>
        ))}
      </div>
    );
  }
}

Statistic.propsTypes = {
  props: PropTypes.objectOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
};
