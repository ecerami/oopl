# Another List Comprehension
fruits = ["mango", "kiwi", "strawberry", "pineapple"]
output = []
for fruit in fruits:
    output.append(fruit.upper())
print(output)

output = [fruit.upper() for fruit in fruits]
print(output)
