# Another exception that you can catch...

def check_file_exists(filename):
    try:
        with open(filename, encoding='utf-8') as f:
            contents = f.read()
        print(f"File {filename} exists!")
    except FileNotFoundError:
        print(f"File {filename} does not exist!")

check_file_exists("data/alice.txt")
check_file_exists("data/little_women.txt")