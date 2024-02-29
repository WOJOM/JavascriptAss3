// const  numbers = [1,2,3,4,5,6,7,8,9,10];
//   console.log(numbers)

// const thirdElement = numbers[2];
//   console.log(thirdElement)

// const lastElement = numbers[9];
//   numbers.lastElement = 0;
//   console.log(numbers.lastElement)

// const added = numbers.push(11);
//   console.log(added)

// const remove = numbers.splice(0, 1);
//   console.log(remove)

// const five = numbers.indexOf(5);
//   console.log(five)

// const containsNumber = numbers.includes(8);
//   console.log(containsNumber)

// const reverse = numbers.reverse();
//   console.log(reverse)

// const ascend = numbers.sort(function(a,b){return a - b});
//   console.log(ascend)

// const evenNumbers = numbers.filter(function(number){return number % 2 ===0;});
// console.log(evenNumbers) 

// var i = 1;
// while(i <=10){
//     console.log(i); i++;
// }

// let numbers = [1,2,3,4,5,6];
// let sum = 0;
// let i = 0;

// while(i < numbers.length){
//     sum += numbers[i];
//     i++; 
// }
// console.log("the sum of the number is:" + sum)

// let numbers = [4,7,18,24,58];
// let largest = numbers[0];
// let i = 1;

// while (i < numbers.length){
//     if (numbers[i] >largest){
//         largest = numbers[i];
//     }
//     i++;
// }
// console.log("the largest number in the array is:" + largest)

// while (true){
//     let email = prompt("Please enter your email address:");
//     if(email.includes("@")&& email.includes("."))
//     {console.log("Valid email address!");
//     break;
// }else{
//     console.log("Invalid email address.PLease try again.");
// }
// }

// while(true) {
//     let roll = Math.floor(Math.random()* 6) + 1;
//      console.log("you rolled a" + roll);
//      if (roll === 6) {
//         console.log("congratulations you rolled a  6!");
//         break;
//      }
//      }

//  let array = [1,2,3,4,5]
//  array.forEach(function(element){
//     console.log(element);
//  })

// let array = [1,2,3,4,5];
// let doubledArray = [];

// array.forEach(function(element){
//     doubledArray.push(element * 2);
// });
// console.log(doubledArray);

// let mixedArray = [3,"smart",56,"them","apple"];
// let stringArray = [];

// mixedArray.forEach(function(element){
//     if (typeof element=== "string"){
//         stringArray.push(element);
//     }
// });
// console.log(stringArray);

// let numbers = [1,2,3,4,5,6,7]
// let sum = 0;

// numbers.forEach(function(element){
//     if (element % 2 === 0){
//         sum += element;
//     }
// });
// console.log(sum)

          
// let numbers = [1,2,3,4,5,6,7];
// let filteredArray = [];

// numbers.forEach(function(element){
//     if(element>5){
//         filteredArray.push(element);
//     }
// });
// console.log(filteredArray)


// function greet(...names){
//     for(let name of names){
//         console.log('hello,${name}!');
//     }
// }
// greet('Alice','bob');

// function calculateAverage(...numbers){
//     let sum = 0;
//     for (let number of numbers){
//         sum += number;
//     }
//     let average = sum /numbers.length;
//     return average;
// }
// console.log(calculateAverage(4,6,10,3,2))

// function logArguments(...args){
//     console.log(args);
// }
// logArguments('Hello','Anna', 4);


// function combineArrays(...arrays){
//     return [].concat(...arrays);
// }
// const array1 = [2,3,4];
// const array2 = [5,6,7];
// const array3 = [8,9,10];

// const combinedArray = combineArrays(array1,array2,array3);
// console.log(combinedArray)


// function mergeObjects(...objects){
//     return Object.assign({},...objects);
// }
// const obj1 ={name: 'Oscar'};
// const obj2 ={age: 34};
// const obj3 ={city:'New orleans'};

// const mergedObject =mergeObjects(obj1,obj2,obj3);
// console.log(mergedObject)


// let objectLiteral = {
//     name: 'Oscar',
//     age: 39,
//     address: "Owerri,Imo state"
// };

// let objectLiteral = {
//     name: 'Oscar',
//     age: 39,
//     address: "Owerri,Imo state"
// };
// console.log(objectLiteral.name)


// let objectLiteral = {
//     name: 'Oscar',
//     age: 39,
//     address: "Owerri,Imo state"
// };
// objectLiteral.age = 42;
// console.log(objectLiteral.age)

// let objectLiteral = {
//     name: 'Oscar',
//     age: 39,
//     address: "Owerri,Imo state"
// };
// objectLiteral.email = "oscar@email.com";
// console.log(objectLiteral.email)


// let objectLiteral = {
//     name: 'Oscar',
//     age: 39,
//     address: "Owerri,Imo state"
// };

// delete objectLiteral.address;
// console.log(objectLiteral)

// for (let i =0; i <10; i++){
//     console.log("Soft Life" +i)
// }

// let numbers = [1,2,3,4,5,6];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// console.log("Sum of number is:" +sum )

// let numbers = [2,3,4,5,6,7];
// let largest = numbers[0];

// for (let b = 0; b < numbers.length; b++){
//     largest = numbers[b];
// }
// console.log(largest)


// let numbers = [1,3,2,4,5];
// let squares = [];

// for (let i = 0; i < numbers.length; i++){
//     squares.push(numbers[i]* numbers[i]);
// }
// console.log("arraySquare is:" + squares)


// let person = {
//     name: "Martins",
//     age: 54,
//     address: "23 Alpha Street",

// }
// for(let key in person){
//     console.log(key + ":" +person[key])
// }

// let fruits = ["pineapple",'peer','apple'];
//  for(let fruit of fruits){
//     console.log(fruit)
//  }

// let words = ['apple','mango','watermelon'];
// let lengths = [];

// for(let word of words){
//     lengths.push(word.length);
// }
// console.log(lengths)


// let person = {
//     Name: 'Chukwudi',
//     age: 35,
//     Address: '32 Anaba Street'
// }

// for(let key in person){
//     console.log(key)
// }

// let person = {
//     Name: 'chukwudi',
//     age: 32,
//     Address: '34 Anaba Street'
// };
// for(let value of Object.values(person)){
//     console.log(value)
// }


// let person = {
//     name: 'John',
//     age: 40,
//     address: '12 janet St'
// }

// for(let[key,value] of Object.entries(person)){
//     console.log(key,value)
// }







