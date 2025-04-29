import './App.css'
import './Topbar.css'
import './Navbar.css'
import './Widget.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Widget from './components/Widget'


import jsondata from '../external/data.json'
import { Dispatch, SetStateAction, useState } from 'react'
import React from 'react'

type AppContextType = {
 isAllButtonActive:boolean;
 setAllButtonStatus:Dispatch<SetStateAction<boolean>>;
 isActiveButtonActive:boolean;
 setActiveButtonStatus:Dispatch<SetStateAction<boolean>>;
 isInactiveButtonActive:boolean;
 setInactiveButtonStatus:Dispatch<SetStateAction<boolean>>;
 widgetData:Array<{ logo: string; name: string; description: string; isActive: boolean;}>;
 setWidgetData:Dispatch<SetStateAction<Array<{ logo: string; name: string; description: string; isActive: boolean;}>>>;
 isDarkTheme:boolean;
 setDarkTheme:Dispatch<SetStateAction<boolean>>;

}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = React.createContext<AppContextType>({isAllButtonActive:true,setAllButtonStatus:()=>{},isActiveButtonActive:false,setActiveButtonStatus:()=>{},isInactiveButtonActive:false,setInactiveButtonStatus:()=>{},widgetData:[],setWidgetData:()=>{},isDarkTheme:true,setDarkTheme:()=>{}});

function App() {

  const [isAllButtonActive,setAllButtonStatus] = useState(true);
  const [isActiveButtonActive,setActiveButtonStatus] = useState(false);
  const [isInactiveButtonActive,setInactiveButtonStatus] = useState(false);
  const [widgetData,setWidgetData] = useState(jsondata);
  const [isDarkTheme,setDarkTheme] = useState(true);

  console.log("widget data:",widgetData);

  return (
    <>
        <Context.Provider value={{isAllButtonActive,setAllButtonStatus,isActiveButtonActive,setActiveButtonStatus,isInactiveButtonActive,setInactiveButtonStatus,widgetData,setWidgetData,isDarkTheme,setDarkTheme}}>
        <Topbar/>
        <Navbar/>
        <div className="widgets-container">
        {widgetData.map(({logo,name,description,isActive},i)=>{


      if(isAllButtonActive)
      {
        return <Widget key={i} logo={logo} name={name} description={description} isActive={isActive} keyToggle={i}/>
      }
      else if(isActiveButtonActive)
      {
            if(isActive)
              return <Widget key={i} logo={logo} name={name} description={description} isActive={isActive} keyToggle={i}/>
      }
      else if(isInactiveButtonActive)
     {
          if(!isActive)
            return <Widget key={i} logo={logo} name={name} description={description} isActive={isActive} keyToggle={i}/>
     }

        })}
        </div>
        </Context.Provider>

    </>
  )
}

export default App
