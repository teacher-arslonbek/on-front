import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
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
  handleIncrement = () => {
    // this.state.count++;
    // console.log("state = ", this.state);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <main className='p-2'>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className='btn btn-primary m-2'>
          Increment
        </button>
      </main>
    );
  }
}

export default Counter;
