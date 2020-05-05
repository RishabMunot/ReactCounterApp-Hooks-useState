import React from "react";

function App() {
  var [counter, setState] = React.useState(0);

  function increase() {
    setState(counter + 1);
  }

  function decrease() {
    setState(counter - 1);
  }

  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
