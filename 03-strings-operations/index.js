var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');



var result = document.getElementById('result');
var resultTitle = document.getElementById('result-title')

function displayResult() {
    if(input1.hidden == false && input2.hidden == true && input3.hidden == true) {
        result.textContent = input1.value.length;
    }
    if(input1.hidden == false && input2.hidden == false && input3.hidden == true) {
        result.textContent = input1.value.charAt(input2.value);
    }
    if(input1.hidden == false && input2.hidden == false && input3.hidden == false){
        result.textContent = input1.value.substr(input2.value, input3.value);
    }
}

function reset() {
    input1.value = '';
    resultTitle.hidden = true;
    result.textContent = '';
    setHidden(true,true,true)
}

function setHidden(in1,in2,in3) {
    input1.hidden = in1;
    input2.hidden = in2;
    input3.hidden = in3;
}

function stringLength() {
    setHidden(false,true,true);

}

function stringSymbol() {
    setHidden(false,false,true);
}

function subString() {
    setHidden(false,false,false);

}