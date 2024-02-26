import axios from "axios";
import React, { useState, useEffect } from "react";

const FunctionalComponent = ({ heading }) => {
  // state using useState
  const [data, setData] = useState([]);

  // React useEffect hook for callling api once
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // update the state using set{State} function
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1>{heading}</h1>
      <ul className="data-list">
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionalComponent;
