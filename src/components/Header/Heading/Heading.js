import Button from "../../Button/Button"; 
import Logo from "./headerLogo.svg"; 
import classes from "./Heading.module.css"; 

const Heading = () => {
  return (
    <div className={classes.heading}>
      <img className={classes.logo} src={Logo} alt="Huddle website logo"/>
      <Button color="transparent">Try it Free</Button>
    </div>
  )
}

export default Heading
