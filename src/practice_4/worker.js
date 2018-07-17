'use strict'

class Worker {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return (`My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`)
    }
}

export default Worker;

