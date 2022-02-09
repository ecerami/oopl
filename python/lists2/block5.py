# This is a special slice that clones
# the entire list
people = ['adbi', 'mustafa', 'david', 'kim', 'alex']  

print("Here's a slice:")
for person in people[:]:
    print(person.title())