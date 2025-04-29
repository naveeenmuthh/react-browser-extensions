import { useContext } from "react";
import { Context } from "../App";

const Widget:React.FC<{logo:string;name:string;description:string;isActive:boolean;keyToggle:number}> = ({logo,name,description,isActive,keyToggle}) => {


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

const handleInputChange = (event:any,name:string)=>{


setWidgetData(()=>widgetData.map((data:any,)=>{

 console.log("Event Value", event.target.checked)
   
  if(data.name === name)
     return {...data,isActive:event.target.checked}
return data;


}));





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
        <input type="checkbox" id={`toggle_switch_${keyToggle} `}name="toggle_switch" checked={isActive} onChange={(event)=>handleInputChange(event,name)}/>
        <label htmlFor={`toggle_switch_${keyToggle} `} style={{backgroundColor:isActive?"hsl(3, 86%, 64%)":"hsl(226, 11%, 37%)"}}></label>
       </div>
    </div>
  )
}

export default Widget
