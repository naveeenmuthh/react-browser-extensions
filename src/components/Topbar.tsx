
import { useContext } from "react";
import { Context } from "../App";

import lightThemeLogo from "../../public/images/icon-sun.svg";
import darkThemeLogo from "../../public/images/icon-moon.svg"
import DarkLightSVG from "../svg/DarkLightSVG";

import {changeTheme} from "../functions/changeTheme"

const Topbar = () => {

  const {isDarkTheme,setDarkTheme} = useContext(Context);

  console.log("isDarkTheme:",isDarkTheme,setDarkTheme);

  const toggleTheme = ()=>{

    setDarkTheme(!isDarkTheme)

      if(isDarkTheme){
           changeTheme("hsl(226, 11%, 37%)","hsl(0, 0%, 93%)","hsl(226, 25%, 17%)","hsl(0, 0%, 93%)","hsl(0, 0%, 93%)")
      }
      else{
        changeTheme("hsl(226, 25%, 17%)","hsl(225, 23%, 24%)","hsl(200, 60%, 99%)","hsl(226, 11%, 37%)","hsl(226, 11%, 37%)")
      }
  }

  console.log("isDarkTheme:",isDarkTheme);

  return (
    <div className="topbar">
      <DarkLightSVG theme={isDarkTheme?"#ffff":"hsl(226, 25%, 17%)"}/>
      <button className="toggle-theme" onClick={toggleTheme}><img src={isDarkTheme?lightThemeLogo:darkThemeLogo} alt="ToggleTheme" /></button>
    </div>
  )
}

export default Topbar
