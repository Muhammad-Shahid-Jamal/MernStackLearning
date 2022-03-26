import PropTypes from "prop-types";
import style from "./style.module.css";
const Title = ({title})=>{
    return(
        <h1 className={style.counter}>{title}</h1>
    );
};

Title.propTypes = {
    title:PropTypes.string.isRequired
};
export default Title