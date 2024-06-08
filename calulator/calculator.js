let num1 = "", 
    num2 = "", 
    operation = ""

function updateDisplay() {
    document.getElementById("display").innerHTML = num1
}

function operate() {
    let res
    
    return res
}

function handleNumberButton(num) {
    if(operation.length === 0) {
        num1 += num
    }
    if(operation.length === 1) {
        num2 += num
    }
    updateDisplay()
}

function handleOpButton(op) {
    operation = "+-=/".includes(op) ? op : ""
}

function clearValues() {
    num1 = ""
    num2 = ""
    op = ""
    updateDisplay()
}