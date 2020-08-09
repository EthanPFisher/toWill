// Why do we need to import "React" and yet we aren't referencing our "React" import anywhere in this file?
// React must be in the scope anytime we are using JSX.

// import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    // Why do we need to wrap nested components/JSX with an enclosing tag?
    // With JSX, we can only return one element, we can't return siblings.

    <div className="container">
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer />
    </div>
  );
}

// What is the difference between "export default App" and "export { App }"
// We can only use export default once, but we can use export as many times as we want. However, in react, it is best practice to use export default for components. 
// When using export { App }, this is called a named export. Therefore the import must be the same name as the export. (e.g. import { App } from "./App")

// https://stackoverflow.com/questions/33611812/javascript-es6-export-const-vs-export-default?lq=1


// export { App };
export default App;

