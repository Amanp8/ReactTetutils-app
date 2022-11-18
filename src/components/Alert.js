import React from 'react'

function Alert(props) {
    // const captilized =(word)=>{
    //     const lower= word.toLowercase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
   props.alert&& <div className="alert alert-success alert-dismissible fade show" role="alert">
   <strong>{props.alert.type}</strong>:{props.alert.msg}
  
</div>
  )
}

export default Alert