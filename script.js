const btn = document.querySelectorAll("button");

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
    result.value = result.value + buttonValue;
}