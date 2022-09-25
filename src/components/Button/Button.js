import classes from "./Button.module.css"; 

const Button = (props) => {
  return (
    <div className={`${classes.btn} ${props.color === "transparent" ? classes.transparent : classes.filled}`}>
      {props.children} 
    </div>
  )
}

export default Button
