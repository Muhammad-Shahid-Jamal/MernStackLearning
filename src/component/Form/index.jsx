import style from "./style.module.css";
import FormGroup from "../FormGroup";
import { useEffect, useState } from "react";

const Form = ({title,fields=[],submit})=>{
    return(
        <form className={style._form} onSubmit={submit}>
            <h3>{title}</h3>
            {fields.map((field,index)=>{
                return <FormGroup key={index+"_f-group"} {...field}/>
            })}
            <button type="submit">Login</button>
        </form>
    );
};

export default Form;