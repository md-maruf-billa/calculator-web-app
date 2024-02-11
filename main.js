let display = document.getElementById("display");

function appendDisplay(input){
    display.value+=input
}

function clearDisplay(){
    display.value = ''
}

function calculateValue(){
    display.value = eval(display.value);
}
function backDisplay(){
    let textElement = document.getElementById("display");
    let text = textElement.value.toString()
    const temp = [];
    
    for (let i = 0; i< text.length -1; i++){
        temp.push(text[i]);
    }
    let result = temp.join('')
    result = parseInt(result);
    textElement.value = result;
    
}