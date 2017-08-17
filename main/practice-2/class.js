
// Write your code here
module.exports = class Class {

    constructor(num) {
        this.num = num;
    }
    assignLeader(student) {
        this.leader = student.name;
    }

    declareLeader(leaderName){
        var leaderStr;
        if(this.leader===leaderName){
            leaderStr = 'I am Leader of Class '+this.num;
            
        }  
        else{
            leaderStr = 'I am at Class '+this.num;
        }
        return leaderStr;
    }
}