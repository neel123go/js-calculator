function clearInput() {
    document.getElementById('resultField').value = "";
}

function calculator(value) {
    document.getElementById('resultField').value += value;
}

function answer() {
    let a = document.getElementById('resultField').value;
    let b = eval(a);
    document.getElementById('resultField').value = parseFloat(b.toFixed(2));
}