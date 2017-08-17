const Person = require('./person');

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
        if (this.countMember(clazzes) === 0) {
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
}