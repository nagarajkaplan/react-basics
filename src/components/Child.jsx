import React, { useState } from "react";

function ChildComponent({ countFromParent, onCountChange }) {
  const [childCount, setChildCount] = useState(countFromParent);

  const incrementCount = () => {
    const newCount = childCount + 1;
    setChildCount(newCount);
    // Pass the updated count back to the parent
    onCountChange(newCount);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p> Child Count: {childCount}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default ChildComponent;
