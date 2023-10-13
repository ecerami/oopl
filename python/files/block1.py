"""File I/O Example."""
PI_DIGITS_FILE = 'files/data/pi_digits.txt'

# Open the file and read into a list of lines.
with open(PI_DIGITS_FILE, encoding="utf-8") as f:
    lines = f.readlines()

# Iterate through all the lines.
# Output includes the line number.
line_num = 0
for line in lines:
    print(f"{line_num}:  {line.rstrip()}")
    line_num += 1
