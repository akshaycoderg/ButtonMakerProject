let bgColorInputELement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeighInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");

function onApplyProperties() {

    let bgColorInputValue = bgColorInputELement.value;
    let fontColorValue = fontColorInputElement.value;
    let fontSizeValue = fontSizeInputElement.value;
    let fontWeighValue = fontWeighInputElement.value;
    let paddingValue = paddingInputElement.value;
    let borderRadiusValue = borderRadiusInputElement.value;

    customButtonElement.style.backgroundColor = bgColorInputValue;
    customButtonElement.style.color = fontColorValue;
    customButtonElement.style.fontSize = fontSizeValue;
    customButtonElement.style.fontWeight = fontWeighValue;
    customButtonElement.style.padding = paddingValue;
    customButtonElement.style.borderRadius = borderRadiusValue;
}