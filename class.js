class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa School"
    }
}

const student1 = new Student(12, 'shuvo');
const student2 = new Student(22, 'mahiya');
const student3 = new Student(24, 'Bappi');
// console.log(student3);

class Employee {
    constructor(eId, eName, eFloor) {
        this.section = "Knitting";
        this.id = eId;
        this.name = eName;
        this.floor = eFloor;
    }
}

const em1 = new Employee(01, 'baker', 2);
const em2 = new Employee(02, 'tarek', 3);
// console.log(em1, em2);

class Patient {
    constructor(pbed, pposition, pdisease) {
        this.ward = 5;
        this.bed = pbed;
        this.position = pposition;
        this.disease = pdisease;
    }
}

const pnt1 = new Patient(3, 'critical', 'cancer');
const pnt2 = new Patient(4, 'average', 'diabetic');
console.log(pnt1.disease, pnt2.disease);