import { Person } from './modules/person';
import { Pet } from './modules/pet';

export class Main {
    constructor() { }
    hello() {
        let person1 = new Person('Allen', 12);
        let pet1 = new Pet('dog');
        let person2 = new Person('Bob', 10);

        person1.pets.push(pet1);
        pet1.owner = person1;

        console.log(person1.name);
        console.log(person1.pets[0].name);
    }
}

new Main().hello();
