import json

# A JSON file with todo items
filename = "data/todo.json"

# Use the with clause to open the file
with open(filename) as f:

    # Load/read the JSON Contents
    # json.load() reads the JSON file and transforms
    # into Python data structures, e.g. lists and dicts.
    todo_list = json.load(f)
    print(type(todo_list))
    print(todo_list)
    for item in todo_list:
        print(type(item))
        print(item)
        print(f"{item['title']}: {item['completed']}")