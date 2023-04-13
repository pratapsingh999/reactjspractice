import React,{useState} from "react";
import Practice from "./component/Practice";
import TextForm from "./component/text"
// import About from "./component/About";

function App() {
  const [mode, setmode] = useState("light");
  const togalmode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "gray";
    }else{
      setmode("light")
      document.body.style.backgroundColor = "white"; 
    }
  }
  return (
    <>
      <Practice  mode={mode} togalmode={togalmode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text"/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
