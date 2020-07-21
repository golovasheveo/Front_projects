var input1 = document.getElementById('input1');
var result = document.getElementById('result')
function displayResult() {
    result.textContent = eval(input1.value);
}