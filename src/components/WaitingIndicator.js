import React from "react";
import { connect } from "react-redux";
//import { selectIsWaiting } from "redux/modules/isWaiting";
import { selectIsAsyncTask } from "redux/modules/asyncTask";

const WaitingIndicator = props => {
  return props.isWaiting ? <div>WAIT (loading)</div> : null;
};

export default connect(state => ({
  isWaiting: selectIsAsyncTask(state)
}))(WaitingIndicator);
