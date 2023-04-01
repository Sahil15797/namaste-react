/*
 *   <div id="parent">
 *       <div id="child">
 *           <h1>I am a H1 Tag<h1>
 *           <h2>I am a H2 Tag<h2>
 *       <div>
 *       <div id="child2">
 *           <h1>I am a H1 Tag<h1>
 *           <h2>I am a H2 Tag<h2>
 *       <div>
 *   <div>
 *   ReactElement(object) => HTML (Browser Understands)
 */ 

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a H1 Tag"),
    React.createElement("h2", {}, "I am a H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a H1 Tag"),
    React.createElement("h2", {}, "I am a H2 Tag"),
  ]),
]);

//JSX

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
