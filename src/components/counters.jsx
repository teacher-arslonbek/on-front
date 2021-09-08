import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onReset, onIncrement, onDelete } = this.props;

    return (
      <main className='container'>
        <button className='btn btn-primary m-2' onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
            key={counter.id}
          />
        ))}
      </main>
    );
  }
}

export default Counters;
