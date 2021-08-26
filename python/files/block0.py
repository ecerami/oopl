filename = 'files/data/pi_digits.txt'

# Open the file and read everything in one big gulp.
with open(filename) as f:
    content = f.read()

print(content)
