import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const Title = () => (
  <>
    <h1 className="title">Welcome to JSX</h1>
  </>
);

const Footer = () => <p>Something should be here in the footer</p>;

const HeaderComponent = () => (
  <>
    <Title />
    <h1 className="head" tabIndex="5">
      Heading should be in Bold
    </h1>
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
