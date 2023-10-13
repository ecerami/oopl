"""File I/O Example."""
PI_DIGITS_FILE = 'files/data/pi_digits.txt'

# Open the file and read everything in one big gulp.
with open(PI_DIGITS_FILE, encoding="utf-8") as f:
    content = f.read()
print(content)
