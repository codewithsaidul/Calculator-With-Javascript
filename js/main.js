function appendDisplay (value) {
    const displayArea = document.getElementById("display");
    displayArea.value += value;
    return displayArea;
}


function allClearDisplay () {
    const allClear = document.getElementById("display");
    allClear.value = "";
    return allClear;
}

function clearDisplay () {
    const clearDisplays = document.getElementById("display");
    clearDisplays.value = clearDisplays.value.toString().slice(0, -1);
    return clearDisplays;
}


function calculate () {
    const result = document.getElementById("display");
    const calculateResult = eval(result.value);
    result.value = calculateResult;
    return result;
}