// bài 8

let n = window.prompt('Enter a number: ');

function oddNum(n) {
    while (n > 0) {
        var m = n % 10;
        console.log(m);
        n = Math.floor(n / 10);
        // console.log(n);
        if (m % 2 == 0) {
            return false;
        }
    }
    return true;
}

if (oddNum(n)){
    console.log("YES");
}else{
    console.log("NO");
} 

// bài 9

let n = window.prompt('Enter a number: ');

function checkSymmetry(n) {
    var m = 0;
    var n1 = n;
    while (n > 0) {
        m = m * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    if (m == n1) return true;
    else return false;
}

if (checkSymmetry(n)){
    console.log("YES");
} 
else{
    console.log("NO");
} 

// bài 10

for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log(i + 'x' + j + '=' + i * j);
    }
}