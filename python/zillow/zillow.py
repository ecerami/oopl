"""Zillow Example."""

from property import Land, SingleFamilyHome, Person

person = Person("Ethan", "Cerami")
lot1 = Land("Houston", "Texas", "77001", 100_000, 3)
lot2 = Land("Houston", "Texas", "77002", 200_000, 1)

house1 = SingleFamilyHome("Houston", "Texas", "77001",
                          200_000, 3, 2)
house2 = SingleFamilyHome("Houston", "Texas", "77001",
                          250_000, 2, 1)

lot1.describe()
lot2.describe()
house1.describe()
house2.describe()

print(f"Lot1 sold status = {lot1.sold}")
lot1.buy(person, 50_000)
print(f"Lot1 sold status = {lot1.sold}")
lot1.buy(person, 100_000)
print(f"Lot1 sold status = {lot1.sold}")
