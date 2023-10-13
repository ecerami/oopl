"""Using Requests + JSON."""

# requests is a Python package that you must install...
import requests

# A JSON Placeholder that returns fake data
POSTS_URL = "https://jsonplaceholder.typicode.com/posts"

print(f"Getting live data from {POSTS_URL}.")
r = requests.get(POSTS_URL, timeout=60)
posts = r.json()
for post in posts[:5]:
    print(f"{post['title']}")
    #print(f".. Written by:  user_id:  {post['userId']}")
