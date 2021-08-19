# By default, input() returns a string.
# But, you can easily cast to an integer via the int() method.

number = input("Enter a number, and I'll tell you if it's even or odd: ")

# Cast the string to an int
number = int(number)

# Here, we use the modulo operator.
# It returns the remainder after division.
if number % 2 == 0:
    print(f"\nThe number {number} is even.")
else:
    print(f"\nThe number {number} is odd.")
