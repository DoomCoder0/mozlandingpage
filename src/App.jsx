import React from "react";
import Content from "./Content"; // Ensure this path is correct
import Component2 from "./Component2"; // Ensure this path is correct
import FrameComponent from "./FrameComponent"; // Ensure this path is correct
import FrameComponent1 from "./FrameComponent1"; // Ensure this path is correct
import FrameComponent2 from "./FrameComponent2"; // Ensure this path is correct

const App = () => {
  return (
    <div className="app-container">
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent />
      <Content />
      <Component2
        className="my-custom-class"
        propMarginLeft="20px"
        text="Some Text"
        content="/path-to-your-image.png"
      />
    </div>
  );
};

export default App;
