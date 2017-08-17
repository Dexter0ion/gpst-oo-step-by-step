var events = require('events');
var eventEmitter = new events.EventEmitter();
// Write your code here
module.exports = class Class {

    constructor(num) {
        this.num = num;
        this.students = [];
    }
    appendMember(student) {

        this.students.push(student);
    }
    assignLeader(student) {
        if (this.hasStudent(student)) {
            this.leader = student.name;
            return('Assign team leader successfully.');
        }

        else if (!this.hasStudent(student)) {
            return('It is not one of us.');
        }

        event.emit('leader_assigned');
    }


    hasStudent(student) {
        var stuStatus = false;
        for (var i in this.students) {
            if (student.name === this.students[i].name) {
                stuStatus = true;
            }
        }

        return stuStatus;
    }

    declareLeader(student) {
        var leaderStr;
        if (this.hasStudent(student)) {

            
            if (this.leader === student.name) {
                leaderStr = 'I am Leader of Class ' + this.num;

            }
            else{
            leaderStr = 'I am at Class ' + this.num;
            }

        }
        else if (!this.hasStudent(student)) {
            leaderStr = 'I haven\'t been allowed to join Class';
        }
        return leaderStr;
    }
}