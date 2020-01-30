// method 1
const removeVowels = (myString) => {
    let myNewString = '';
    let myVowels = 'AEIOUaeiou';
    let myChar = '';
    for (i = 0; i < myString.length; i++) {
        myChar = myString.charAt(i);
        if (!myVowels.includes(myChar)) {
            myNewString += myString.charAt(i);
        }
    }
    return myNewString;
}

// method 2
const removeVowels = (myString) => {
    let myNewString = myString.replaceAll("[AaEeIiOoUu]", "");
    return myNewString;
}

const removeVowels = (myString) => {
    let myNewString = '';
    let myCharCode = 0;
    for (i = 0; i < myString.length; i++) {
        myCharCode = myString.charCodeAt(i);
        if (myCharCode !== 65 &&
            myCharCode !== 69 &&
            myCharCode !== 73 &&
            myCharCode !== 79 &&
            myCharCode !== 85 &&
            myCharCode !== 97 &&
            myCharCode !== 101 &&
            myCharCode !== 105 &&
            myCharCode !== 111 &&
            myCharCode !== 117
        ) {
            myNewString += myString.charAt(i);
        }
    }
    return myNewString;
}


// Note: Another method you could use regular expressions,  I understand though
// they can be rather inefficient.