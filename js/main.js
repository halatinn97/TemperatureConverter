// Upon button click, run convert temp function

document.querySelector('#convert').addEventListener('click', convertTemp)


function convertTemp() {

    let selectOptionFrom = document.getElementById('selectOptionFrom')
    let selectOptionTo = document.getElementById('selectOptionTo')
    let selectedFrom = selectOptionFrom.options[selectOptionFrom.selectedIndex].value
    let selectedTo = selectOptionTo.options[selectOptionTo.selectedIndex].value
    let resultField = document.getElementById('result')
    let value = document.getElementById('value').value

    if (selectedFrom === ('Celsius') && selectedTo === ('Fahrenheit')) {
        resultField.innerText = (value * 1.8) + 32
    } else if (selectedFrom === ('Fahrenheit') && selectedTo === ('Celsius')) {
        resultField.innerText = (value - 32) / 1.8
    }
}