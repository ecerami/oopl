def count_words(filename):
    """Count the approximate number of words in a file."""
    try:
        with open(filename) as f:
            contents = f.read()
        words = contents.split()
        num_words = len(words)
        print(f"The file {filename} has {num_words:,} words.")
    except FileNotFoundError:
        print(f"Could not find file {filename}.")

filenames = ['alice.txt', 'siddhartha.txt', 'little_women.txt', 'moby_dick.txt']
for filename in filenames:
    count_words(f"data/{filename}")
