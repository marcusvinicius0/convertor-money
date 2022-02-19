class Person {
    constructor(name, age){
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }
    
    talk(){ // MÉTODO
        console.log(`Hello, I'm ${this.name} and I'm ${this.age}`)
    }
}

const newPerson = new Person("Marcus", 22) 
const newPerson2 = new Person("Jason", 20)
newPerson.talk()