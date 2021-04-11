// let value = window.prompt("Enter a number",0)
// if(value %2 == 0){
//     console.log("so chan")
// }else{
//     console.log("so le")
// }
// console.log("value" ,value,typeof(value))


//ass1 

let number = prompt("enter a number");
console.log("number" , number);
if(number < 2){
    console.log(number,"is not prime number");
}else{
    // let count = 0;
    // for(let i = 1 ; i <= number ; i++){
    //     if(number % i === 0){
    //         count ++;
    //         if(count >= 3){
    //             break;
    //         }
    //     }
    // }
    // if(count === 2){
    //     console.log(number+ " is prime");
    // }else{
    //     console.log(number+ " is not prime");
    // }

    let check = true;
    for(let i= 2; i <= Math.sqrt(number) ; i++){
        if(number % i === 0 ){
            check = false;
            break;
        }
    }
    if(check){
        console.log(number+ " is prime");
    }else{
        console.log(number+ " is not prime");
    }


    let n = number;
    while(n > 0){
        console.log("n % 10 ", n % 10);
        n = parseInt(n / 10);
    }
}