import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Images from "./Images";

function App() {
  const [showImage, setShowImage] = useState<boolean>(false);
  return (
    <div className="container">
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>
      <pre>Pre</pre>
      <code>Code</code>
      <pre>
        <code>Code in pre</code>
      </pre>
      <p className="lead">Open an image by clickling</p>
      <div className="btn-group btn-group-vertical">
        <button
          className="btn btn-primary mb-2"
          type="button"
          onClick={() => setShowImage(!showImage)}
        >
          Open image
        </button>
      </div>
      {showImage && <Images />}
      <div className="jumbotron">this is riveting</div>
    </div>
  );
}

export default App;
