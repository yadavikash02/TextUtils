import './App.css';
import About from './component/About';
import Header from './component/Header';
import TextForm from './component/TextForm';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React,{useState} from 'react';
import Alerts from './component/Alerts';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(Message,type)=>{
    setAlert({
      Message:Message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const[mode,setMode]=useState('light');
  const changeMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("successfully enable light mode","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("successfully enable Dark mode","success");
    }
  }
  return (
   <BrowserRouter>
    <Header title="MLOVER" mode={mode} toggle={changeMode}/>
    <Alerts alert={alert}></Alerts>
    {/* <div className="container">
    <TextForm heading="Enter your text for analyze" mode={mode}/>
    </div> */}
    <Routes>
      <Route path="/TextUtils" element={<div className="container">
    <TextForm heading="Enter your text for analyze" mode={mode} showAlert={showAlert}/> 
    </div>}/>
    <Route path="/" element={<div className="container">
    <TextForm heading="Enter your text for analyze" mode={mode} showAlert={showAlert}/> 
    </div>}/>
      <Route path="/about" element={<About heading="About Us" mode={mode}></About>}/>

    {/* <About />  */}
    
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
