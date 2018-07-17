'use strict'

class Student {
    constructor(number, name, age, klass) {
        this.number = number;
        this.name = name;
        this.age = age;
        this.klass = klass;
    }

    introduce() {
        if(this.klass.leader==null)
        return (`My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at ${this.klass.getDisplayName()}.`);
        else return (`My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of ${this.klass.getDisplayName()}.`)
    }
}

export default Student;