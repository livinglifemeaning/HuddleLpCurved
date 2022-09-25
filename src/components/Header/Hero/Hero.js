import Button from "../../Button/Button"; 
import Mockups from "./illustration-mockups.svg"; 
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.textBox}>
      <h1 className={classes.title}>Build The Community Your Fans Will Love</h1>
      <p className={classes.desc}>
        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
      </p>
      <Button color="dark">Get Started For Free</Button>
      </div>
      <div className={classes.imageBox}>
        <img src={Mockups} alt="Desktop and mobile mockups" />
      </div>
    </div>
  );
};

export default Hero;
