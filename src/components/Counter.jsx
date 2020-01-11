import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      //make ajax call for getting new data from the server
    }
  }
  render() {
    let classes = this.getBadgeClasses();
    const { children, counter, onIncrement, onDelete } = this.props;

    return (
      //here will be displayed the children object within the props object to get acquired with the oportunity to pass more complex child components
      //in scope of the parent component
      <React.Fragment>
        {children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  componentWillUnmount() {}
}

export default Counter;
