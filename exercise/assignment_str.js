//b11
let string = "Hello   World";

function countSpace(string) {
    let count = 0;

    for (let i = 0;i < string.length; i++) {

        if (string.charAt(i) === ' ') {
            count++;
        }
    }

    return count;
}

console.log(countSpace(string));

//b12
let string = '  Hello   world ';

function deleteSpace(string) {
    return  string.replace(/\s+/g,'');
}

console.log(deleteSpace(string));
//b13
let string = "This is a beautiful day";

function reverseString(string) {
    let newString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }

    return newString;
}

function reverseStringRecursive(string) {
    if (string === '') {
        return '';
    }

    return reverseStringRecursive(string.substr(1)) + string.charAt(0);
}

console.log('Nomal', reverseString(string));
console.log('Recursive', reverseStringRecursive(string)); 
//b14
let s1 = 'This is a beautiful day';
let s2 = 'is';

function findS2InS1(s1, s2) {
    return s1.match(s2);
}

console.log(findS2InS1(s1, s2));
console.log(findS2InS1Index(s1, s2)); 
//b15
let name = "NguyeN THI tho tHu hA";

function normalizeName(name) {
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++) {
        if (i === 0 || name.charAt(i - 1) === ' ') {
            name = name.slice(0 , i) + name.charAt(i).toUpperCase() + name.slice(i +  1);
        }
    }

    return name;
}

console.log(normalizeName(name)); 
//b16
let link = "https://www.facebook.com/ngothucdat";

function getIdNameFacebook(link) {
    for (let i = 0; i < link.length; i++) {
        if (link.slice(0, i) === "https://www.facebook.com/") {
            link = link.slice(i);
        }
    }

    return link;
}

console.log(getIdNameFacebook(link)); 
//b17
function getMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    } else if (c > max) {
        max = c;
    }

    return max;
}

function getMin(a, b, c) {
    let min = a;

    if (b < min) {
        min = b;
    } else if (c < min) {
        min = c;
    }

    return min;
}

console.log(getMax(3, 5, 2));
console.log(getMin(3, 5, 2)); 
//b18
let s1 = "he he he he he he";
let s2 = "he";

function findPosition(s2, s1) {
    let result;
    let lastPosition = s1.lastIndexOf(s2);
    let s1SubString = s1.substring(0, lastPosition);
    result = s1SubString.lastIndexOf(s2);

    return result;
}

console.log(findPosition(s2, s1)); 
//b19
let n = 10;

function getTotal(n) {
    if (n === 0) {
        return 0;
    }

    return n + getTotal(n - 1);
}

console.log(getTotal(n)); 