import { Person } from './person';

export class Pet {
    name: string;
    private _owner: Person;

    constructor(name: string) {
        this.name = name;
    }

    get owner(): Person {
        return this._owner;
    }
    set owner(person: Person) {
        if (!this._owner) {
            this._owner.pets = this._owner.pets.filter(pet => pet !== this);
        }
        this._owner = person;
    }
}