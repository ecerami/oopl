# Illustrates how to extract a list slice
people = ['anna', 'alex', 'nhat', 'shuto', 'luis']

# Slice Syntax:  a[start:stop]
print("Here is a slice:")
for person in people[0:3]:
    print(person.title())
