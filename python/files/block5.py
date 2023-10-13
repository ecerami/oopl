"""File I/O Example."""
OUT_FILE_NAME = 'files/data/programming.txt'

# Here we write to a new file.
# If we use 'a', we would append to an existing file.
with open(OUT_FILE_NAME, 'w', encoding="utf-8") as f:
    f.write("I love Java.\n")
    f.write("I love Python.\n")
    f.write("I love TypeScript.\n")
