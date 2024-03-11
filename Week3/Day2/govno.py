members=[{'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
{'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False},
{'name': 'John', 'age': 1, 'gender': 'Male', 'is_child': True}]

name='Michael'
for x in members:
    if x['name']==name and x['age']>=18:
        result=True
    elif x['name']==name and x['age']<18:
        result=False
print(result)            