import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("Enter the text hear");

  const handleupperclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleclearclick = () => {
    // let newText = text.toLowerCase();
    setText(" ");
  };

  const handlesentanceclick = () => {
    let newText = text.charAt(0).toUpperCase();
    setText(newText);
  };

  const handlesentancelclick = () => {
    let newText = text.charAt(0).toLowerCase();
    setText(newText);
  };

  const handlechange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <>
    <div className="container"  style={{color : props.mode === "dark" ? "white" : "black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3"  >
        {/* <label for="text Box" className="form-label">Example textarea</label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handlechange}
          // style={{ backgroundColor : props.mode === "dark" ? "grey" : "white"}}
          style={{ backgroundColor : props.mode === "dark" ? "grey" : "white"}}
          id="flexSwitchCheckDefault"
          rows="10"
          
       ></textarea>
      </div>
      <button className="btn btn-primary mx-5" onClick={handleupperclick}>
        Convert Uppercase
      </button>
      <button className="btn btn-primary mx-5" onClick={handleloclick}>
        Convert Lowercase
      </button>
      <button className="btn btn-primary mx-5" onClick={handleclearclick}>
        Clear text
      </button>
      <button className="btn btn-primary mx-5" onClick={handlesentanceclick}>
        sentance case
      </button>
      <button className="btn btn-primary mx-5" onClick={handlesentancelclick}>
        sentance case2
      </button>

      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        {/* 0.008 for words to read * number of words (125words for 1 minutes)*/}
        <h3>previwe</h3>
        <b>{text}</b>
      </div>
      </div>
    </>
  );
}

// export default TextForm;
