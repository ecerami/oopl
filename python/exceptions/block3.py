# Another exception that you can catch...

def read_data(filename):
    try:
        with open(filename, encoding='utf-8') as f:
            contents = f.read()
        print(f"File {filename} exists!")
    except FileNotFoundError:
        print(f"File {filename} does not exist!")

read_data("data/alice.txt")
read_data("data/little_women.txt")