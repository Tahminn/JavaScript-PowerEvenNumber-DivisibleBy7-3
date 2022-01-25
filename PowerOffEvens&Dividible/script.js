
let arr = [1,2,3,4,5,6,7,8,9];
console.log(powEven(arr));

num = 21;
console.log(divisibleBy7and3(num));


function powEven(arr){
    let sum = 0;
    for (const item of arr) {
            if (item % 2 == 0) {  
                let powerEven = Math.pow(item, 2);              
                sum += powerEven;                               
            }
    } 
    return sum        
}

function divisibleBy7and3(num){
    if (num % 3 == 0) {
        if (num % 7 == 0) {
            return num + " " + "is divisible by 7 and 3";
        }
        else{
            return "The number is not divisible by 7"
        }
    }
    else{
        return "The number is not divisible by 3"
    }
}


