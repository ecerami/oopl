import glob
import sys
import os

dir = sys.argv[1]
print(dir)

code_blocks = glob.glob(dir + "/block*.py")
code_n = 0
for counter in range(len(code_blocks)):
	file_name = f"{dir}block{counter}.py"
	os.system('clear')
	print(f"{file_name}:  {code_n} of {len(code_blocks)-1}\n")
	os.system(f'highlight {file_name}')
	input("\n")
	print("=========================\n")
	os.system(f'python3 {file_name}')
	input("\n\nPress Enter to go to next code block...")
	code_n +=1