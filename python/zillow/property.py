"""Home Classes."""


class Home:
    """Home Base Class."""

    def __init__(self, city, state, zip_code, owner):
        """Init Property with core attributes."""
        self.city = city
        self.state = state
        self.zip_code = zip_code
        self._room_list = []
        self.owner = owner

    def add_room(self, room_name):
        """Add a new Room."""
        room = Room(room_name)
        self._room_list.append(room)

    def get_description(self):
        """Describe the property."""
        property_str = f"{len(self._room_list)}-room property "
        property_str += f"located at: {self.city}, {self.state}, {self.zip_code}.  "
        property_str += f"Owned by {self.owner.first_name} {self.owner.last_name}"
        return property_str


class HomeForSale(Home):
    """Home for Sale"""

    def __init__(self, city, state, zip_code, owner, price):
        """Constructor."""
        super().__init__(city, state, zip_code, owner)
        self.price = price

    def get_description(self):
        """Describe the property."""
        return f"Home for sale, {super().get_description()}"


class HomeForRent(Home):
    """Home for Rent"""

    def __init__(self, city, state, zip_code, owner, monthly_rent):
        """Constructor."""
        super().__init__(city, state, zip_code, owner)
        self.monthly_rent = monthly_rent

    def get_description(self):
        """Describe the property."""
        return f"Home for rent, {super().get_description()}"


class Room:
    """Room Class."""

    def __init__(self, room_name):
        self.room_name = room_name


class Owner:
    """Owner Class."""

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
