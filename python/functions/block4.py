# You can also specify an arbitary number of arguments
# These are frequently specified as *args
def make_pizza(size, *toppings):
    """Summarize the pizza we are about to make."""
    print(f"\nMaking a {size}-inch pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")

# When we call make_pizza, "pepperoni" and "mushrooms" are 
# merged into a list and passed to *toppings
make_pizza("16", "pepperoni", "mushrooms")