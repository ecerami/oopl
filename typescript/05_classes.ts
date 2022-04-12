class Customer {
    name: string;
    isActive:  boolean;

    constructor(name: string){
        this.name = name;
        this.isActive = true;
    }

    announce() {
        return "Hello, my name is " + this.name + "."
    }
}

let customer = new Customer("Bob");
console.log(customer.announce());

