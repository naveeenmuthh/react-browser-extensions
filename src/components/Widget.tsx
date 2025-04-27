import { useContext } from "react";
import { Context } from "../App";

const Widget:React.FC<{logo:string;name:string;description:string;isActive:boolean}> = ({logo,name,description,isActive}) => {


  const [isAllButtonActive,setAllButtonStatus,isActiveButtonActive,setActiveButtonStatus,isInactiveButtonActive,setInactiveButtonStatus,widgetData,setWidgetData] = useContext(Context);

const handleToggle = (name:string)=>{

 setWidgetData(()=>widgetData.map((wdata)=>{
  if(name===wdata.name)
     return {...wdata,isActive:!wdata.isActive}
  return wdata;
 }))

}


const removeWidget = (name:string)=>{
  console.log("Set Data:",widgetData);
  setWidgetData(()=>widgetData.filter((wdata)=>name!==wdata.name))
}


  return (
    <div className="widget-container">
      <div className="widget-content-container">
       <div className="widget-img-container">
       <img src={logo} alt={name} />
       </div>
       <div className="widget-text-container">
       <h4>{name}</h4>
       <p>{description}</p>
       </div>
       </div>
      <div className="widget-buttons-container">
        <button className="widget-button" onClick={()=>removeWidget(name)}>Remove</button>
        <button className="widget-button-toggle" onClick={()=>handleToggle(name)}>Toggle{isActive}</button>
       </div>
    </div>
  )
}

export default Widget
