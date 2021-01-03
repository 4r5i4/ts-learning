console.log('first console log rendered here')

function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error('Incorrect input')
    }else{
        return num1 + num2
    }
}

const number1 = '2'
const number2 = 2

const result = add(number1, number2)
console.log(result)