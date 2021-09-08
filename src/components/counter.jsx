import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const { value } = this.props.counter;

    if (value === 0) return "Zero";
    return value;
  }

  getBadgeClass() {
    return (
      "badge m-2 bg-" + (this.props.counter.value === 0 ? "warning" : "primary")
    );
  }

  render() {
    const {
      onIncrement,
      onDelete,
      counter: { id },
    } = this.props;
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button onClick={() => onIncrement(id)} className='btn btn-primary m-2'>
          Increment
        </button>
        <button className='btn btn-danger m-2' onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
