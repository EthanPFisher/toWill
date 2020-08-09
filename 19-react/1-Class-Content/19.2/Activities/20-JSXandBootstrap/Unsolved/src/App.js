// Why do we need to import "React" and yet we aren't referencing our "React" import anywhere in this file?

// import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

function App() {
  return (
    // Why do we need to wrap nested components/html with an enclosing tag?

    <div className="container">
      <Navbar />
      <Jumbotron />
      <Card />
      
      <footer class="page-footer font-small blue pt-4">
        <div class="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div>
      </footer>
      
    </div>
  );
}

// What is the difference between "export default App" and "export { App }"

// export { App };
export default App;
