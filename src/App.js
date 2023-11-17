import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light"); // wheather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enabled", "success");
      document.title = "Textutils - Dark Mode";

      // setInterval(() => {
      //   document.title = 'Textutils is Amazing Mode';
      // },2000)

      // setInterval(() => {
      //   document.title = 'Install Textutils Now';
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title="Textutils" About="About"/> */}
      {/* <Navbar/>  */}
      <BrowserRouter>
        
        <Navbar title="Textutils" mode={mode} toggleMode={handleMode} />
        <Alert alert={alert} />
        
        <div className="container my-3">

        {/* /users --> Component 1
            /users/home --> Component 2 */}
          
            <Routes>
            <Route exact path="/about" element={<About />}>
              
              </Route>
            
            <Route exact path="/home" element={<TextForm
                showAlert={showAlert}
                heading="Enter the Text to Analyze below :"
                heading2="Your Text Summary"
                heading3="Preview"
                mode={mode}
              />}>
              
            </Route>
            </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

