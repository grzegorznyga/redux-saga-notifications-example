import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  selectCounter
} from "./../redux/modules/counter";
import {
  addNotification,
  removeNotification
} from "./../redux/modules/notifications";
import { incrementA } from "./../redux/sagas/counter";

const Counter = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.incrementA();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.decrement();
          props.removeNotification({ id: 2 });
        }}
      >
        -
      </button>
      Async Counter: {props.count}
    </div>
  );
};

export default connect(
  state => ({
    count: selectCounter(state)
  }),
  {
    increment,
    decrement,
    addNotification,
    removeNotification,
    incrementA
  }
)(Counter);
