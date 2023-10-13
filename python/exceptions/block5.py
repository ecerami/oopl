"""Exception Example."""

# What about capturing all exceptions?
# This will work, but not recommended.
try:
    print (5/0)
except Exception as e:
    print("Something went wrong:  ", e)
