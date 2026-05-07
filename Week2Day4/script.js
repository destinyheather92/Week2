//exercise 1 
function square (number) {
    return number * number;
}   

function shout(message) {   
    return message.toUpperCase() + "!";
}
function isLong(text){
    return text.length > 10;
}

//exercise 2 
const names = ["Alex", "Sam", "Jordan", "Riley", "Casey"];
const greetings =[]
// for (const name of names) {
//   console.log(`Hello, ${name}!`);
// }

for (let i = 0; i < names.length; i++) {

   greetings.push(`${i+1} Hello, ${names[i]}!`)
}

// console.log(greetings)

//Exercise 3

