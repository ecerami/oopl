"""File I/O Example."""
PI_DIGITS_FILE = 'files/data/pi_digits.txt'

# Open the file and read / process one line at a time.
# Saves memory as you only need to keep one line of memory
# at a time.
with open(PI_DIGITS_FILE, encoding="utf-8") as f:
    for line in f:
        print (line.rstrip())
