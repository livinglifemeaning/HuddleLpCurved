import { useContext } from "react";
import { MediaContext } from "../../App";
import Contacts from "./Contacts/Contacts"; 
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar"; 
import Logo from "./footerLogo.svg"; 
import AccentDesktop from "./footer-accent-desktop.svg"; 
import AccentMobile from "./footer-accent-mobile.svg"; 
import classes from "./Footer.module.css"; 

const Footer = () => {
  const isDesktop = useContext(MediaContext); 
  return (
    <div className={classes.footer}>
      <div className={classes.newsletter}>
        <p className={classes.title}>Newsletter</p>
        <p>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
        <input type="textarea" />
        <div className={classes.btn}>Subscribe</div>
      </div>
      <div className={classes.infoBox}>
      <img className={classes.logo} src={Logo} alt="Huddle website logo" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
        <Contacts/>
        <SocialMediaBar/>
        <img src={isDesktop ? AccentDesktop : AccentMobile} alt="" className={classes.accent}/>
        </div>
    </div>
  )
}

export default Footer
