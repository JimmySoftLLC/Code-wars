// Write a function that takes a string of braces, and determines if the order of the braces 
// is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], 
// and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and 
// curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Test.assertEquals(validBraces( "()" ), true);
// Test.assertEquals(validBraces( "[(])" ), false);

function validBraces(braces) {
    let myBraces = []
    for (let i = 0; i < braces.length; i++) {
        switch (braces.charAt(i)) {
            case '(':
                myBraces.push('(')
                break;
            case '[':
                myBraces.push('[')
                break;
            case '{':
                myBraces.push('{')
                break;
            case ')':
                (myBraces[myBraces.length - 1] === "(") ? myBraces.pop(): myBraces.push(')');
                break;
            case ']':
                (myBraces[myBraces.length - 1] === "[") ? myBraces.pop(): myBraces.push(']');
                break;
            case '}':
                (myBraces[myBraces.length - 1] === "{") ? myBraces.pop(): myBraces.push('}');
                break;
            default:
        }
    }
    return (myBraces.length === 0) ? true : false;
}