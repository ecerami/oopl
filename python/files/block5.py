filename = 'data/programming.txt'

# Here we write to a new file.
# If we use 'a', we would append to an existing file.
with open(filename, 'w') as f:
    f.write("I love Java.\n")
    f.write("I love Python.\n")
