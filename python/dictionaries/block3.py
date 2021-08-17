# Illustrates how to iterate all items in a dict

user_0 = {
    'username': 'efermi',
    'first': 'enrico',
    'last': 'fermi',
    }

for key, value in user_0.items():
    print(f"\nKey: {key}")
    print(f"Value: {value}")

# Note that you can also use user_0.keys()
# or user_0.values()