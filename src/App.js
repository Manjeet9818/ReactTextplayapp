
import './App.css';
import Txtform from './components/Txtform';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react/cjs/react.development';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode ,setMode]=useState('dark') //wheather dark mode is enable or not
const [alert,setAlert]=useState("null");
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type 
})
// setTimeout(()=>{
// setAlert=("null")
// },3000)
}




  const toggleMode=()=>{

    if (mode==='light')
  {  setMode('dark')
  document.body.style.backgroundColor="rgb(25 79 132)"
showAlert("dark mode has enable","success")
}
else
{
setMode('light')
document.body.style.backgroundColor="#f8f9fa"
showAlert("light mode has enable","success")
} 
} 
  
  return (
    
    <>

    <Router>
<Navbar title="textutils" fun="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

{/*   */}
<div className="container" my-3>

<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            
<Txtform showAlert={showAlert} heading="Enter the text to analyize"/>

          </Route>
        </Switch>

  {/* <About my-3/> */}
</div>
</Router>

</>
  );
}

export default App;
