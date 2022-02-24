const alphabet = ['a', 'b', 'c', 'd', 'e']
const numbers = ['1', '2', '3', '4', '5']

const [, token] = 'Bearer aosomdia9.g5g45g54g4g.g45g45g54g'.split(' ')
// console.log(token)

const [a,,terceiraLetra] = alphabet
// console.log(a)

// spread / rest operator ...
const [,segundaLetra,, ...restante] = alphabet

// console.log(segundaLetra)
// console.log(restante)

const all = [...alphabet, ...numbers]
// console.log(all)


const nickName = 'SilentStorm'

const user = {
    username: 'josec',
    email: 'jose@email.com',
    password: '1234',
    type: undefined,
    endereco: {
        rua: 'Rua tal'
    },
    nickName
}

const {username, password, endereco: { rua }, nickName: nick} = user
console.log(username, password, rua, nick)
const { password: senha, type = 'USER' } = user
// console.log(senha, type)

function printUser({username, email}) {
    console.log(`Usuário '${username}' com email '${email}' acessou o sistema`)
}

printUser(user)