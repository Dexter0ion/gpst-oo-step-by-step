const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name,age,objklass){
        super(name,age);
        this.clazz = objklass;
    }

    introduce(){
        return 'My name is '+this.name+'. I am '+this.age+' years old. I am a Student. '+this.clazz.declareLeader(this)+'.'
    }
}