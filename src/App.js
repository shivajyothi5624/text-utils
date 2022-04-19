import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  const [alert, setalert] = useState('')

  const showalert=(type,msg)=>{
      setalert({
        message:msg,
        type:type
      }
     
      )
      setTimeout(() => {
        setalert('')
      }, 1500)
  }
  const [mode, setmode] = useState("light")
  const toggleMode = ()=>{
    if (mode == 'dark')
    {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert('success',"changed to normal mode")
    }
    else
    {
      setmode('dark');
      document.body.style.backgroundColor = '#0B0431'
      showalert('success',"changed to dark mode")

    }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode = {toggleMode} ></Navbar>
    <Alert alert={alert}></Alert>
        <Routes>
    <Route exact path="/" element={
      <Textarea mode={mode} showalert={showalert}
       />}/>

          <Route exact path="/home" element={<Textarea mode={mode} showalert={showalert} />}/>
       {  /* <Route exact path="/about" element={<About/>}/>*/}
        </Routes>
    </Router>
    </>
  );
}

export default App;
