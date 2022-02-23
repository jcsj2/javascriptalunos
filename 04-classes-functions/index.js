class Client {
    
    constructor(firstName, lastName, email, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._email = email;
        this.phoneNumber = phoneNumber;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    static buildSimpleClient(firstName, phoneNumber) {
        return new Client(firstName, null, null, phoneNumber);
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(novoEmail) {
        this._email = novoEmail.trim()
    }

}

const jose = new Client('Jose', 'Silva', 'jose@email.com', '8181818');

console.log(jose)
console.log(jose.email)

jose.email = 'novoemail@email.com'

console.log(jose.email)
console.log(jose.getFullName())

const maria = Client.buildSimpleClient('Maria', '3343455');

console.log(maria)

/*
function soma(a, b) {
    return a + b
}

console.log(soma(4, 6))
*/

function construirNovoCliente(firstName, lastName) {
    return new Client(firstName, lastName);
}

const joao = construirNovoCliente('Joao', 'Silva')

console.log(joao)