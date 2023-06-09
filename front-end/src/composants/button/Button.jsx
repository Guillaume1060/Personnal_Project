import classes from "./button.module.scss"


const Button = (props) => {
    return (
        <div className={classes.ctn} >
            <button className={classes.btn} onClick={props.fn}>{props.text}</button>
        </div>
    )
}


export default Button