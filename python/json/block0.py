import json

# A JSON file with fake data
filename = "json/data/posts.json"

with open(filename) as f:
    posts = json.load(f)
    for post in posts[:5]:
        print(f"{post['title']}")
        print(f".. Written by:  user_id:  {post['userId']}")

# Note that you can also write JSON via json.dump() method.