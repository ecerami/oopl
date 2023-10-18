"""Using Requests + JSON."""
import requests

# See:  https://github.com/chubin/wttr.in
WEATHER_URL = "https://wttr.in/Miami?format=j1"

print(f"Getting live data from {WEATHER_URL}.")
r = requests.get(WEATHER_URL, timeout=60)
json = r.json()
current = json["current_condition"][0]
print (f"Current temp:  {current['temp_F']}")
