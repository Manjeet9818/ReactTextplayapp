import React, { useState } from 'react'

export default function About(props) {

  let mystyleSheet={
    color : props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#383f4a':'white',
    border: '2px solid',
    borderColor: props.mode==='dark'?'white':'#383f4a'
  }



  // const[mystyleSheet,setmyStyle]=useState(
  
  // {
  //   color: 'black',
  //   backgroundColor:'white'
  // })

  // const [btnText,setbtnText]=useState( "Enable Dark Mode")


  // const  toggleStyle = ()=>{
  //   if (mystyleSheet.color==='black')
  //   {
  //     setmyStyle({color: 'white',
  //     backgroundColor:'black'
     

  //     })
  //     setbtnText("Enable black mode")
  //   }
     
  // else 
  // {
  //     setmyStyle({
  //       color: 'black',
  //       backgroundColor:'white'
    
  //     })
  //     setbtnText("Enable light mode")
  //     }
  // }
  
  return (
        <div className="container" my-3 style={{color : props.mode==='dark'?'white':'black'}}>
<h1 className=" " my-3>About Us</h1>            
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyleSheet} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyleSheet}>
        Textutils give you a way to Analysis your Text quickly and efficiently .but it word count , character count or ..
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyleSheet}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyleSheet} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyleSheet}>
        Textutiles is a free character counter tool that provide instant character count and word count statics for a given text.Textutiles report the the number of word and character thus it is suitable for writing btext with word / character limit
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyleSheet}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyleSheet} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong> Broweser compatibility</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software vwork in any web broweser such as chrome ,firefox, internet explorer.it suit to count character in facebook ....blog etc.
      </div>
    </div>
  </div>
</div>



{/* <div className="container my-3">

<button type="button" onClick={toggleStyle} class="btn btn-primary">{btnText}</button>
</div> */}
        </div>
    )
}
