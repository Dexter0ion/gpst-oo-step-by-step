const Person = require('./person');

module.exports = class Worker extends Person{
    constructor(name,age){
        super(name,age)
    }

    introduce(){
        var introStr='My name is '+this.name+'. I am '+this.age+' years old. I am a Worker. I have a job.'
        return introStr;
    }

}