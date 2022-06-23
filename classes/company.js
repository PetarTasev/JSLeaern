class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (name === "" || name == undefined || name == null) {
      throw Error("Invalid input!");
    }
    if (salary === "" || salary == undefined || salary == null) {
      throw Error("Invalid input!");
    }
    if (position === "" || position == undefined || position == null) {
      throw Error("Invalid input!");
    }
    if (department === "" || department == undefined || department == null) {
      throw Error("Invalid input!");
    }
    if (Number(salary) < 0) {
      throw Error('Invalid input!');
    }

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
    }
    this.departments[department].push({ name: name, salary: Number(salary), position: position });
    
    return `New employee is hired. Name: ${name}. Position: ${position}`
  }

  look() {
    
  }
  bestDepartment() {
    let avg = 0;
    let sum = 0;
    let maxDepartment = ''

    const keys = Object.keys(this.departments)
    for (let key of keys) {
        for (let worker of this.departments[key]) {
            sum += worker.salary
        }
         sum = sum / this.departments[key].length
        if (sum > avg) {
            avg = sum
            maxDepartment = key
        }
        sum = 0
    }

    let result = []
    result.push(`Best Department is: ${maxDepartment}`)
    let calc = (avg).toFixed(2)
    result.push(`Average salary: ${calc}`)

    let test = this.departments[maxDepartment]
    test.sort((a,b) => {
        if (a.salary === b.salary) {
           return  a.name.localeCompare(b.name)
        }
           return   b.salary - a.salary
    })
    for (let employe of test) {
        result.push (employe.name + " " + employe.salary + " " + employe.position)
    }
    
    return result.join('\n')
  }
}

let c = new Company();

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");


console.log(c.bestDepartment());
