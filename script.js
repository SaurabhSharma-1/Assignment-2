const btn = document.querySelectorAll("button");
const operator = document.querySelectorAll("operator");
const res = document.getElementById("result");

for(let i =0; i<btn.length; i++){
btn[i].addEventListener("click", () =>
{
const buttonValue = btn[i].textContent;
if(buttonValue === "C"){
    clearResult();
}
else if(buttonValue === "="){
    calculateResult();
}
else {
    appendValue(buttonValue);
}
});
}

function clearResult(){
    res.value="";
}

function calculateResult(){
    result.value =eval(result.value);
}
function appendValue(buttonValue){
    let len = result.value.length; 
    let last  = result.value[len-1];
    if(last==="+" || last==="-" || last ==="*" || last ==="/"){
        if(buttonValue==="+" || buttonValue==="-" || buttonValue ==="*" || buttonValue ==="/"){
            result.value=result.value.slice(0, -1);
            result.value = result.value + buttonValue;
        }
        else{
            result.value = result.value + buttonValue;
            
        }
    }
    else{
        result.value = result.value + buttonValue;   
    }
}