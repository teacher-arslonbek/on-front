import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
    ],
  };
  render() {
    return (
      <main className='container'>
        {this.state.counters.map(({ id, value }) => (
          <Counter value={value} key={id} />
        ))}
      </main>
    );
  }
}

export default Counters;
