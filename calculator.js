const display=document.getElementById("display")
const subDisplay=document.getElementById("subDisplay")
let flag=true
let numLast
let numOld
let result
let oldOp
let lastOp
let Op
function nightMode(){
    document.getElementById("calculator").classList.toggle("nightMode")
    if(flag==true){
        document.getElementById("nightMode").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>'
        flag=false
    }else{
        document.getElementById("nightMode").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>'
        flag=true
    }
}
function clearDisplay(){
    display.value=""
    subDisplay.value=""
    numLast=0
    numOld=0
    flag=true
}
function addKey(n){
        display.value=display.value+n
        subDisplay.value=subDisplay.value+n
}
function addOperate(o){
    subDisplay.value=subDisplay.value+o
    Op=o
    if(flag){
        numOld=parseInt(display.value)
        display.value=""
        flag=!flag
    }else{
        numLast=parseInt(display.value)
        display.value=""
        calc(Op)
    }
    console.log("first number" +numOld+ "last number" +numLast)
}
function calc(Op){
    switch (Op) {
        case "%":
            numOld = numOld % numLast
            break;
        case "/":
            numOld = numOld / numLast
            break;
        case "*":
            numOld = numOld * numLast
            break;
        case "-":
            numOld = numOld - numLast
            break;
        case "+":
            numOld = numOld + numLast
            break;
    }
    console.log("first number" +numOld+ "last number" +numLast)

}
function calculate(){
    numLast=parseInt(display.value)
    calc(Op)
    display.value=numOld
    flag=true
    subDisplay.value=subDisplay.value+"="+numOld
    console.log("first number" +numOld+ "last number" +numLast)
}