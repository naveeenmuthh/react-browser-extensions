import { useContext } from "react"
import { Context } from "../App";
import { activeStatusButtonColor } from "../functions/changeTheme";


const Navbar = () => {

  const [isAllButtonActive,setAllButtonStatus,isActiveButtonActive,setActiveButtonStatus,isInactiveButtonActive,setInactiveButtonStatus,widgetData,setWidgetData,isDarkTheme,setDarkTheme] = useContext(Context);

console.log("Context-Object:",Context);

console.log(isAllButtonActive,isActiveButtonActive,isInactiveButtonActive);


const handleClick = (btnType:string)=>{

// activeStatusButtonColor("hsl(3, 71%, 56%)");

if(btnType === "All")
 {
  setAllButtonStatus(true)
  setInactiveButtonStatus(false)
  setActiveButtonStatus(false)
  console.log("All",isAllButtonActive,isActiveButtonActive,isInactiveButtonActive);
 }
else if(btnType === "Inactive")
{
  setAllButtonStatus(false)
  setInactiveButtonStatus(true)
  setActiveButtonStatus(false)
  console.log("Inactive",isAllButtonActive,isActiveButtonActive,isInactiveButtonActive);
}
else if(btnType === "Active")
{
  setAllButtonStatus(false)
  setInactiveButtonStatus(false)
  setActiveButtonStatus(true)
  console.log("Active",isAllButtonActive,isActiveButtonActive,isInactiveButtonActive);
}

}

  return (
    <div className="navbar">
     <div className={isDarkTheme?"":"navbar-title"}>
      <h1>Extension List</h1>
     </div>
     <div className="navbar-toggle-btns">
      <button className="navbar-toggle-btn"  style={{backgroundColor:isAllButtonActive?"hsl(3, 86%, 64%)":""}} onClick={()=>handleClick("All")}>All</button>
      <button className="navbar-toggle-btn"  style={{backgroundColor:isActiveButtonActive?"hsl(3, 86%, 64%)":""}} onClick={()=>handleClick("Active")}>Active</button>
      <button className="navbar-toggle-btn"  style={{backgroundColor:isInactiveButtonActive?"hsl(3, 86%, 64%)":""}} onClick={()=>handleClick("Inactive")}>Inactive</button>
     </div>
    </div>
  )
}

export default Navbar
