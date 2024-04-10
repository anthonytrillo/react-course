// ES5
var firstName = 'Juan';

//ES6
let lastName = 'Martinez';
const course = 'React Native';


// LET y CONST
// No se pueden crear dos variables con el mismo nombre
let number = 33;

// las variables declaradas con let se pueden reasignar
let number = 33;
number = 24;

// las variables declaradas con const NO se pueden reasignar
const year = 2022;
year = 2018;


// Ejemplos de scope con VAR y LET

function explainVar() {
    var a = 10;
    console.log(a); // 10
    if (true) {
        var a = 20;
        console.log(a); // 20
    }
    console.log(a);
}

explainVar();


function explainLet() {
    let a = 10;
    console.log(a); // 10
    if (true) {
        let a = 20;
        console.log(a); // 20
        let b = 100;
    }
    console.log(a);
    console.log(b); // Error: b is not defined
}

explainLet();



// Funciones

// ES5
function addTwoNumbers(a, b) {
    return a + b;
}

// ES6 -> ARROW FUNCTIONS o funciones flecha
const addTwoNumbers = (a, b) => {
    return a + b;
}

// // Return implícito
const addTwoNumbers = (a, b) => a + b

console.log(addTwoNumbers(1, 2));



// POO

// Objetos literales
// const product = {
//     id: 1,
//     name: 'Tableta',
//     price: 10000
// }

// ES5
// function Person(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;

//     this.talk = function () {
//         console.log('Hola soy '+this.name)
//     }
// };

// const person1 = new Person('Homero', 39, 'Av. siempreviva 742');
// person1.talk();
// console.log(person1);


// // ES6
// class Person {
//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     talk() {
//         console.log('Hola soy '+this.name);
//     }
// }

// const person1 = new Person('Homero', 39, 'Av. siempreviva 742');
// console.log(person1);
// person1.talk();


// Includes

// // ES6 - string.includes()
// let text = 'Hello world, welcome to the world!';
// console.log(text.includes('world'));

// // ES2016 - Array.inlcudes()
// const names = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// console.log(names.includes('Rita')); // true
// console.log(names.includes('Jose')); // false



// Método find

// Ejemplo 1
// const numbers = [4, 77, 92, 10, 3, -32, 54, 11];
// const first = numbers.find(item => item > 5);
// console.log(first);

// const names = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const first2 = names.find(item => item === 'Pedro');
// const first3 = names.find(item => item === 'Pedr');
// // console.log(first2);
// console.log(first3);


// Ejemplo 2
// const courses = [
//     {
//         name: 'Javascript',
//         price: 10000
//     },
//     {
//         name: 'ReactJs',
//         price: 22000
//     }
// ];

// const first = courses.find(item => item.name === 'ReactJs');
// console.log(first);



// Object Entries - ES 2017

const person = {
    firstName: 'Juan',
    lastName: 'Martinez',
    age: 18
};

let data = Object.entries(person);
console.log(data);

// Object Keys - ES6

const person = {
    firstName: 'Juan',
    lastName: 'Martinez',
    age: 18
};

let data = Object.keys(person);
console.log(data);



// Object Values - ES6

const person = {
    firstName: 'Juan',
    lastName: 'Martinez',
    age: 18
};

let data = Object.values(person);
console.log(data);



// Operadores lógicos

// OR

// falsy ( 0, null, undefined, NaN, false, string vacío )

const user = {
    firstName: 'Juan',
    age: 14
};

const user2 = null;

console.log( user || 'El usuario no existe' );

console.log( user2 || 'El usuario no existe' );

// return implícito
const userName = user.firstName || 'El usuario no existe';
console.log(userName);


// AND - &&

let cart = [];

// Antes
if (cart.length === 0) {
    console.log('El carrito esta vacío');
}

// con AND
cart.length === 0 && console.log('El carrito esta vacío')



// return implícito
const user = {
    firstName: 'Juan',
    age: 19
};

const user2 = null

const date = user2 && new Date()
console.log(date);



// Nullish Coalesing - ??

// Operando 1 ?? operando 2
// operando 1 sea null o undefined retorna el operando 2


// Optional chaining operator - ?.

const user = {
    id: 1,
    userName: 'Admin',
    profile: {
        avatar: '/avatar.png',
        language: 'english'
    }
};

const user = null

// Antes de ES6
let profile = user && user.profile;
console.log(profile);

// Optional chaining operator
let profile = user?.profile;
console.log(profile);

// Técnicamente estamos haciendo esto:
let profile = (user !== null && user !== undefined)
            ? user.profile
            : undefined;

// Validar propiedades
let avatar = user?.profile?.avatar;
console.log(avatar)

// Combinamos ?. y nullish coalesing - ??
let defaultProfile = { default: '/default.png', language: 'english' };

let profile = user?.profile ?? defaultProfile;
console.log(profile);



// Desestructuración

const user = {
    firstName: 'Juan',
    age: 14
};

let firstName = user.firstName;

const { firstName, age } = user;

console.log(firstName);
console.log(age);

const user = {
    id: 1,
    userName: 'Admin',
    profile: {
        avatar: '/avatar.png',
        language: 'english'
    }
};

const {userName, profile: {language}} = user;
console.log(userName);
console.log(language);


// Alias

// const item = {
//     item_id: 435,
//     full_product_name: 'some product',
//     price_per_unit: 5600
// };

// const {
//     item_id: id,
//     full_product_name: productName,
//     price_per_unit: price
// } = item;

// console.log(id);
// console.log(productName);

// Desestructuración en parámetros
const product = {
    id: 10,
    productName: 'some product',
    price: 1000
};

const showProducts = ( {id, productName, price} ) => {
    console.log(id, productName, price);
}

showProducts(product);


// Ejemplo: función que retorna un array
const retornaArray = () => {
  return ['anita123', 12345];
}

const [ usuario, contrasena ] = retornaArray();
// console.log(usuario, contrasena);

const useState = ( email ) => {
  return [ email, () => { console.log('Email') }];
}

const array = useState('anita@mail.com');
// console.log(array[1]);

const [ email, setEmail ] = useState('anita@mail.com');
console.log(email);
setEmail();



// spread operator

const names = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log(...names);

concatenar
const username1 = ['Juan', 'Maria'];
const username2 = ['Pedro', 'Marta'];

const usernames = [...username1, ...username2];
console.log(usernames);


const user = {
    firstName: 'Juan',
    age: 14,
    course: 'Javascript'
};

const user2 = {
    ...user
}

// console.log(user2)

const user3 = {
    ...user,
    course: 'React Native',
    email: 'juan@reactjs.org'
}

console.log(user3);
