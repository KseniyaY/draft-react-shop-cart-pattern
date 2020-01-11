import React from "react";
import Counter from "./Counter";

const Counters = ({ onReset, counters, onDelete, onIncrement }) => {
  return (
    //for the sake of presentation here will be used the component structure with a content inside a component's tag,
    //considered as the children object within the props object
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
        >
          <h4>SKU #{counter.id}</h4>
        </Counter>
      ))}
    </div>
  );
};

export default Counters;
