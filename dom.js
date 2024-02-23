// let element = document.getElementById

// queryselectorAll

// const parentElement = document.querySelector("your-parent-element");
// const firstChild = parentElement.firstElementChild;

// const elements = document.querySelectorAll(".your-css-selector");

// const element =  document.getElementById(".your-element");
// element.textContent  = "New text content";

// const element = document.querySelector(".your-element");
// element.setAttribute("attribute-name", "new-value");

// const parentElement = document.getElementsByClassName(".your-parent-element");
// const newElement = document.createElement("div");
// parentElement.appendChild(newElement);

// const parentElement = document.querySelector(".your-parent-element");
// const elementToRemove = document.querySelector(".your-element");
// parentElement.removeChild(elementToRemove);

// const childElement = document.getElementById('child');
// const parentElement = childElement.parentNode;
// console.log(parentElement);

// const currentElement = document.getElementById('current');
// const nextSiblingElement = currentElement.nextElementSibling;
// console.log(nextSiblingElement)

// const parentElement = document.getElementById('parent')
// for (let i = 0; i < parentElement.childNodes.length;
//     i++){
//         const childElement = parentElement.childNodes[i];
//     if (childElement.nodeType === Node.ELEMENT_NODE){
//         console.log(childElement);
//     }
//     }

// const parentElement = document.getElementById('parent');
// const matchingElements = parentElement.querySelectorAll('.sammy');
// console.log(matchingElements)

// let harvana = document.getElementById('myElement').style.backgroundColor = "blue"

// let james = document.getElementById('myDiv').classList.add('sammy');
// let sammy = document.getElementById('myDiv').classList.remove("festus")

// let oscar = document.getElementById('myButton').addEventListener('click', function(){
//     document.getElementById('myButton').classList.toggle("style");
//     document.getElementById('myButton').classList.toggle("myButton")
// })

// const button = document.getElementById('myButton');
// button.addEventListener('click', function(){
//     const styleElement = document.createElement("style");

//     styleElement.textContent.= `#myButton { background-color: red;}`;
//     document.head.appendChild(styleElement);
// });

// The 'forEach' method in javaScript is used to iterate over elements in an array and perform
// a specified action on each element. It is a higher order function that takes a callback function as an argument.

// When it comes to scope and behaviour, there are a few differences between 'forEach' and traditional 'for' loops in javascript.
// 1. Scope: In a traditional 'for' loop, you have more control over the scope of variables. You can declare variables outside the loop and they will be accessibe both inside and outside the loop. In contrast, the callback function used in 'forEach'has it's own scope. Variables declared inside the callback function are not accessible outside of it.

// 2. Behaviour: The behaviour of 'forEach' and traditional 'for' loops also differs.
// -forEach is designed specifically for iterating over arrays. It automatically iterates over 
// each element in the array and applies the provided callback function. it simplifies the process 
// of iterating over arrays and performing actions on each element.
// -Traditional 'for' loops provide more flexibility. You have control over the iteration process,
// including the ability to specify the starting and ending points, increment or decrement values, and even skip iteration using 'continue' or exit the loop using 'break'. 

// So, while 'forEach' is more concise and convenient for iterating over arrays, traditional 'for' loops offer greater flexibility and control over iteration process.


// const numbers = [2,4,5,7,9];
// const doubleElement = [];
// numbers.forEach((number)=>{
// doubleElement.push(number * 2);
// })
// console.log(doubleElement)

// const mixedArray = [3,'thanos',5,'james',67,'banana'];
// const stringArray = [];

// mixedArray.forEach((item) => {
//     if(typeof item === 'string'){
//         stringArray.push(item);
//     }
// })
// console.log(stringArray)

// const numbers = [1,2,4,6,5,3,8,7,9];
// const evenNumbers = [];

// numbers.forEach((number)=>{
//     if(number % 2===0){
//         evenNumbers.push(number)
//     }
// });
// console.log(evenNumbers)

// const numbers = [1,2,3,4,5];
// numbers.forEach((number, index)=>{
//     console.log(`Number:${number}, Index:${index}`)
// })

// const numbers = [1,2,3,4,5];
// numbers.forEach((number) => {
//     if(number ===3){
//         return;
//     }
//     console.log(number);
// })

// Yes, you can modify the original array directly within a 'forEach' callback. The reason is that the 'forEach' method iterates over each element of the array and allows you to perform operations on each element. This includes modifying the elements themselves or even adding or removing elements from the array.
// However,its important to note that while you can modify the elements of the array, you should avoid changing the length of the array itself during the iteration. Modifying the length of the array within a 'forEach' loop can lead to unexpected results or even an infinite loop.

// common use cases for forEach in javaScript:
// 1. Performing an action on each element.
// 2. Filtering elements.
// 3. Modifying elements. 
// 4. Logging or printing values. 

// If you prefer a simplier and more concise way to iterate over an array without the need to create a new array or perform complex operations,'forEach'  is a great choice. Its especially useful when you want to perform a specific action on each element of an array without the need to return a new array or aggregate array.

// The syntax of For...of loop in JavaScript provides an easy and concise way to iterate over iteratable objects, such as arrays,strings,or other collections. 
// The purpose of the For...of loop is to simplify the process of iterating over elements in an iterateable object. It eliminates the need for an index or counter variable and provides a more readable and intuitive way to access each element directly. 

// How for...of loop differs from traditional 'for' loops and the 'forEach' method:
// 1. Through simplicity
// 2. Direct access to values 
// 3. No access to Index 
// 4. No way to break or skip iterations
// 5. No support for all types of iterable objects


// const numbers = [2,3,4,6,8];
// for(const number of numbers){
//     const square = number ** 2;
//     console.log(square)
// }

// const words = ['havana', 'guava', 'sweet'];
// const lengths = [];
// for (const word of words){
//     lengths.push(word.length);
// }
// console.log(lengths)


// const person ={
//     name: 'John',
//     age: 25,
//     Address: '24 Main St',
// };
// for(const key in person){
//     console.log(key)
// }

// const person ={
//     name: 'John',
//     age: 25,
//     Address: '24 Main St',
// };
// for(const value in Object.values(person)){
//     console.log(value)
// }

// const person = {
//     name: 'Oscar',
//     age: 15,
//     address: '15 anaba strt'
// };
// for(const[key, value]of Object.entries(person)){
//     console.log('Key: ${key}, Value: ${value}');
// }

// const numbers = [1,2,3,4,5,6];
// for(let number of numbers){
//     number *= 2;
//     console.log(number);
// }
// console.log(numbers)


// common use cases for for...of loop:
// 1. Iterating over arrays.
// 2. Processing Strings.
// 3. Working with collections.
// 4. Enumerating object properties.
// 5. Asynchronous operations.

// When to choose between different for...of over other looping methods:
// 1. When you need to iterate over the values of an iterate Object.
// 2. When you dont need access to the  index.
// 3. When working with asynchronous operations.

// for (let i = 1; i<= 10; i++){
//     console.log(i)
// }

// let numbers = [1,2,3,4,5];
// let sum = 0;
// for(let i = 0; i <numbers.length; i++){
//     sum += numbers[i];
// }
// console.log(sum)


// let numbers =[5,3,6,8];
// let largestNumber = numbers[0];
// for(let i =1; i <numbers.length; i++){
//     if(numbers[i]>largestNumber){
//         largestNumber = numbers[i];
//     }
// }
// console.log(largestNumber)


// const numbers = [1,2,3,4,5];
// const squaredNumbers = [];
// for(let i = 0; i < numbers.length; i++){
//     const squared = numbers[i]* numbers[i];
//     squaredNumbers.push(squared);
// }
// console.log(squaredNumbers)

// const person = {
//     name: 'John',
//     age: 25,
//     city: 'owerri',
// };
// for (let key in person){
//     console.log(key + ':' + person[key]);
// }

// In a for loop, the initial expression is executed only once at the beginning of the loop. It is used to initailize the loop variable or any other neccessary variables. The expression typically sets the starting point of the loop.

// The conditional expression is evaluated before each iteration of the loop. It determines whether the loop should continue executing or not. If the conditional expression evaluates to true, the loop continues; if it evaluates to false, the loop terminates. 

// The increment expression is executed after each iteration of the loop. It is used to update the loop variable or any other neccessary variables. This expression typically modifies the loop variable in a way that brings it closer to the termination condition.


// const rows = 3;
// const cols = 4;
// const multidimensionalArray = [];

// for (let i = 0; i < rows; i++){
//     const innerArray = [];
    
//     for(let j = 0; j < cols; j++){
//         innerArray.push(i * cols + j);
//     }
//     multidimensionalArray.push(innerArray);
// }
// console.log(multidimensionalArray);


// for (let i = 0; i < 10; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(i)
// }


// for(let i = 0; i < 5; i++){
//     if(i === 2){
//      continue;
//     }
//     console.log(i);
// }


// Describe common use cases for for loops in javascript applications:
// 1. Iterating over arrays: For loops are often used to iterate over each element in an array and perform some operation on each element.
// 2. Generating sequences: For loops can be used to generate a sequence of numbers or characters based on certain conditions or patterns.
// 3. Performing repetitive tasks: For loops are useful for executing a block of code repeatedly for a specific number of times or until a certain condition is met.
// 4. Accessing object properties: For loops can be used to iterate over the properties of an object and perform operations on each property.
// 5. Searching and filtering: For loops can be used to search for specific elements in an array or to filter out elements based on certain creteria.


// const element = document.getElementById('yourElementId');

// const element = document.getElementsByClassName('yourClassName');

// const parentElement = document.getElementById('yourParentElement')
// const firstChildElement = parentElement.firstChild;

// const elements = document.querySelectorAll('yourCssSelector')

// const childElement = document.getElementById('yourChildElement');
// const parentElement = childElement.parentNode;

// const currentElement = document.getElementById('yourCurrentElementId');
// const nextSiblingElement = currentElement.nextSibling;

// const parentElement = document.getElementById('yourParentElementId');
// const childElements = parentElement.childNodes;

// for (let i = 0; i < childElements.length; i++){
//     if(childElements[i].nodeType === 1){
//         //Do something with each child element
//         console.log(childElements[i]);
//     } 
// }

// function findElementsMatchingCondition(element, condition, results =[]){
//     if (condition(element)){
//         results.push(element);
//     }

//     const childElements = element.children;
//     for (let i = 0; i < childElements.length; i++){
//         findElementsMatchingCondition(childElements[i],condition,results);
//     }
//     return results;

// }

// 'childNodes' is a property that returns a collection of all child nodes, including text nodes and comment nodes, of a given Element. it includes all types of nodes within the Element. 

// 'children' is also a property that returns a collection of all child elements, excluding text nodes and comment nodes. It only includes elementgs within the element. 

// 'getElementByTagName' is a method that returns a collection of elements with a specific tag name, such as 'div' or  'p', within a given element. It allows you to select elements based on their tag name. 



// Modify element content and attributes using DOM manipulation:
// 1. select the element you want to modify using methods like 'getElementById' 'querySelector' or 'getElementByClassName'.
// 2. To modify the text content of an element, you can use the 'textContent' property and assign a new value to it. 
// 3. To modify element attributes, you can use the 'setAttributes' you can use the 'setAttributes'
// method. Provide the attribute name as the first argument and the new attribute value as the second argument. 


// let newElement = document.createElement('div');
// newElement.setAttribute('id', 'myNewElement');
// newElement.textContent = 'This is a new element';

// let parentElement = document.getElementById(myParentElement);
// parentElement.appendChild(newElement)


// let parentElement = document.getElementById('myParentElement');
// let elementToRemove = document.getElementById('myElement');
// parentElement.removeChild(elementToRemove);


// let element = document.getElementById('myElement');
// element.classList.add('highlight');

// let element = document.getElementById('myElement');
// element.classList.add('highlight');
// element.classList.remove('highlight')


// let element = document.getElementById('myElement');
// element.addEventListener('click', function(){
//     element.classList.toggle('style1');
//     element.classList.toggle('style2')
// })

// for (let i = 0; i < 10; i++){
//     let paragraph = document.createElement('p');
//     document.body.appendChild(paragraph);
// }


// let images = document.querySelectorAll('img');
// images.forEach(function(image){
//     image.style.border = '2px solid black';
// });




