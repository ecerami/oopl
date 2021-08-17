# Tuples are immutable lists
# That means that you cannot change their content

# But, let's try and see what happens!
dimensions = (200, 50)
dimensions[0] = 0
print(dimensions)
