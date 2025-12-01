var bit = 10;
var rezultatNakraq = [];
var isTrue;
var firstNumberAdditionalCode = [];
var secondNumberAdditionalCode = [];
var thirdNumberAdditionalCode = [];
// function getNumbers(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const numbersData = Object.fromEntries(formData);

//     event.target.reset();
//     num1 = Number(numbersData.first);
//     num2 = Number(numbersData.second);
//     bit = Number(numbersData.third);

//     calculations(num1, num2);
// }

calculations(-223, 23)
function calculations(num1, num2) {
    let firstNumberToUse = Math.abs(num1);
    let secondNumberToUse = Math.abs(num2);
    let num3 = num2 * -1;
    let thirdNumberToUse = Math.abs(num3);

    let [firstNumberStraightCode, firstCountForNormalization] = findStraightCode(firstNumberToUse, num1);
    
    let [secondNumberStraightCode, secondCountForNormalization] = findStraightCode(secondNumberToUse, num2);

    let [thirdNumberStraightCode, thirdCountForNormalization] = findStraightCode(thirdNumberToUse, num3);
}