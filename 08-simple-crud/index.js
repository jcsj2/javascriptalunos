const express = require('express')

const PORT = 3000

const app = express()
app.use(express.json())

const games = []

app.route('/games').post((req, res) => {
    const { body } = req

    const nextId = games[games.length - 1]?.id + 1 || 1;
    games.push({
        id: nextId,
        ...body
    })

    res.status(201).setHeader('Location', `http://localhost:3000/games/${nextId}`).send()
}).get((_, res) => {
    res.json(games)
})

app.route('/games/:id').get((req, res) => {
    const { params } = req

    const game = games.find(game => game.id === +params.id)
    if (!game) {
        res.sendStatus(404)
        return;
    }

    res.json(game)
}).delete((req, res) => {
    const { params } = req

    const gameIndex = games.findIndex(game => game.id === +params.id)
    if (gameIndex < 0) {
        res.sendStatus(404)
        return;
    }

    games.splice(gameIndex, 1)
    res.send()
}).put((req, res) => {
    const { params, body } = req

    const gameIndex = games.findIndex(game => game.id === +params.id)
    if (gameIndex < 0) {
        res.sendStatus(404)
        return;
    }

    games[gameIndex] = {
        id: +params.id,
        ...body
    }

    res.send()
})


app.listen(PORT, () => {
    console.log(`Servidor iniciou na porta ${PORT}`)
})