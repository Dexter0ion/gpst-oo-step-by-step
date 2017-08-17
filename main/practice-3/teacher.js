const Person = require('./person');
var events = require('events');
var eventEmitter = new events.EventEmitter();
module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
    }


    introduce() {
        var introStr = 'My name is ' + this.name + '. I am ' + this.age + ' years old. I am a Teacher. ' + this.declareAdminClazz(this.clazzes) + '.';
        return introStr;
    }

    declareAdminClazz(clazzes) {
        var adminClazzStr = '';
        if (this.countMember(clazzes) > 0) {
            adminClazzStr += 'I teach Class '
            for (var i in clazzes) {
                adminClazzStr += clazzes[i].num;
                if (i != this.countMember(clazzes) - 1) {
                    adminClazzStr += ','
                }
            }
        }
        else if (this.countMember(clazzes) === 0) {
            adminClazzStr += 'I teach No Class'
        }

        return adminClazzStr;
    }

    //数组成员个数检测
    countMember(o) {
        var t = typeof o;
        if (t === 'string') {
            return o.length;
        } else if (t === 'object') {
            var n = 0;
            for (var i in o) {
                n++;
            }
            return n;
        }

        return false;
    }

    isTeaching(student) {
        if (this.countMember(this.clazzes) > 0) {
            for (var i in this.clazzes) {
                if(this.clazzes[i].hasStudent(student)){
                    return true;
                }
            }
        }
        else if (this.countMember(this.clazzes) === 0) {
            return false;
        }

        return false;
    };
    

    /*
    notifyLeaderAssigned(){
            event.on('leader_assigned',function(){
                console.log( 'I am Tom. I know Jerry become Leader of Class 2.');

    });
            
    }

    notifyStudentAppended(
    ){
        return 'I am Tom. I know Jerry has joined Class 2.';
    }
    */
}