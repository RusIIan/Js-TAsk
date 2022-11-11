class Employee{
    constructor(name, salary,time) {
        this.name = name;
        this.salary = salary;
        this.time = time;
    }
}
class Manager extends Employee {
    Hire() {
        console.log('Hi I am menager my name' + this.name);
    }
}
let man1 = new Manager('Ruslan', 3500, '10 years');
man1.Hire();