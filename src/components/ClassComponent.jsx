import axios from "axios";
import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // state using this.state
    this.state = {
      data: [],
    };
  }
  // lifeCycle method for calling api on first load
  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((resp) => {
        this.setState({
          // updating state values using setState
          data: resp,
        });
      });
  }

  render() {
    const { data } = this.state;
    const { heading } = this.props;

    return (
      <>
        <h1>{heading}</h1>
        <ul className="data-list">
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default ClassComponent;
