'use strict'

class Student {
    constructor(name, age, klass) {
        this.name = name;
        this.age = age;
        this.klass = klass;
    }

    introduce() {
        return (`My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at ${this.klass.getDisplayName()}.`)
    }
}

export default Student;