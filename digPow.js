// Given a positive integer n written as abcd... (a, b, c, d... being digits) 
// and a positive integer p

// we want to find a positive integer k, if it exists, 
// such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// Test.assertEquals(digPow(89, 1), 1)
// Test.assertEquals(digPow(92, 1), -1)
// Test.assertEquals(digPow(46288, 3), 51)

function digPow(n, p) {
    let myDigits = n.toString();
    let mySum = 0;
    for (let i = 0; i < myDigits.length; i++) {
        mySum += parseInt(myDigits.charAt(i)) ** (p + i);
    }
    return Number.isInteger(mySum / n) ? mySum / n : -1
}