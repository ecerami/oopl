# This is a special slice that clones
# the entire list
people = ['anna', 'alex', 'nhat', 'shuto', 'luis']  

print("Here's a slice:")
for person in people[:]:
    print(person.title())