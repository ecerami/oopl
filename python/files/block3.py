filename = 'data/pi_digits.txt'

# Collect the pi data into one long string
pi_string = ''
with open(filename) as f:
    for line in f:
        pi_string += line.strip()

print (pi_string)
print(len(pi_string))
