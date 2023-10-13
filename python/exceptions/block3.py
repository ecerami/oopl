"""Exception Example."""

# Another exception that you can catch...

def read_data(filename):
    """Read data from specified file."""
    try:
        with open(filename, encoding="utf-8") as f:
            content = f.read()
            print(f"{filename}: {content[:50]}...")
    except FileNotFoundError:
        print(f"File {filename} does not exist!")

read_data("exceptions/data/little_women.txt")
read_data("exceptions/data/alice.txt")
