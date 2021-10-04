import requests

# See:  https://github.com/chubin/wttr.in
url = "https://wttr.in/London?format=j1"

print(f"Getting live data from {url}.")
r = requests.get(url)
json = r.json()
current = json["current_condition"][0]
print (f"Current temp:  {current['temp_F']}")
