import React, { useState } from "react";
import ChildComponent from "./Child";

function ParentComponent() {
  // Parent state
  const [count, setCount] = useState(0);

  // Callback function to receive updated count from child
  const handleChildCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <ChildComponent
        countFromParent={count}
        onCountChange={handleChildCountChange}
      />
    </div>
  );
}

export default ParentComponent;
