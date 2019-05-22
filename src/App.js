import React from "react";
import Counter from "components/Counter";
import Notifications from "components/Notifications";
import WaitingIndicator from "components/WaitingIndicator";

function App() {
  return (
    <div>
      <header>
        <Counter />
        <WaitingIndicator />
        <Notifications />
      </header>
    </div>
  );
}

export default App;
