import React from 'react'
import classes from './Input.module.scss'

const Input = React.forwardRef((props,ref) => {
    return (
        <div className={classes.input}>
            <label className={classes.label} htmlFor={props.input.id}>{props.label}</label>
            <input className={classes.input} ref={ref} {...props.input}/>
        </div> 
)})

export default Input