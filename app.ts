console.log('first console log rendered here')

function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        // throw new Error('Incorrect input')
    }else{
        return num1 + num2
    }
}


const number1 = '2'
const number2 = 2

const result = add(number1, number2)
console.log(result)


const person= {
    name: 'Arsia',
    age: 3,
    hobbies: ['soccer', 'cooking']
}

let favoriteActivitiesOrNumbers: (string|number)[];
favoriteActivitiesOrNumbers = ['swimming', 18]

console.log(person.name, ', and he is ', person.age, ' years old apparently')


enum Role {
    'Admin' = 11,
    'Author' = 12,
    'Guest' = 333
}
function showType(input1: number, input2: string, input3: boolean, input4: string[], input5:Role.Admin){
    for (let argument of arguments){
        console.log(typeof(argument))
    }
}

showType(
    123, 
    'Amsen is here',
    true,
    ['How', 'Are',' You'],
    Role.Admin
)

// you can have literal types as is the case for the 'identifier'
function decideNumberOrText(value: string | number , identifier: 'as-text' | 'as-number'){
    if(identifier === 'as-text'){
        console.log(`${value.toString()} is a text`)
    } else if (identifier === 'as-number') {
        console.log(`${value} is a number`);
    } else {
        console.log('ERROR, identifier has to be either as-text or as-number!')
    }
}

decideNumberOrText(12, 'as-text')
decideNumberOrText('hello there, how are you?', 'as-text')
decideNumberOrText(0.0834, 'as-number')
decideNumberOrText((0.0834 + 'hello'), 'as-text')
