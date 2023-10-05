"""Car Module."""
class Car:
    """Car Class."""

    def __init__(self, make, model, year):
        """Initialize Car."""
        self.make = make
        self.model = model
        self.year = year

    def get_description(self):
        """Get a full description of the car."""
        return f"{self.year} {self.make} {self.model}"


class ElectricCar(Car):
    """Represent aspects of a car, specific to electric vehicles."""

    def __init__(self, make, model, year, battery_size):
        """
        Initialize attributes of the parent class.
        Then initialize attributes specific to an electric car.
        """
        super().__init__(make, model, year)
        self.battery_size = battery_size

    def get_description(self):
        """Over-ride the get_description() method;  this is polymorphism."""
        return f"{super().get_description()}, battery={self.battery_size}-kWh"


#honda = Car("Honda", "CRV", 2023)
#print(honda.get_description())


tesla = ElectricCar("Tesla", "Model 3", 2023, 75)
print(tesla.get_description())
