'use strict'
class Person{
    constructor(number, name ,age)
    {
        this.name = name ;
        this.age = age;
        this.number = number;
    }
    introduce() {
        return (`My name is ${this.name}. I am ${this.age} years old.`)
    }
}
export default Person;



