export  function changeTheme(bodyColor:string,widgetColor:string,textColor:string,statusButtonColor:string){
 document.documentElement.style.setProperty('--bodyColor',bodyColor); 
 document.documentElement.style.setProperty('--widgetColor',widgetColor);
 document.documentElement.style.setProperty('--textColor',textColor);
 document.documentElement.style.setProperty('--statusButtonColor',statusButtonColor);
}

export function activeStatusButtonColor(color:string){
 document.documentElement.style.setProperty('--statusButtonColor',color);

}