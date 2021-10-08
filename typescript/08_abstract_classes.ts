
/**
 * Employee Class, declared as Abstract
 */
 abstract class Employee {
     private firstName: string;
     private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Abstract Method.
     */
    abstract getSalary(): number

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    
    getCompensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
 }

 class FullTimeEmployee extends Employee {
     private salary: number;
    
    constructor(firstName: string, lastName: string, salary: number) {
        super(firstName, lastName);
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee {
    private rate: number;
    private hours: number;
    
    constructor(firstName: string, lastName: string,
        rate: number,  hours: number) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }

    getSalary(): number {
        return this.rate * this.hours;
    }
}

 // The commented line directly below will fail.  
 // Not possible to instantiate an abstract class.
 // let employee = new Employee('John','Doe');
 
 let employee = new FullTimeEmployee("John", "Smith", 1000);
 let contractor = new Contractor("Jane", "Doe", 30, 10);

 console.log(employee.fullName)
 console.log(employee.getCompensationStatement())

 console.log(contractor.fullName)
 console.log(contractor.getCompensationStatement())
