const axios = require('axios')

const apiService = axios.create({
    baseURL: 'http://animechan.vercel.app/api'
});

async function getRandomQuote() {
    try {
        const response = await apiService.get('/random')
        console.log(response.data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Imprimindo pq sou enxirido')
    }

}
getRandomQuote()

// 

function getRandomQuotePromise() {
    return apiService.get('/random');
}

const promises = [getRandomQuotePromise(), getRandomQuotePromise(), getRandomQuotePromise()]

Promise.all(promises).then(results => {
    results.forEach(result => {
        console.log(result.data)
    })
})

// const results = await Promise.all(promises)
// results = Array onde cada posição será na sequencia de chamada com o resultado

// como criar uma promise? ->
/* const promise = new Promise((resolve, reject) => {

    if (urlOK) {
        resolve(response)
    } else {
        reject(errror)
    }

})
*/