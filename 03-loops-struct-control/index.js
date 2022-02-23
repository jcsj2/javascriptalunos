const luke = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    birthDay: new Date(1991, 8, 24),
    jedi: true
}

const leia = {
    firstName: 'Leia',
    lastName: 'Organa',
    birthDay: new Date(2001, 3, 1),
    jedi: false
}

const obiwan = {
    firstName: 'Obi-Wan',
    lastName: 'Kenobi',
    birthDay: new Date(1970, 5, 10),
    jedi: true
}

const persons = [luke, leia, obiwan]
console.table(persons)

console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>")

for (let i = 0; i < persons.length; i++) {
    // console.log(persons[i])
}

for (const person of persons) {
    // console.log(person)
}

for (const indice in persons) {
    // console.log(persons[indice])
}

const dicionario = new Map()
dicionario.set('leia', leia)
dicionario.set('luke', luke)
dicionario.set('obiwan', obiwan)

// console.log(dicionario)

for (const [chave, valor] of dicionario) {
    // console.log(chave, valor)
}

let contador = 0

while(contador < 5) {
    console.log('contador while', contador)
    contador++;
}

contador = 0

do {
    console.log('contador do while', contador)
    contador++;
} while(contador > 5)

// controls

const nota = 2

if (nota >= 8) {
    console.log('Passou topado')
} else if (nota >= 6 && nota < 8) {
    console.log('Ta safe')
} else {
    console.log('Lascou-se')
}

// Switch

const dataAtual = new Date()

switch(/* can be a expression */dataAtual.getDay()) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:
        console.log("Não conheço esse dia")
}