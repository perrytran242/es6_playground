import addToDom from './add_to_dom';

class Person{
    constructor(name){
        this.name = name;
    }
    talk(message){
        addToDom('h1', `${this.name} says: ${message}`);
    }
    greet(){
        this.talk(`Hi my name is ${this.name}`);
    }
}
// calling super calls the parents class constructor
// do not to have a constructor in a class.
class SuperPerson extends Person {
    constructor(name, superPower) {
        super(name);
        this.superPower = superPower;
    }
    saySuperPower() {
        this.talk(`My super power is ${this.superPower}`);
    }
}

export default SuperPerson;