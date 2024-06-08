/*
    Link - https://www.theodinproject.com/lessons/foundations-object-basics
*/
function sumOfTripledEvens_linear(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num%2 === 0) {
            arr[i] *= 3
            sum += arr[i]
        }
    }
    return sum
}


function sumOfTripledEvens(arr) {
    /*
    const newArr = arr.map((num) => num%2 === 0? num*3 : 0)
    const sum = newArr.reduce((total, currentNum) => total+currentNum)
    return sum
    */


    /*
    return arr.map(
        (num) => num%2 === 0? num*3 : 0
    ).reduce(
        (total, currentNum) => total+currentNum
    )
    */

    return arr
        .filter((num) => num%2 === 0)
        .map((num) => num*3)
        .reduce((total, num) => total+num)
}

const arr = [1, 2, 3, 4, 5];
console.log(sumOfTripledEvens(arr))