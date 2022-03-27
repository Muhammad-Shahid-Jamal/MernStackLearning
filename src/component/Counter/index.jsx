import PropTypes from "prop-types";
import style from "./style.module.css";

// const Counter = React.forwardRef(({count},ref)=>{
//     return(
//         <div className={style.counter} ref={ref}>
//             count:{count}
//         </div>
//     )
// });

const Counter = ({count})=>{
    return(
        <div className={style.counter}>
            count:{count}
        </div>
    )
}
Counter.propTypes = {
    count:PropTypes.number.isRequired
}
export default Counter;
