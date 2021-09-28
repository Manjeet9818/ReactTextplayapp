
import './App.css';
import Txtform from './components/Txtform';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react/cjs/react.development';

import {
  BrowserRouter as Router,
  Switch,
  Route
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

const removeBodyclasses= ()=>
{
document.body.classList.remove('bg-light')
document.body.classList.remove('bg-dark')
document.body.classList.remove('bg-warning')
document.body.classList.remove('bg-danger')
document.body.classList.remove('bg-success')
document.body.classList.remove('bg-light')
document.body.classList.remove('bg-dark')

}


  const toggleMode=(cls)=>{
   removeBodyclasses()
    console.log("cls")
document.body.classList.add('bg-'+cls)
    if (mode==='light')
  {  
setMode('dark')
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

<div className="container" my-3>
 <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/"> 
            
<Txtform showAlert={showAlert}  mode={mode} heading="Try Textutils-Word Counter, Character Counter, Removing extra spaces, copy text"/>

          </Route>
        </Switch>

  {/* <About my-3/> */}
</div>
</Router>

</>
  );
}

export default App;
