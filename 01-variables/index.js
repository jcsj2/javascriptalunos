// var FORGET

//Primitive types are: String, Number, Boolean, Null and Undefined

let firstName;
const age = 30;
const likeGames = true;
const temperature = 28.4;

firstName = "Jose Claudio";

const valueUndefined = undefined;
const valueNull = null;

// console.log(valueUndefined == valueNull);
// console.log(valueUndefined === valueNull);

let nome = "asdasdsad"
// console.log(nome, typeof nome)
nome = 10
// console.log(nome, typeof nome)

// =============================================

// Reference Types are: Object, Array and Function
//OBS: Date is object :D 

const person = {
    name: 'Jose',
    birthday: new Date(1991, 8, 24),
    endereco: {
        rua: 'Rua tal',
        complemento: 'Longe de tudo e perto de porto',
    }
}

// console.log(person)
// console.table(person)

person.name = 'Zezinho'

// console.log(person.birthday.getDay())

person['nickname'] = 'SilentStorm'

// console.log(person)

const personJson = JSON.stringify(person);

console.log(personJson)
console.log(typeof person, typeof(personJson))

