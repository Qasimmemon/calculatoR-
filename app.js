// function clear(val) {
//     document.getElementById('result').value = ""
// }
// function runFunction(val_1) {
//     document.getElementById('result').value += value
// }









// var result = document.getElementById('result').value
// function clearResult() {
//     result = ''
// }
// function runFunction(value) {
//     var result = document.getElementById('result');
//     if (value === '=') {
//         try {
//             result.value = eval(result.value); // Evaluate the expression
//         } catch (e) {
//             result.value = "Error"; // Display error if evaluation fails
//         }
//     } else {
//         result.value += value; // Append the clicked value to the input field
//     }
// }








function clearResult() {
    document.getElementById('result').value = "";
}



function runFunction(value) {
    var result = document.getElementById('result');
    if (value === '=') {
        try {
            result.value = eval(result.value); // Evaluate the expression
        } catch (e) {
            result.value = "Error"; // Display error if evaluation fails
        }
    } else {
        result.value += value; // Append the clicked value to the input field
    }
}