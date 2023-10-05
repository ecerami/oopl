"""Zillow Example."""

from property import HomeForRent, HomeForSale, Owner

owner = Owner("Ethan", "Cerami")

house1 = HomeForRent("Houston", "Texas", "77001", owner, 2000)
house1.add_room("Bedroom")
house1.add_room("Bedroom")
house1.add_room("Bathroom")
house2 = HomeForSale("Houston", "Texas", "77001", owner, 200_000)
house2.add_room("Bedroom")
house2.add_room("Bathroom")

print(house1.get_description())
print(house2.get_description())
