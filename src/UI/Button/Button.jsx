import React from "react";
import s from "./Button.module.css";

const Button = ({children, text, ...props}) => {
    
  
    return(
        <button {...props} className={s.button}>{text}</button>
    )
}
export default Button;