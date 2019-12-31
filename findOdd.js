// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let myNumbers = {}
    for (let i = 0; i < A.length; i++) {
        !myNumbers[A[i]] ? myNumbers[A[i]] = 1 : myNumbers[A[i]]++;
    }
    for (const prop in myNumbers) {
        if (myNumbers[prop] % 2 !== 0) return parseInt(prop)
    }
}