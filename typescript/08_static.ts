enum cupSize {small, medium, large};

/**
 * Coffee Order.
 */
 class CoffeeOrder {
    private coffeeType: string;
    private coffeeSize: cupSize; 
    public static numOrders: number = 0;

    constructor(coffeeType: string, coffeeSize: cupSize) {
        this.coffeeType = coffeeType;
        this.coffeeSize = coffeeSize;
        CoffeeOrder.numOrders++;
    }
 }

 let order0 = new CoffeeOrder("Cappuccino", cupSize.large);
 let order1 = new CoffeeOrder("Americano", cupSize.medium)

 console.log("Total number of orders:  " + CoffeeOrder.numOrders)

 