import json
import os
import random

dir_path =os.path.dirname(os.path.realpath(__file__))
json_file=dir_path+'/file.json'

with open(json_file,'r') as f:
    content=json.load(f)
print(content['children'])

number=1
for x in content['children']:
    print(f"Jane's children {number}: \n{x['firstName']},{x['age']}")

colorlist=['Blue','Greeen','Red','Black']
for x in content['children']:
    x['favorite_color']=random.choice(colorlist)
print(content['children'])

with open(json_file,'w') as f:
    json.dump(content,f, indent=2, sort_keys=True)