# Tuples are immutable lists
# That means that you cannot change their content

# Here is a list
# We can change it's contents
dimensions = [200, 50]
dimensions[0] = 0
print(dimensions)

# Here is a tuple
dimensions = (200, 50)
print(dimensions)
