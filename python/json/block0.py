"""JSON Example."""
import json

# A JSON file with todo items
TODO_FILE = "json/data/todo.json"

# Use the with clause to open the file
with open(TODO_FILE, encoding="utf-8") as f:
    # Load/read the JSON Contents
    # json.load() reads the JSON file and transforms
    # into Python data structures, e.g. lists and dicts.
    todo_list = json.load(f)
    #print(type(todo_list))
    #print(todo_list)
    for item in todo_list:
        #print(type(item))
        #print(item)
        #print(f"{item['title']}")
        print(f"{item['title']}: {item['completed']}")
