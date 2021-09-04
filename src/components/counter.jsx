import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
  };

  formatCount() {
    const { count } = this.state;

    if (count === 0) return "Zero";
    return count;
  }

  getBadgeClass() {
    return "badge m-2 bg-" + (this.state.count === 0 ? "warning" : "primary");
  }

  // handle{Action}
  handleIncrement = (num) => {
    this.setState({ count: this.state.count + num });
  };

  render() {
    console.log("props = ", this.props);

    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(20)}
          className='btn btn-primary m-2'>
          Increment
        </button>
        {this.props.children}
      </div>
    );
  }
}

export default Counter;
