import { useContext } from "react";
import { MediaContext } from "../../../App";
import Grow from "./illustration-grow-together.svg"; 
import Conversations from "./flowing.svg"; 
import Users from "./illustration-your-users.svg"; 
import classes from "./FlexSection.module.css"; 
import GrowTopDesktop from "./grow-top-desktop.svg"; 
import GrowTopMobile from "./grow-top-mobile.svg"; 
import GrowBottomDesktop from "./grow-bottom-desktop.svg"; 
import GrowBottomMobile from "./grow-bottom-mobile.svg"; 
import UsersTopDesktop from "./users-top-desktop.svg"; 
import UsersTopMobile from "./users-top-mobile.svg"; 
import UsersBottomDesktop from "./users-bottom-desktop.svg"; 
import UsersBottomMobile from "./users-bottom-mobile.svg"; 

const IMAGES = [Grow, Conversations, Users]

const FlexSection = ({title, paragraph, index, alt}) => {
  const isDesktop = useContext(MediaContext); 
  let topAccent;
  let bottomAccent; 
  if(isDesktop && index === 0){
    topAccent = GrowTopDesktop 
    bottomAccent = GrowBottomDesktop
  } else if (!isDesktop && index === 0){
    topAccent = GrowTopMobile; 
    bottomAccent = GrowBottomMobile; 
  } else if(isDesktop && index === 2){
    topAccent = UsersTopDesktop; 
    bottomAccent = UsersBottomDesktop; 
  } else if(!isDesktop && index ===2){
    topAccent = UsersTopMobile; 
    bottomAccent = UsersBottomMobile; 
  }
  
  return (
    <div className={classes.section}>
      <div className={classes.textBox}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.desc}>{paragraph}</p>
      </div>
      <div className={classes.imageBox}>
        <img src={IMAGES[index]} alt={alt}/>
      </div>
      {(index === 0 || index === 2) && <img src={topAccent} alt="" className={classes.topAccent}/>} 
      {(index === 0 || index === 2) && <img src={bottomAccent} alt="" className={`${classes.bottomAccent} ${index === 2 && classes.user}`}/>}
    </div>
  )
}

export default FlexSection
