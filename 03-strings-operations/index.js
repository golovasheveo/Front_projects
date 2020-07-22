var input1 = document.getElementById('input1');
var result = document.getElementById('result');
var resultTitle = document.getElementById('result-title')
function displayResult() {
    resultTitle.hidden = false;
    result.textContent = eval(input1.value);

}
function reset() {
    input1.value = '';
    resultTitle.hidden = true;
    result.textContent = '';
}

function stringLength() {

}