# Example of type annotations, as defined by PEP 484
def add(a: int, b: int) -> int:
    return a + b

# This is ok as both parameters are ints
sum = add (10, 25)
print(sum)

# This would be flagged by pytype as a violation
sum = add ("10", "25")
print(sum)