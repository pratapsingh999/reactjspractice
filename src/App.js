import React, { useState } from "react";
// import {routes , router} from "react-router-dom"
// import {Route, Switch} from "react-router-dom";
// import { Route } from "react-router-dom";
import Practice from "./component/Practice";
import TextForm from "./component/text";
import Alert from "./component/Alert";
import About from "./component/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClassess = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
  };

  const PratapSingh = (cls) => {
    removeBodyClassess();
    document.body.classList.add("bg-" + cls);

    // if (mode === "light") {
    //   setmode("dark");
    //   document.body.style.backgroundColor = "#042743";
    //   showAlert("Dark mode has been Enebled", "success");
    // } else {
    //   setmode("light");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("light mode has been Enebled", "success");
    // }
  };

 

  const togalmode = () => {
    
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enebled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been Enebled", "success");
    }
  };

  const toggelmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "yellow";
      showAlert("yellow mode has been Enebled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been Enebled", "success");
    }
  };

  const toggelsmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "pink";
      showAlert("red mode has been Enebled", "success");
      // document.title = "Textutils- Dark mode"
      setTimeout(() => {
        document.title = "Textutils- Dark mode";
      }, 100);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been Enebled", "success");
      // document.title = "Textutils- ligh mode"
      setInterval(() => {
        document.title = "Textutils- ligh mode";
      }, 100);
    }
  };
  return (
    <>
      <Router>
      <Practice
        mode={mode}
        PratapSingh = {PratapSingh}
        togalmode={togalmode}
        toggelmode={toggelmode}
        toggelsmode={toggelsmode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <TextForm
          showAlert={showAlert}
          heading="Try TextUtiles - Word counter, Character Counter, Remove extra spaces"
          mode={mode}
        />
        <About mode={mode} /> */}

        <Switch>
          <Route path="/about" exact>
            <About  mode={mode} />
          </Route >
          <Route path="/" exact>
          <TextForm showAlert={showAlert} heading="Try TextUtiles - Word counter, Character Counter, Remove extra spaces"  mode={mode}/>
          </Route>
        </Switch> 
      </div>
      </Router>
    </>
  );
}

export default App;
