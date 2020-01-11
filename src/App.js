import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  componentDidMount() {
    console.log("you can place here AJAX calls");
  }

  handleRemoval = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({
      ...this.state,
      counters
    });
  };

  handleIncrement = counterInvoked => {
    const counters = this.state.counters.map(counter => {
      if (counter.id === counterInvoked.id) counter.value++;
      return counter;
    });
    this.setState({ ...this.state, counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      ...this.state,
      counters
    });
  };

  render() {
    const counterValues = [
      ...this.state.counters.map(counter => counter.value)
    ];
    const totalAmount = counterValues.reduce((acc, num) => acc + num);
    return (
      <React.Fragment>
        <Navbar totalCounters={totalAmount} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleRemoval}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
