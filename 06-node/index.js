console.log('Hello NodeJS')
console.log(__dirname)

const os = require('os')

// console.log(os.arch())
// console.log(os.cpus())

const path = require('path')

const caminhoArquivo = path.join(__dirname, 'temp.txt')
// console.log(caminhoArquivo)

const fs = require('fs/promises')

fs.readFile(caminhoArquivo, 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
})