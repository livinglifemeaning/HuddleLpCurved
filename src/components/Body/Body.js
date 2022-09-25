import FlexSection from "./FlexSection/FlexSection"; 
import Button from "../Button/Button";
import sectionsData from "./sectionsData.json"
import classes from "./Body.module.css"; 
import Communities from "./icon-communities.svg"; 
import Messages from "./icon-messages.svg"; 

const Body = () => {
  return (
    <div className={classes.body}>
      <div className={classes.statBox}>
        <div className={classes.stat}>
          <img src={Communities} alt=""/> 
          <p className={classes.statNum}>1.4k+</p>
          <p className={classes.statDesc}>Communities Formed</p>
        </div>
        <div className={classes.stat}>
          <img src={Messages} alt=""/> 
          <p className={classes.statNum}>2.7m+</p>
          <p className={classes.statDesc}>Messages Sent</p>
        </div>
      </div>
      
      <div className={classes.sectionsBox}> 
      {sectionsData.map(section => <FlexSection title={section.title} paragraph={section.paragraph} index={section.index} alt={section.alt}/>)}
      </div>
      <div className={classes.readyBox}>
        <h2>Ready to Build Your Community?</h2>
        <Button color="dark">Get Started For Free</Button>
      </div>
    </div>
  )
}

export default Body
