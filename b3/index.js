// var studentName = "A";


// function isPrimeNumber(studentName,className){
//     if(studentName  && className){
//         console.log("............");
//         console.log("My name is ",studentName );
//         console.log("My Class is ",className );
//         return true;
//     }
//     return false;
    
// }
// isPrimeNumber(studentName,"Reactjs 2102");

// let check = isPrimeNumber("Nam","Reactjs 2102");
// check = isPrimeNumber("Nam");
// if(!check){
//     console.log("Something went wrong on print Nam")
// }

let number = prompt("enter a number");

function isPrime(number){
    if(number < 2){
        return false;
    }else{
        let check = true;
        for(let i= 2; i <= Math.sqrt(number) ; i++){
            if(number % i === 0 ){
                check = false;
                break;
            }
        }
        if(checku){
            console.log(1);
            return true;
        }else{
            console.log(0);
            return false;
        }
    }
}
isPrime(number);