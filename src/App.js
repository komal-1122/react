import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Cards from './components/Cards';
import Alert from './components/Alert';
import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter,  
} from 'react-router-dom';


function App() {
  const [alert, setAlert]=useState(null)
  const showAlert=(message, type)=>
  {
       setAlert({
        message:message,
        type:type})
        setTimeout(() => {
          setAlert(null)
        }, 2000);
      }
  const [mode, setmode]=useState('light')
  const toggleMode=()=>{
    if (mode==='light') {
     setmode('dark') ;
     document.body.style.backgroundColor ='gray'
     showAlert("Dark mode is Enable","Sucsess")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode is Enable","Sucsess")
    }

  }
  return (
 <>
        <Navbar title="Check Text" TextLink="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} heading="Write the text to Analyze:"/>
        {/* <Route exact path="/about" element={<About />} /> */}
 {/* <BrowserRouter>
    <Routes>
      <Route exactpath="/card" element={<Cards  mode={mode} toggleMode={toggleMode} />} />
    </Routes>
  </BrowserRouter> */}
  

 </>
  );
}

export default App;
