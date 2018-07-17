'use strict'

import Person from "../practice_1/person";

class Teacher extends Person {
    constructor(number, name, age, klass) {
        super(name, age);
        this.number = number;
        this.klass = klass;
    }

    introduce() {
        if (this.klass != null)
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${this.klass.getDisplayName()}.`);
        else return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`)
    }
    introduceWith(student) {
        if (this.klass.getDisplayName()==student.klass.getDisplayName())
            return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${student.name}.`);
        else return (`My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I don't teach ${student.name}.`)
    }

}

export default Teacher;


