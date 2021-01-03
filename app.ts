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

//////////////////////////////////////
const person= {
    name: 'Arsia',
    age: 3,
    hobbies: ['soccer', 'cooking']
}

console.log(person)


// can also make the object like so:
const person2: { 
    name: string;
    age: number;
    hobbies: string[]
} = {
    name: 'Amsen',
    age: 4,
    hobbies: ['drawing']
}

console.log(person2.hobbies);

/////////////////////////////////////


// you can have a union of types, for example string or number

let favoriteActivitiesOrNumbers: (string|number)[];
favoriteActivitiesOrNumbers = ['swimming', 18]

console.log(person.name, ', and he is ', person.age, ' years old apparently')


// another type, which is enum, exclusive to TS. If the numerical value is not provided, then 
// the compiler assigns 1, 2, 3, etc. If number is provided, then TS assumes the next index for proceeding keys, for example
// 'Guest' will have the value 13 automagically
enum Role {
    'Admin' = 11,
    'Author' = 12,
    'Guest'
}

/////////////////////////////////////

function showType(...args: Array<any>){
// function showType(input1: number, input2: string, input3: boolean, input4: string[], input5: any){
    // for (let argument of ...arguments){
    //     console.log(typeof(argument))
    // }
    // const args = [...arguments]
    console.log('arguments', args)
}


showType(
    123, 
    'Amsen is here',
    true,
    ['How', 'Are',' You'],
    Role.Guest
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



/////////////////////////////////////
function multiplyTwoNumbers(number1: number, number2: number){
    return number1 * number2;
}

let multiplicationResult: number;
let multiplicationResultPointer: Function;

// function returns the value therefore the type of this variable should be number
multiplicationResult = multiplyTwoNumbers(23, 423)
console.log('multiplicationPointer Result: ',multiplicationResult)

multiplicationResultPointer = multiplyTwoNumbers; // this is a pointer to the function 
console.log('multiplicationPointer Result: ', multiplicationResultPointer(23, 423))

// multiplicationResultPointer = 'what the hell' // we are reassigning the variable, it is no longer pointing to a function
// console.log('multiplicationPointer Result: ', multiplicationResultPointer(23, 423)) //ERROR: multiplicationResultPointer is not a function

// now if we point the multiplicationPointer to another Function, we shouldn't have a problem right? 
function displaySomeText() { // the return type of this function is 'void' since it does not return anything
    console.log('some text')
}

console.log(displaySomeText())  // 'undefined' which is a valid value in JS. The function simply does not retrun anything
displaySomeText()   // displays the text

// now lets point the multiplicationPointer to displaySomeText, which is a valid function:
multiplicationResultPointer = displaySomeText
console.log('multiplicationPointer Result: ', multiplicationResultPointer(23, 423)) //undefined because displaySomeText() does not return anything

// so it would be nice if we could be more specific about the function, how it looks and such, so we have function types. 
// Function types are types that describe a function and return value of that function.
// the syntax looks a bit like an arrow function but it is not:

let someResult: (a: number, b: number) => number; // what this is saying, is that someResult accepts any function that returns the value of type number and takes no parameters
// someResult = displaySomeText // Type '() => void' is not assignable to type '(a: number, b: number) => number'.  Type 'void' is not assignable to type 'number'.

// As for callbacks, we can do the same:
function addAndHandle(n1: number, n2: number, cb: (num: number)=> void){
    const result = n1+n2;
    cb(result)
}

addAndHandle(2, 343, (someResult)=>{
    console.log('The result from the CallBack function is: ' , someResult)
})