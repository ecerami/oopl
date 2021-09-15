"""
Code Block Slider Runner.

A quick hack to display code blocks during class.
Currently only works on mac, and requires the
bat utility.
"""

import glob
import sys
import os

dir = sys.argv[1]
print(dir)

code_blocks = glob.glob(dir + "/block*.js")
code_n = 0
for counter in range(len(code_blocks)):
    file_name = f"{dir}block{counter}.js"
    os.system('clear')
    print(f"{file_name}:  {code_n} of {len(code_blocks)-1}\n")
    os.system(f'bat --theme=zenburn {file_name}')
    input("\n")
    print("=========================\n")
    os.system(f'node {file_name}')
    input("\n\nPress Enter to go to next code block...")
    code_n += 1
