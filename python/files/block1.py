filename = 'data/pi_digits.txt'

# Open the file and read into an array of lines.
with open(filename) as f:
    lines = f.readlines()

# Iterate through all the lines.
# Output includes the line number.
line_num = 0
for line in lines:
    print(f"{line_num}:  {line.rstrip()}")
    line_num += 1
