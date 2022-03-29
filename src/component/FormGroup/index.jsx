import PropTypes from "prop-types";
import style from "./style.module.css";

const FormGroup = ({label,type,onChange})=>{
    return(
        <div className={style.form_group}>
          <label>{label}</label>
          <input type={type} onChange={e=>onChange(e.target.value)}/>
        </div>
    );
};

FormGroup.propTypes = {
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}
export default FormGroup;