//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let numbersList = document.querySelectorAll('li');
let numbersArray = [];

for (let i = 0; i < numbersList.length; i++) {
    numbersArray.push(Number(numbersList[i].innerText));

}
//Promedio
function calculateAverage() {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    return Number((sum / numbersArray.length));
}

document.querySelector('.promedio').innerText = calculateAverage(numbersArray);

//Menor

function findMinorNumber() {
    let minorNumber = numbersArray[0];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < minorNumber) {
            minorNumber = numbersArray[i];
        }
    }
    return minorNumber;
}
document.querySelector('.pequeño').innerText = findMinorNumber(numbersArray);

//Mayor

function findBiggerNumber() {
    let biggerNumber = numbersArray[0];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > biggerNumber) {
            biggerNumber = numbersArray[i];
        }
    }
    return biggerNumber;
}
document.querySelector('.grande').innerText = findBiggerNumber(numbersArray);

//Mas Repite

function findMostFrequentNumber(arr) {
    let n = arr.length;
    let biggestFrequency = 0;
    let mostFrequentNumber = 0;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > biggestFrequency) {
            mostFrequentNumber = arr[i];
            biggestFrequency = count;
        }
    }
    return mostFrequentNumber
}
document.querySelector('.frecuente').innerText = findMostFrequentNumber(numbersArray)


