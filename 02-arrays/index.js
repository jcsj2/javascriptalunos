// Array, Map (dicionario) e Set

let marvelMovies = ['Blade', 'Spider man', 'Xmen']

// console.table(marvelMovies)
// console.table(typeof marvelMovies)
// console.log(marvelMovies[2])

marvelMovies[3] = 'Doutor Estranho'
marvelMovies.push('Avengers')

// console.log(marvelMovies, marvelMovies.length)

const lastElement = marvelMovies.pop();
// console.log(lastElement)
// console.log(marvelMovies)


console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>")
// -> Array Methods

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
// console.table(persons)

/* function logar(personagem) {
    console.log(personagem.firstName)
}
*/

const logarNovo = (personagem) => {
    console.log(personagem.firstName)
}

// persons.forEach(logarNovo)

// -> Array.map

const personagensFormatados = persons.map((personagem) => {
    return {
        fullName: `${personagem.firstName} ${personagem.lastName}`,
        birthDay: new Intl.DateTimeFormat('pt-BR').format(personagem.birthDay)
    }
})

// console.table(personagensFormatados)

// --> Array.filter

// const onlyJedis = persons.filter(personagem => {
//     return personagem.jedi;
// });

const onlyJedis = persons.filter(personagem => personagem.jedi)

// console.log(onlyJedis)

// -> Array.find

const personFind = persons.find(personagem => personagem.jedi)

// console.log(personFind)

// -> Array.some

// console.log(persons.some(personagem => personagem.jedi));

// -> Array.every

// console.log(persons.every(personagem => personagem.jedi));

// -> Array.reduce
/*

The reduce method is a double-edged sword, as explained by a Google Developers video: 

https://www.youtube.com/watch?v=qaGjS7-qWzg

On the one hand, the reduce method is handy (util)
On the other hand, it might reduce the readability (see the pun?)
*/

let nomes = '';

persons.forEach(personagem => {
    nomes += personagem.firstName
})

// console.log(nomes)