import React from "react";
import { connect } from "react-redux";
import {
  selectAllNotifications,
  removeNotification
} from "./../redux/modules/notifications";

const Notify = ({ notify, onRemove }) => {
  const handleClick = e => onRemove(notify.id);
  return (
    <div>
      {notify.text} <button onClick={handleClick}>remove</button>
    </div>
  );
};

const Notifications = ({ list, removeNotification }) => {
  const handleOnRemove = id => removeNotification({ id });

  return (
    <div>
      <ul>
        {list &&
          list.map(notify => (
            <li key={notify.id}>
              <Notify notify={notify} onRemove={handleOnRemove} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default connect(
  state => ({
    list: selectAllNotifications(state)
  }),
  {
    removeNotification
  }
)(Notifications);
