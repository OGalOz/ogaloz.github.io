import os
import sys


def CompleteAddStringBeforeSubString(inp_dir, str_to_add, str_to_search):
    fps = [os.path.join(inp_dir, fp) for fp in os.listdir(inp_dir)] 

    print("Filepaths to edit")
    print(fps)

    for fp in fps:
        AddStringBeforeSubString(fp, str_to_add, str_to_search)



def AddStringBeforeSubString(fp, str_to_add, str_to_search):

    FH = open(fp, "r")

    new_file = ''

    c_line = FH.readline()

    while c_line != "":

        res = c_line.find(str_to_search)

        if res != -1:
            new_line = c_line[:res]  + str_to_add + c_line[res:]
            print(" Inserted new string into line: \n {} \n to make line:\n {}".format(
                c_line, new_line))
        else:
            new_line = c_line

        new_file += new_line
        c_line = FH.readline()
    
    FH.close()

    with open(fp + ".new", "w") as f:
        f.write(new_file)



def PlaceSubStringInLine(loc, str_to_add, crnt_str):

    return crnt_str[:loc]  + str_to_add + crnt_str[loc:]
    




def main():
    args = sys.argv

    if args[-1] != "1":
        print("python3 fn.py dir_to_change str_to_add str_to_search 1")
        print("e.g.")
        print("python3 AddStringToAllFilesInDir.py . /static/pirates/ img/JPEGs/ 1")
    else:
        CompleteAddStringBeforeSubString(args[1], args[2], args[3])


if __name__ == "__main__":
    main()
 






