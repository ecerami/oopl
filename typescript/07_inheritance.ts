/**
 * Base Car Class.
 */
class Car {
    protected make: string;
    protected model: string;
    protected year: number;

    /**
     * Initialize.
     */
    constructor (make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    /**
     * Gets Descriptive Summary of Car.
     */
    public get_descriptive_name(): string {
        return `${this.make} ${this.model} ${this.year}`;
    }

}

/**
 * ElectricCar Extends Base Car Class.
 */
class ElectricCar extends Car {
    private batterySize: number;

    constructor (make: string, model: string, year: number, 
        batterySize: number) {
        super(make, model, year);
        this.batterySize = batterySize;
    }

    /**
     * Over-ride get_descriptive_name.
     */
    public get_descriptive_name(): string {
        let desc = `${this.make} ${this.model} ${this.year} `
        desc += `[${this.batterySize}-kWh battery]`
        return desc;
    }
}

let car0 = new Car("Toyota", "Camry", 2019)
console.log(car0.get_descriptive_name())

let car1 = new ElectricCar ("Tesla", "Model S", 2021, 75)
console.log(car1.get_descriptive_name())
