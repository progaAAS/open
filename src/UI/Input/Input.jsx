import React from "react";
import s from "./Input.module.css";
import {ReactComponent as Delete} from '../../img/delete.svg';

const Input = ({children, name, value, inputChange, placeholder, visibleBtnDelete, deleteStrChange, indexfiltre, ...props}) => {
    
    return(
        <>
            <input name={name} value={value} onChange={(e)=> inputChange(e, indexfiltre)} placeholder={placeholder} {...props} className={s.button}/>
            {visibleBtnDelete ? <Delete className={s.delete} onClick={(e)=> deleteStrChange(e, indexfiltre)}/> : null}
        </>
    )
}
export default Input;