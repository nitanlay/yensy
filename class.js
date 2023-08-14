// const user ={
//     name: "Ryan",
//     lastname: "Ray",
//     age: 30,
//     hobbies: ["read", "programming","run"] ,
//     address:{
//         street:"some street",
//         city:"london"
//     }
// }

// console.log (user)

// function showFullName() {
//     return "Ryan Ray"
// }

// const user = {
//     name: "Ryan", //propiedades de los objetos
//     lastname: "Ray",//
//     age: 30,//
//     showFullName:function () {
//         return "Ryan Ray"
//     }
// }

// console.log(user.showFullName())

// const user = {
//     name: "Ryan", //propiedades de los objetos
//     lastname: "Ray",//
//     age: 30,//
//     showFullName() {
//         return "Ryan Ray"
//     }
// }

// console.log(user.showFullName())

// const user = {
//     name: "hector", //propiedades de los objetos
//     lastname: "robayo",//
//     age: 30,//
//     showFullName() { //metodo
//         return this.name + " " + this.lastname
//     }
// }

// console.log(user.showFullName())

// const account = {
//     number: "240251261785",
//     amount:500,
//     deposit() {
//         this.amount = this.amount + 100
//     },
//     withdraw(){
//         this.amount = this.amount - 200
//     }
// }

// account.deposit()
// account.deposit()
// account.deposit()


// console.log (account)

// account.withdraw()
// account.withdraw()

// console.log (account) 

// const account = {
//     number: "240251261785",
//     amount:500,
//     deposit(quantity) {
//         this.amount = this.amount + quantity
//     },
//     withdraw(quantity){
//         this.amount = this.amount - quantity
//     }
// }

// account.deposit(100)
// account.deposit(70)
// account.deposit(210)


// console.log (account)

// account.withdraw(20)
// account.withdraw(400)

// console.log (account)

// const user = {
//     name: "hector", //propiedades de los objetos
//     lastname: "robayo",//
//     age: 30,//
//     showFullName() { //metodo
//         return `${this.name} ${this.lastname}`
//     }
// }

// console.log(user.showFullName())

// //constructor
// function Person () { //el nombre lleva la primera en mayuscula para poder diferenciarlo como un constructor o plantilla
//     this.name = " "
//     this.lastname = " "
//     this.age = 0
//     this.showFullName = function() { //la palabra function se debe poner ya que sin ella no se podria ejecutar
//         return `${this.name} ${this.lastname}`
//     } 
// }

// const user2 = new Person ()
// user2.name = "Joe"
// user2.lastname = "McMillan"
// user2.age = 30
// console.log (user2.showFullName())

// const user3 = new Person ()
// user3.name = "Cameron"
// user3.lastname = "Howe"
// console.log (user3.showFullName())

// const user4 = new Person ()

// const user5 = new Person ()


// console.log (user2)
// console.log (user3)
// console.log (user4)
// console.log (user5)

// const user ={
//     name: "Ryan",
//     lastname: "Ray",
//     age: 40,
//     showName() {
//         return this.name;
//     }
// }

// console.log(Object.values(user))

// function FabricaDeGalletas (name,flavor) {
//     this.name = name
//     this.flavor = flavor
//     this.cookie = function (){
//         return `${this.name} ${this.flavor}`
//     }
// }

// const chocoCookie = new FabricaDeGalletas("negrita","chocolate")


// console.log (chocoCookie.cookie())

function Person (name,lastname) {
    this.name =name
    this.lastname = lastname
    this.displayName = function () {
        return `${this.name} ${this.lastname}`
    }
}

const john = new Person ("John", "MacMillan")
john.name = "joe"
console.log (john.displayName())

const mario = new Person ("Mario", "Rossi")
const maria = new Person ("Maria", "Lopez")
const jose = new Person ("Jose", "Perez")


john.greet = function (){
    return `Hello I'am ${this.name}`
}

console.log (john.greet())

Person.prototype.greet = function() {
    return `Hello I'am ${this.name}`
}

console.log (mario.greet())
console.log (maria.greet())
console.log (jose.greet())

const s = new String ("hello world")

String.prototype.concatText = function () {
    return this + "test";
}

console.log (s.concatText ())



function Person3 (name,lastname) {
    this.name =name
    this.lastname = lastname
    this.displayName = function () {
        return `${this.name} ${this.lastname}`
    }
}
class ToDo {
    constructor(action) {
        this.action = action
    }
    actionTime(time) {
        return `tomara alrededor de ${time} dias`
    }
}
class Worker extends ToDo {
    constructor(action, name, lastname) {
        super(action)
        this.name = name
        this.lastname = lastname
        // this.action = action
    }
    nit = Math.random() * 10
    showNit () {
        return `Hola ${this.name}  y su accion sera: ${this.action} y ${super.actionTime(this.nit)}`
    }
}

class Factory extends Worker {
    constructor(action, name, lastname,post) {
            super(action,name,lastname)
            this.post = post
        }
        showInfo (){
            return super.showNit()+" con el cargo " + this.post
        }
}

const juan = new Factory ("caminar", "hector", "robayo","desarrollador")
console.log (juan.showInfo())
