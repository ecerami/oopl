class Customer {
    public name: string;
    public isActive:  boolean;

    public constructor(name: string){
        this.name = name;
        this.isActive = true;
    }

    public announce(): string {
        return "Hello, my name is " + this.name + ".";
    }
}

let customer = new Customer("Bob");
console.log(customer.announce());

