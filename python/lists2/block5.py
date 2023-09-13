# This is a special slice that clones
# the entire list
people = ['anna', 'alex', 'nhat', 'shuto', 'luis']  

# Slice Syntax:  a[start:stop]
print("Here's a slice:")
for person in people[:]:
    print(person.title())