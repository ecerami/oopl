"""JSON Example."""
import json

# A JSON file with fake data
POSTS_FILE = "json/data/posts.json"

with open(POSTS_FILE, encoding="utf-8") as f:
    posts = json.load(f)
    for post in posts:
        print(f"{post['title']}")
        print(f".. Written by:  user_id:  {post['userId']}")

# Note that you can also write JSON via json.dump() method.
