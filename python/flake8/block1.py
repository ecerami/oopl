"""A program to determine the user's age."""


def get_age():
    """Prompt the user for their age."""
    age = input("How old are you? ")
    return age


age = get_age()
future_age = age + 10
print(f"You are {age} years old.")
print(f"In ten years, you will be {future_age}")
print("Have a nice life.")
