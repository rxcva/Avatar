import React  from "react";  
 
export function Avatar(props) {
    return (
      <div > 
          
          
       
      <img src={props.avatar} style={{width:'60px', height:'60px',borderRadius:'50%'}} />  
      <h6>  {props.fullname}</h6>
       

        
      </div>
    );
  }