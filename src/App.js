import "./App.css";
// import ClassComponent from "./components/ClassComponent";
// import FunctionalComponent from "./components/FunctionalComponent";

import ParentComponent from "./components/Parent";

function App() {
  // const classHeading = "Class Component";
  // const functionHeading = "Functional Component";

  return (
    <div>
      <h1>Hi Everyone </h1>
      <h1>Welcome to React js Session </h1>
      {/* <ClassComponent heading={classHeading} /> */}
      {/* <FunctionalComponent heading={functionHeading} /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
