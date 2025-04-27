import './App.css'
import './Topbar.css'
import './Navbar.css'
import './Widget.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Widget from './components/Widget'


import jsondata from '../external/data.json'
import { useState } from 'react'
import React from 'react'

export const Context = React.createContext([]);

function App() {

  const [isAllButtonActive,setAllButtonStatus] = useState(true);
  const [isActiveButtonActive,setActiveButtonStatus] = useState(false);
  const [isInactiveButtonActive,setInactiveButtonStatus] = useState(false);
  const [widgetData,setWidgetData] = useState(jsondata);
  const [isDarkTheme,setDarkTheme] = useState(true);

  console.log("widget data:",widgetData);

  return (
    <>
        <Context.Provider value={[isAllButtonActive,setAllButtonStatus,isActiveButtonActive,setActiveButtonStatus,isInactiveButtonActive,setInactiveButtonStatus,widgetData,setWidgetData,isDarkTheme,setDarkTheme]}>
        <Topbar/>
        <Navbar/>
        <div className="widgets-container">
        {widgetData.map(({logo,name,description,isActive},i)=>{


      if(isAllButtonActive)
      {
        return <Widget key={i} logo={logo} name={name} description={description} isActive={isActive}/>
      }
      else if(isActiveButtonActive)
      {
            if(isActive)
              return <Widget key={i} logo={logo} name={name} description={description} isActive={isActive}/>
      }
      else if(isInactiveButtonActive)
     {
          if(!isActive)
            return <Widget key={i} logo={logo} name={name} description={description} isActive={isActive}/>
     }

        })}
        </div>
        </Context.Provider>

    </>
  )
}

export default App
