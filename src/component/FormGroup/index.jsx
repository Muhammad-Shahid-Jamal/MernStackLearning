import PropTypes from "prop-types";
import style from "./style.module.css";

const FormGroup = (props)=>{
    const {label,onChange} = props;
    return(
        <div className={style.form_group}>
          <label>{label}</label>
          <input {...props} onChange={e=>onChange(e.target.value)}/>
        </div>
    );
};

FormGroup.propTypes = {
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}
export default FormGroup;