"""File I/O Example."""
PI_DIGITS_FILE = 'files/data/pi_million_digits.txt'

# Process the 1 million digits of pi
pi_string = ''
with open(PI_DIGITS_FILE, encoding="utf-8") as f:
    for line in f:
        pi_string += line.strip()

# Print out the first 52 digits in pi
print (f"{pi_string[:52]}...")

# Print out the lengh of pi that we read in
print(len(pi_string))
