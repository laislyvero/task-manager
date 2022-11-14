class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. Iam ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}
class Student extends Person {//the clsss user will try to get information from the person
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        let getDescription = super.getDescription();
        return `${getDescription} and studies ${this.major}`;
    }
}
const student1 =  new Student("jeff", 21, "business");
console.log(student1.hasMajor());