import React,{useState} from "react";
import Practice from "./component/Practice";
import TextForm from "./component/text"
import Alert from "./component/Alert";
import About from "./component/About";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null)
  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      typ : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const togalmode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enebled","success")
    }else{
      setmode("light")
      document.body.style.backgroundColor = "white"; 
      showAlert("light mode has been Enebled","success")
    }
  }

  const toggelmode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "yellow";
      showAlert("yellow mode has been Enebled","success")
    }else{
      setmode("light")
      document.body.style.backgroundColor = "white"; 
      showAlert("light mode has been Enebled","success")
    }
  }

  const toggelsmode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "pink";
      showAlert("red mode has been Enebled","success")
      // document.title = "Textutils- Dark mode"
      setTimeout(() => {
        document.title = "Textutils- Dark mode"
      }, 100);
    }else{
      setmode("light")
      document.body.style.backgroundColor = "white"; 
      showAlert("light mode has been Enebled","success")
      // document.title = "Textutils- ligh mode"
      setInterval(() => {
        document.title = "Textutils- ligh mode"
      }, 100);
    }
  }
  return (
    <>
    {/* <Route> */}
      <Practice  mode={mode} togalmode={togalmode} toggelmode={toggelmode} toggelsmode={toggelsmode}/>  
      <Alert alert ={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text"/>
         <About/>
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text"/>
          </Route>
        </Switch> */}
        </div>
        {/* </Route> */}
      
    </>
  );
}

export default App;
