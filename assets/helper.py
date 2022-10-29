# Read all files in current diuirectory and ignoring the python file and show the file name with index starts from

import os

def get_file_name():
    file_list = []
    for file in os.listdir():
        if file.endswith(".py"):
            continue
        file_list.append(file)
    return file_list

def get_file_name_with_index():
    file_list = get_file_name()
    for index, file in enumerate(file_list):
        print(index+1, file)

if __name__ == "__main__":
    get_file_name_with_index()


