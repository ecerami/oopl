"""File I/O Example."""
PI_DIGITS_FILE = 'files/data/pi_digits.txt'

# Collect the pi data into one long string
pi_string = ''
with open(PI_DIGITS_FILE, encoding="utf-8") as f:
    for line in f:
        pi_string += line.strip()

print (pi_string)
print(len(pi_string))
