# You can even store dicts inside of other dicts!

einstein = {
    "first": "albert",
    "last": "einstein",
    "location": "princeton",
}

mcurie = {
    "first": "marie",
    "last": "curie",
    "location": "paris",
}

users = {
    "aeinstein": einstein,
    "mcurie": mcurie
}

for username, user_info in users.items():
    full_name = f"{user_info['first']} {user_info['last']}"
    print(f"Full name: {full_name.title()}")
