import { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
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
    currentCounter.value++;
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <NavBar count={this.state.counters.filter((c) => c.value > 0).length} />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
