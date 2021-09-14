# Let's see what happens when we try keys that don't exist
alien_0 = {"color": "green", "points": 5}

# Here we use get instead
color = alien_0.get("colour")
print (color)

# Here we use get with a default value
color = alien_0.get("colour", "blue")
print (color)