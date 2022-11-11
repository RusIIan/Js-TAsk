// class Employee{
//     constructor(name, salary, time) {
//      this.name = name;
//      this.salary = salary;
//         this.time = time;
// }

// }
// let employee = new Employee("Ruslan", 1500, 12.23);
// console.log(employee)


let arrFruts = ['apple', 'banan', 'orange', 'kiwi'];
let fruts = document.getElementById("fruts");
arrFruts.forEach((frt) => {
    let list = document.createElement('ul,li');
    list.innerText = frt;
})
