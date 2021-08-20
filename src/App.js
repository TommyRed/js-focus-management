import React from "react";

export default function App() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const listener = () => {
      console.log("element clicked");
    };

    if (ref) {
      console.log("ref is defined");
      ref.current.addEventListener("click", listener);
    }
  }, [ref]);

  return (
    <div className="App" ref={ref}>
      <h1>Hello CodeSandbox v.1.0</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input />
      <input />
    </div>
  );
}
