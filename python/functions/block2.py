"""
Parameters can have defaults.
"""

def greet_user(name, time_of_day="morning"):
    print(f"Good {time_of_day}, {name}!")

greet_user("Bob")
greet_user("Bob", "evening")
