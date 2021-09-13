# You can store lists inside of dicts!

# Store information about a pizza being ordered.
toppings = ["mushrooms", "extra cheese"]
pizza = {
    "crust": "thick",
    "toppings": toppings,
}

# Summarize the order.
print(f"You ordered a {pizza['crust']}-crust pizza "
    "with the following toppings:")

for topping in pizza['toppings']:
    print("- " + topping)
