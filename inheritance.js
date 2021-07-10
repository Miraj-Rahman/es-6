// class Parent {
//     constructor() {
//         this.fatherName = 'Schwerznegger'
//     }
// }
// class Child extends Parent {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }

// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby);
// console.log(baby2);

class Parent {
    constructor() {
        this.parentName = 'Najib'
    }
}

class Child extends (Parent) {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.parentName;
    }
}
const baby = new Child('orian');
const baby2 = new Child('Donald');
console.log(baby);
console.log(baby2.getFullName());