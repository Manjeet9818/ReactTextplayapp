
import React, {useState} from 'react'

export default function Txtform(props) 
{
    const [text , setText] = useState('Enter text here');
    const handleupClick=()=>{
        console.log("uppercase was clicked" +text)
        
        let newtext=text.toUpperCase();
        setText(newtext)

    props.showAlert("you changed word in uppercase","success")
    };
        const handleonChange=(event)=>{
            console.log("changed in text clicked")
           setText( event.target.value)

        }

 
        const handleloClick=()=>{
            console.log("lowercase was clicked" +text)
            
            let newtext1=text.toLowerCase();
            setText(newtext1);
            props.showAlert("you changed word in lowercase","success")
document.title="textutils-Lowercase change"
        } 

        const handletoCopy=()=>{
            console.log("remove space is clicked")
           let newtext2=document.getElementById("mybox");
            newtext2.select();
            newtext2.setSelectionRange(0,99999);
            navigator.clipboard.writeText(newtext2.value) 
        }
const handleExtraSpaces=()=>
{
    let newtext3=text.split(/[  ]+/);
    setText(newtext3.join(" "))

}




        // Declare a new state variable, which we'll call "text"
 
 
    // //wrong way change the state
    // text="new text"

    //correct way to change the state
    // setText("new Text");

    return (
        <>
        <div className={`"container" style={{color:props.mode==='dark'?'white':'rgb(195 179 179)'}}`}>
 <h1>{props.heading}</h1>
<div className="mb-3" my-2>
    <textarea className="form-control" style={{backgroundcolor:props.mode==='light'?'rgb(195 179 179)':'light'}} onChange={handleonChange} value= {text} id="mybox" rows="8"></textarea>
<button className="btn-primary  my-2 "onClick={handleupClick}   >Convert to upper case</button>
<button className="btn-primary my-2 mx-3" onClick={handleloClick}   >Convert to lower  case</button>
<button className="btn-primary my-2 mx-3" onClick={handletoCopy}   >copy</button>
<button className="btn-primary my-2 mx-3" onClick={handleExtraSpaces} >remove extra spaces  </button>



</div>
            
        </div>

        <div className="container" style={{color:props.mode==='dark'?"white":"black"}}>

            <h1>your text summary</h1>
            <p>{text.split(" ").length} word,{text.length} character</p>
            <p>{0.008*text.split(" ").length} Minute read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"Enter something in textarea"}</p>
        </div>

        </>
    )
}
 