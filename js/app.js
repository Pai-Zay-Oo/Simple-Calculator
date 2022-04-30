let keypads = document.querySelector('.keypads');
let display = document.querySelector('.display');
let operators = ['+','-','*','/','%'];


let filter =(x) =>{
    let current = display.innerText;
    let lastchar = current[current.length-1];
    if(current == '0' && x != '.'){
        clearLast();
    }
    if(operators.includes(x) && operators.includes(lastchar)){
        return false;
    }
    if(current.length>10){
        return false;
    }
    return true;
}




let showIndisplay = (x) => {
    if (filter(x)){
    display.innerText += x;
    }
} 
let calculate = _ =>{display.innerText = eval(display.innerText);} 
let clearAll = _ => display.innerText = "";
let clearLast = _ => display.innerText = display.innerText.substring(0,display.innerText.length-1);
keyPads.addEventListener("click",_=>{
    if(displayBox.innerText.length>10){
        displayBox.style.fontSize = 30+"px";
    }else if(displayBox.innerText.length>5){
        displayBox.style.fontSize = 60+"px";
    }
})
