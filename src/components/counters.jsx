import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 4 },
      { id: 4, value: 5 },
    ],
  };

  // handle{Action}
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(
      (count) => count.id !== counterID
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(({ id }) => ({ id, value: 0 }));
    this.setState({ counters });
  };

  handleIncrement = (countID) => {
    const { counters } = this.state;
    const index = counters.findIndex((count) => count.id === countID);
    const currentCounter = counters[index];
    currentCounter.value += 40;
    this.setState({ counters });
  };

  render() {
    return (
      <main className='container'>
        <button className='btn btn-primary m-2' onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={counter}
            key={counter.id}
          />
        ))}
      </main>
    );
  }
}

export default Counters;
