import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");     /*Enter the text hear*/

  const handleupperclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert ("converted to uppercase" , "success");
  };

  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert ("converted to lowercase" , "success");
  };

  const handleclearclick = () => {
    // let newText = text.toLowerCase();
    setText(" ");
    props.showAlert ("Text is clear" , "success");
  };

  const handlesentanceclick = () => {
    let newText = text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText);
    props.showAlert ("converted to 1st letter uppercase" , "success");
  };

  const handlesentancelclick = () => {
    let newText = text.charAt(0).toLowerCase()+text.slice(1);
    setText(newText);
    props.showAlert ("converted to 1st letter lowercase" , "success");
  };

  const handlechange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <>
    <div className="container"  style = {{color : props.mode === "dark" ? "white" : "black"}}>
      <h2 className="my-3">{props.heading}</h2>
      <div className="mb-3"  >
        {/* <label for="text Box" className="form-label">Example textarea</label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handlechange}
          // style = {{backgroundColor: "grey"}}
          style={{ backgroundColor : props.mode === "dark" ? "#13466e" : "white"}}
          id="mybox"
          rows="8"
          
       ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupperclick}>
        Convert Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>
        Convert Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>
        Clear text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlesentanceclick}>
        sentance case
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlesentancelclick}>
        sentance case2
      </button>

      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes read</p>
        {/* 0.008 for words to read * number of words (125words for 1 minutes)*/}
        <h1>previwe</h1>
        <b>{text.length>0? text:"Nothing to previwe"}</b>
      </div>
      </div>
    </>
  );
}

// export default TextForm;
