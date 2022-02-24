# What about capturing all exceptions?
try:
    print (5/0)
except Exception as e:
    print("Something went wrong:  ", e)
