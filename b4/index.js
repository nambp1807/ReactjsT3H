// let number = 6


// function checkNumber(){
//     if(number % 2 == 1){
//         return 'ODD';
//     }else{
//         return 'EVEN';
//     }
// }

// console.log(checkNumber(5))
// let n = 10;
// function print(n){
//     if(n == 0){
//         return
//     }
//     console.log(n)
//     print()
// }
// print(n)

// use recusive  calulate total 1-n

// function calulate (n){
//     if(n===1 ){
//         return 1;
//     }
//     return total = n + calulate(n-1);
// }

// console.log("Total form 1-n",calulate(10));

// let checkNumberA = (number) => (number % 2 === 1 ? "ODD" : "EVEN");
// console.log(checkNumberA(6));

// function randomNumber(min, max) {
//     return min -1 + Math.ceil(Math.random() * (max - min + 1)) ;
// }
// console.log("Random form 10 to 15",randomNumber(10,15))

// string handler

let studentName = "tran tuAN anH";
function normalizeName (studentName){
    userName = studentName.toLowerCase();
    for (let i = 0 ; i <userName.leight ; i++){
        if(i == 0 || userName.charAt(i-1) == " "){
            userName = userName.slice(0,i)+userName.charAt(i).toUpperCase()+userName.slice(i+1);
        }
    }
    return userName;
}
console.log(normalizeName(studentName));