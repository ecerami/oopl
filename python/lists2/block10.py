# Another List Comprehension
fruits = ["mango", "kiwi", "strawberry", "pineapple"]

# Do in verbose mode
output = []
for fruit in fruits:
    output.append(fruit.upper())
print(output)

# Redo as list comprehension
output = [fruit.upper() for fruit in fruits]
print(output)
