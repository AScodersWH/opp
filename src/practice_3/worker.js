'use strict'
class Worker{
    constructor(name ,age ){
        this.name = name;
        this.age =age;
    }
    introduce  (){
        return (`I am a Worker. I have a job.`)
    }
}
export default Worker ;

