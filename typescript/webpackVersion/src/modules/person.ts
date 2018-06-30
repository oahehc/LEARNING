import { Pet } from './pet';
export class Person {
    name: string;
    age: number;
    pets: Pet[];
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.pets = [];
    }
}