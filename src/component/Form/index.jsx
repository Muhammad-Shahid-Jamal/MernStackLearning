import style from "./style.module.css";
import FormGroup from "../FormGroup";
import { useEffect, useState } from "react";
const Form = ({title})=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    useEffect(()=>{
        console.log(email,password);
    },[email,password]);
    return(
        <form className={style._form}>
            <h3>{title}</h3>
            <FormGroup label="Email" type="email" onChange={(input)=>{
                setEmail(input);
            }} />
            <FormGroup label="Password" type="password" onChange={(input)=>{
                setPassword(input)
            }} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Form;