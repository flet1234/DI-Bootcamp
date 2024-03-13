# import re
# import os
# dir_path = os.path.dirname(os.path.realpath(__file__))

# with open(dir_path+'/text.txt') as f:
#     for x in f.readlines():
#         print(x,end='')

# with open(dir_path+'/text.txt') as f:
#     print(f.readline(5))


# with open(dir_path+'//text.txt') as f:
#     content=f.readlines()
# print(content)
# newcontent=[]
# for x in content:
#     newcontent.append(list(x))
# print(newcontent)


# f = open('C:/Users/maksim/Desktop/DI_Bootcamp/Week3/Day4/text.txt')
# mylist=[]
# newlist=[]
# count_darth=0
# count_lea=0
# count_luke=0
# for x in f.readlines():
#     mylist.append(x)
# for x in mylist:
#    newlist.append(re.sub('\n','',x))
# for x in newlist:
#     if re.search('Darth',x):
#         count_darth+=1
#     elif re.search('Lea',x):
#         count_lea+=1
#     elif re.search('Luke',x):
#         count_luke+=1
# print(f'{count_darth}-Darth\n{count_lea}-Lea\n{count_luke}-Luke')
# with open('Week3/Day4/text.txt','a+') as f:
#     f.write('\nMaksimka Gold')

# with open(dir_path+'\\text.txt') as f:
#     print(f.read())



# with open(dir_path+'\\text.txt','r') as f:
#     # print(f.readlines())
#     content=f.readlines()

# newlist=[]
# for x in content:
#     if re.search('Luke',x):
#         newlist.append(re.sub('Luke','Luke Skywalker',x))
#     else:
#         newlist.append(x)
# print(newlist)

# with open(dir_path+'/text.txt','w') as f:
#     f.writelines(newlist)

import json

# my_family = {
#     "parents":['Beth', 'Jerry'],
#     "children":['Summer', 'Morty']
# }

# json_file = "my_file.json"

# with open(json_file, 'w') as file_obj:
#     json.dump(my_family, file_obj , indent=2, sort_keys=True)
#    #json.dump(obj2save , destination_file)

# my_family = {
#     "parents" :['Beth', 'Jerry'],
#     "children" :['Summer', 'Morty']
# }

# json_my_family = json.dumps(my_family,indent=2)
# print(json_my_family)
# # >> {"parents": ["Beth", "Jerry"], "children": ["Summer", "Morty"]}

# json_file = 'my_file.json'
# with open(json_file, 'r') as file_obj:
#     my_family = json.load(file_obj)

# print(my_family)
#>> {'children': ['Summer', 'Morty'], 'parents': ['Beth', 'Jerry']

import requests

response=requests.get('https://api.chucknorris.io/jokes/random')

print(response.json()['value'])