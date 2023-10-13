"""Exception Example."""

# Let's catch the exception and fail more gracefully!
try:
    print (5/0)
except ZeroDivisionError:
    print("You cannot divide by zero.  Aborting!")

print("OK")
