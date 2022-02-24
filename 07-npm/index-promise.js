// https://nodejs.dev/learn/semantic-versioning-using-npm

const axios = require('axios')

const response = axios.default.get('https://pokeap.co/api/v2/pokemon/pikachu')

response.then(response => {
    console.log(response.data);

    // anti pattern Callback Hell - vale a pena estudar sobre

}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('Acabou independentemente de ser sucesso ou erro')  
})