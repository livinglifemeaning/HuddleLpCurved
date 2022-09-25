import { createContext } from "react";
import useMediaQuery from "./useMediaQuery";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer"; 
export const MediaContext = createContext(); 

function App() {
  const isDesktop = useMediaQuery("(min-width: 750px)"); 
 
  return (
    <MediaContext.Provider value={isDesktop}> 
    <main>
      <Header/>
      <Body/>
      <Footer/>
    </main>
    </MediaContext.Provider> 
  );
}

export default App;

