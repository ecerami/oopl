# Removing Elements by Value

# Note that we now have two apples
fruits = ["orange", "apple", "banana", "apple"]
print(fruits)

# Let's remove "apple"
# Important to note:  this only removes the first apple
# if you want to remove both apples, call remove twice!
fruits.remove("apple")
print(fruits)