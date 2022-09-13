"""
Code Block Merge Utility.

A quick hack to merge multiple blocks of code.
"""

import glob
import sys
import os

dir = sys.argv[1]
print(dir)

code_blocks = glob.glob(dir + "/block*.py")
code_n = 0
for counter in range(len(code_blocks)):
    file_name = f"{dir}block{counter}.py"
    print(f"{file_name}:  {code_n} of {len(code_blocks)-1}\n")
    fd = open(file_name)
    for line in fd:
        print (line.rstrip())
    print("\n=========================\n")
    code_n += 1
