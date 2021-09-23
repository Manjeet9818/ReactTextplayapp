import React from 'react'

export default function Alert(props) {
    
    // const capatilized=(word)=>{
    //     const lower=word.toLowereCase()
    //     return lower.charAt(0).toUpperCase()+lower.slice(1)
    // }
    
    
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.Success} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong>:{props.alert.msg}
  

</div>
        </div>
    )
}
