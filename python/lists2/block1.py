# We can use range() to define a range of numbers
for number in range(0, 10):
    print (number)

# We can also create a list from range()
# Here we "step by 2"
even_numbers = list(range(0, 10, 2)) 
print(type(even_numbers))
print(even_numbers)