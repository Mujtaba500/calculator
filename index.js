let displayResult = document.querySelector("#result")
let displayInput = document.querySelector("#input-display")
displayInput.innerText = 0
let clear = document.querySelector("#clear")
let remove = document.querySelector("#del")
let runOperate = document.querySelector('.rslt')
runOperate.addEventListener('click', operate)
clear.addEventListener('click', clearAll)
remove.addEventListener('click', removefunc)
let value1 = 0
let value2 = 0
let operation = ""

function inputValue(num) {
     if ( operation === ""){
    if(displayInput.innerText == 0){
        displayInput.innerText = num
        value1 += num
    }
    else {
        displayInput.innerText += num;
        value1 += num.toString()
        console.log(value1)
    }

 } else {
    value2 += num
    value2 = value2.toString()
    displayInput.innerText += num
    console.log(value2)

}

}

function removefunc(){
    if(value2 === 0){
        value1 = value1.slice(0, value1.length - 1)
        displayInput.innerText = value1
    }
    else {
        value2 = value2.slice(0, value2.length - 1)
        displayInput.innerText = `${value1}${operation}${value2}`
    }
}

function setOperator(inputOp) {
    if(operation === ""){
    operation = inputOp;
    displayInput.innerText += inputOp 
    value1 = Number(value1)
    }
    else {
        return;
    }

}

function operate(){
    value2 = Number(value2)
    switch(operation){
        case '+':
            displayResult.innerText =  value1 + value2;
            break;
        case '-':
            displayResult.innerText = value1 - value2;
            break;
        case '*':
            displayResult.innerText = value1 * value2;
            break;
        case '/':
            displayResult.innerText = value1 / value2;
            break;
    }
}

function clearAll() {
    value1 = 0;
    value2 = 0;
    operation = "";
    displayInput.innerText = 0;
    displayResult.innerText = ''
}
