# Illustrates how to update key/value pairs

alien_0 = {"x_position": 0, "y_position": 25, "speed": "medium"}
print(f"Original position: {alien_0['x_position']}")

alien_0["x_position"] = alien_0["x_position"] + 5
print(f"New position: {alien_0['x_position']}")
