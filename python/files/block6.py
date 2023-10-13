"""File I/O Example."""
import glob

# Illustrate how to use glob
file_list = glob.glob("files/*.py")
for name in file_list:
    print (name)
