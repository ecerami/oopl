# This is a special slice that clones
# the entire list
players = ['charles', 'martina', 'michael', 'florence', 'eli'] 

print("Here's a slice:'")
for player in players[:]:
    print(player.title())