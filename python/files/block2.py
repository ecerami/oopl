filename = 'data/pi_digits.txt'

# Open the file and read / process one line at a time.
# Saves memory as you only need to keep one line of memory
# at a time.
with open(filename) as f:
    for line in f:
        print (line.rstrip())
