# requests is a Python package that you must install...
import requests

# A JSON Placeholder that returns fake data
url = "https://jsonplaceholder.typicode.com/posts"

print(f"Getting live data from {url}.")
r = requests.get(url)
posts = r.json()
for post in posts[:5]:
    print(f"{post['title']}")
    print(f".. Written by:  user_id:  {post['userId']}")