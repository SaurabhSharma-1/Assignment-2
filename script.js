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


onkeypress = (inp) => {
  console.log(inp.charcode);
  let len = result.value.length; 
    let last  = result.value[len-1];
    if(inp.charCode >= 42 && inp.charCode <= 57 ){
      if(last==="+" || last==="-" || last ==="*" || last ==="/"){
        if(inp.key==="+" || inp.key==="-" || inp.key ==="*" || inp.key ==="/"){
            result.value=result.value.slice(0, -1);
            result.value = result.value + buttonValue;
        }
        else{
            result.value = result.value + inp.key;
            
        }
    }
    
    }
    
};


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




// const btn = document.querySelectorAll("button");
// const operator = document.querySelectorAll("operator");
// const res = document.getElementById("result");

// for(let i =0; i<btn.length; i++){
// btn[i].addEventListener("click", () =>
// {
// const buttonValue = btn[i].textContent;
// if(buttonValue === "C"){
//     clearResult();
// }
// else if(buttonValue === "="){
//     calculateResult();
// }
// else {
//     appendValue(buttonValue);
// }
// });
// }

// function clearResult(){
//     res.value="";
// }

// function calculateResult(){
//     result.value =eval(result.value);
// }
// function appendValue(buttonValue){
//     let len = result.value.length; 
//     let last  = result.value[len-1];
//     if(last==="+" || last==="-" || last ==="*" || last ==="/"){
//         if(buttonValue==="+" || buttonValue==="-" || buttonValue ==="*" || buttonValue ==="/"){
//             result.value=result.value.slice(0, -1);
//             result.value = result.value + buttonValue;
//         }
//         else{
//             result.value = result.value + buttonValue;
            
//         }
//     }
//     else{
//         result.value = result.value + buttonValue;   
//     }
// }
