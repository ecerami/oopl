# Illustrates how to extract an array slice
people = ['anna', 'alex', 'nhat', 'shuto', 'luis']  

# Slice Syntax:  a[start:stop]
print("Here's a slice:")
for person in people[0:-2]:
    print(person.title())
