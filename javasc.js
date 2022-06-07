
// it is done for future update this calculator to advance calculator 


let screen=document.getElementById("screen");
 buttons=document.querySelectorAll("button");
let screenvalue="";
for ( item of buttons) {
    item.addEventListener("click",(e)=>{
        buttonInput=e.target.innerText;
        console.log(buttonInput);

        if(buttonInput=='x'){
            buttonInput="*";
            screenvalue+=buttonInput;
            screen.value=screenvalue;
        }else if(buttonInput=="C"){
            screen.value="";
            screenvalue="";
        }else if(buttonInput=="="){
            screen.value=eval(screenvalue);
        }else{
            screenvalue+=buttonInput;
            screen.value=screenvalue;
        }

    })
}