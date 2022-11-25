// const students = ['Ken', 'Sandy', 'John','Raymond', 'Andy'];

// const names =[ {firstName: 'Ken',  LastName: 'Chu'},
//     {firstName: 'Sandy',  LastName: 'Lau'},
// {firstName: 'John',  LastName: 'Yan'}]

// const studentsLength = students.length

// const scores = [15,20,55,99,87,66,88];

// scores.forEach(element => {
//     if (element > 50){
//         console.log('this is greater than 50 ' + element);
//     }
// });

// students.sort();

// students.sort((a,b) => b -a );

// students.sort((a,b) => b- a);

// students.reverse()

// const reserved = [...students]
// console.log('reserved :' + reserved.reverse());

// const fullName = names.map((name)=>{
//     return name.firstName + ' ' + name.LastName
// });

// const groceries = [
//     { item: 'apples', type: 'fruit' ,price: 55},
//     { item: 'cereal', type: 'pantry',price: 44},
//     { item: 'pork chops', type: 'meat',price: 33 },
//     { item: 'bananas', type: 'fruit' ,price:11},
//     { item: 'broccoli', type: 'vegetable' ,price:88 },
//     { item: 'pear', type: 'fruit' ,price:72 }];

// const numOfFruit = groceries.reduce((acc,object)=>{
//     if (object.type === 'meat'){
//         acc ++
//     };
//     return acc
// },0)
// var x = [1,2,3,4,5];
// x .push(6)
// // x.unshift(7)
// // x.pop()
// // x.shift()


// console.log(x);



// const fullName = names.map((name)=>{
//     return `${name.firstName} ${name.LastName}`
// });

// const meat = groceries.filter((item)=>{
//     return item.type === 'meat';
// });

// callback function for filter :
// function checkPrice(itemPrice){
//     return (itemPrice.price > 40)

// };

// const result = groceries.filter(checkPrice);

// var checkItem = groceries.filter((object)=>{
//     return object.type === 'vegetable'
// })

// loop and double:

// const numbers = [ 1,2,3,4,5,6,7]

// const numberDouble = [];

// for (let i =0; i < numbers.length; i++){
//     numberDouble.push(numbers[i]*2)
// };

// const double = function (num){
//     return num -2
// };

// const numberDouble = numbers.map(double)

// const product = numbers.reduce((acc, num)=>{
//     console.log(`the acc is : ${acc}`);
//     console.log(`the num is : ${num}`);
//     return acc * num
// }, 1);

// console.log( numOfFruit);


// console.log(studentsLength);

// ____________________________________________________________________
var colour = ['blue','yellow','orange','red','black'];
// for (i=0; i < colour.length; i++){
//     document.writeln(colour[i]);
// };

// colour.splice(0,3);
// document.writeln(colour)

const newitem = $('<p>this is new paragraph</p>');
$('#para2').html(newitem)

// $('#para2 ~ p').css('border', '3px solid red');


$(document).ready(function(){

    $('h1').text(' Lab08');
    $('h1').css('color', 'red');

    $('#para2').css('color', 'red');

    const newitem = $('<p>this is new paragraph</p>');
    $('#para2').html(newitem)

});

document.getElementById('para2').style.backgroundColor='yellow'

