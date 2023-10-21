// ES6 revision 


// map & filter

// map funtion 

let array1 = [2, 5, 6, 10];

// ab ak array double hojye elements 

/* anon funtions
let array2 = array1.map(function(x){
    return x*2;
}); */


// arrow funtion

let array2 = array1.map(x => x * 2);


console.log(array2);


// filter funtion

// ager ap chayty ho ap array say wohi lo jo 2 say divide  hota ha tw filter use karygae , maltab condition use karygae 


// let array3 = array1.filter(x => x%2==0);

// anyonums funtion

let array3 = array1.filter(function (x) {
    if (x % 2 == 0) {
        return x;

    }
}
);

console.log(array3);



// _________________________________________________________________






// Refference type (array, Object), primitive type (string, number)

let number1 = 100;
let number2 = number1;
number2 = 500;
console.log(number1);
console.log(number2);

// refference type

let personR = {
    name: "kishwar",
}

// let personR2 = personR;

// dono mae change hojyega 
// personR2.name    = "jabeen";

// now change just person 2 

let personR2 = {
    ...personR
}
personR2.name = "jabeen";

console.log(personR);
console.log(personR2);


// _________________________________________________________________




// Arry  destreching

let listd = ["BMW", "honda", "Audi"];

// har value kay liya alag alag value asing karana

let [car1, car2, car3] = listd

console.log(car1, car2);
console.log(car3);


// object  destreching

const persond = {
    names: "kishwar",
    ages: 28

}

let { names, ages } = persond;
console.log(ages);

// _________________________________________________________________


// Spread and rest operator (...)

// spread use array and object split, copy 

let list = ["BMW", "honda", "Audi"];

let listNew = [...list, "ferrari"];
let listNew1 = ["ferrari", ...list];

console.log(listNew);
console.log(listNew1);


// object 
let person = {
    name: "kishwar Jabeen",
    age: 28,
}

let newPerson = {
    ...person,
    city: "Khi",
}

console.log(newPerson);

// rest operator

// its used in funtion argument 

//asmae jatny argument diay ha onty he pass kariengae  
function hellos(a, b, c) {
    console.log(a, b, c);
}

hellos(1, 2, 3);

// now use rest operator 

function hello(...all) {
    console.log(all);
}
hello(1, 2, 3, 4, 5, 6, 7, 8, 9)






// _______________________________________________________________________




//class and object 
class customer {
    constructor(n) {
        this.name = n;
    }
    // add property not need to add this keyword 
    age = 20;

    // you can use arrow funtion

    buy = () => {
        // ager property class kay ander use karygae 
        console.log(this.name);
        console.log("hello.....");
    }



    // buy(){
    //     // ager property class kay ander use karygae 
    //     console.log(this.name);
    //     console.log("hello.....");
    // }
}
// inheritance 
class GuestCustomer extends customer {
    hello() {

        console.log("hello everyone");
    }
}




let customer1 = new GuestCustomer("kishwar");
// let customer1 = new customer("kishwar");
console.log(customer1);
customer1.hello();
customer1.buy();




// _________________________________________________________________________






// export import module 

/* import { hello } from "./sell.js";
// import { data } from "./sell.js";

// Now access data form another name 

import { data as da } from "./sell.js";
 */
//  now use in one import 
/* import { hello , data as da } from "./sell.js";


hello();
console.log(da); */

// if only one file import 

import * as bundle from './sell.js';
bundle.hello();
console.log(bundle.data);

// defult import (note defualt importt ak file mae ak hota ha)

// import person from './custo.js';

// console.log(person);

import ps from './custo.js';

console.log(ps);