filename = 'files/data/pi_digits.txt'

# Process the pi data
pi_string = ''
with open(filename) as f:
    for line in f:
        pi_string += line.strip()

print (pi_string)
print(len(pi_string))
