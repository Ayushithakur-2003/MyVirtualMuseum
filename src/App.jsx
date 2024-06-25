import "./App.css";
import SideBar from "./components/SideBar";
import ContentGrid from "./components/ContentGrid";
import NavBar from "./components/NavBar";
import Myanimatedlogo from "./Myanimatedlogo";

const App = () => {
  return(
   <>
    <NavBar/>
    <div class="flex bg-bkg">
      <SideBar/>
        <ContentGrid />   
    </div>
    </>
  );
};

export default App;