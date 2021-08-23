"""Property and Location Classes."""


class Property:
    """Property Base Class."""

    def __init__(self, city, state, zip_code, price):
        """Init Property with core attributes."""
        self.location = Location(city, state, zip_code)
        self.price = price
        self.sold = False

    def buy(self, person, offer_price):
        """Attempt to buy the property."""
        if (offer_price >= self.price):
            self.sold = True
            self.owner = person
            print("Sold!")
        else:
            print("Offer rejected!")

    def describe(self):
        """Describe the property."""
        pass


class SingleFamilyHome(Property):
    """Single Family Home Class."""

    def __init__(self, city, state, zip_code, price, num_bedrooms, num_baths):
        """Init Home with core attributes."""
        super().__init__(city, state, zip_code, price)
        self.num_bedrooms = num_bedrooms
        self.num_baths = num_baths

    def describe(self):
        """Describe the property."""
        print(f"{self.num_bedrooms}-bedroom home in {self.location.city}.")


class Land(Property):
    """Land class."""

    def __init__(self, city, state, zip_code, price, num_acres):
        """Init Land with core attributes."""
        super().__init__(city, state, zip_code, price)
        self.num_acres = num_acres

    def describe(self):
        """Describe the property."""
        print(f"{self.num_acres}-acre lot in {self.location.city}.")


class Location:
    """Geographic Location."""

    def __init__(self, city, state, zip_code):
        """Init Location with core attributes."""
        self.city = city
        self.state = state
        self.zip_code = zip_code


class Person:
    """A Person."""

    def __init__(self, first, last):
        self.first = first
        self.last = last
