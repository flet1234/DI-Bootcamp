# 1

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# all_cats=[Bengal('topor', 3),Chartreux('Gosha',4),Siamese('Maga',9)]
# sara_pets=Pets(all_cats)
# sara_pets.walk()

# 2

# class Dog:
#     def __init__(self,name,age,weight):
#         self.name=name
#         self.age=age
#         self.weight=weight
    
#     def bark(self):
#         return print(f'{self.name} is barking')
    
#     def run_speed(self):
#         dog_speed=self.weight/self.age*10
#         return dog_speed
    
#     def fight(self,another_dog):
#         my_power=self.run_speed()*self.weight
#         his_power=another_dog.run_speed()*another_dog.weight
#         if my_power>his_power:
#             print(f'{self.name} won the fight!')
#         elif my_power<his_power:
#             print(f'{another_dog.name} won the fight!')
#         else:
#             print('Draw')

# bobik=Dog('Bobik', 3, 30)
# sharik=Dog('Sharik',5,25)
# cyber_killer_3000=Dog('Cyber_killer_3000', 10, 50)

# bobik.bark()
# sharik.run_speed()
# cyber_killer_3000.fight(bobik)

# 4

# class Family:
#     def __init__(self,members,last_name):
#         self.members=members
#         self.last_name=last_name

#     def born(self,**child):
#         self.members.append(child)
#         print('Congratulations the child was born')

#     def is_18(self,name):
#         for x in self.members:
#             if x['name']==name and x['age']>=18:
#                 result=True
#             elif x['name']==name and x['age']<18:
#                 result=False
#         print(result)            
#         return result
    
#     def family_presentation(self):
#         print(f'{self.last_name}: ')
#         for x in self.members:
#             print (x)

# papaniny=Family([{'name':'Michael','age':35,'gender':'Male','is_child':False},
#                   {'name':'Sarah','age':32,'gender':'Female','is_child':False}],
#                   'Papaniny')

# papaniny.born(name ='John',age= 1,gender='Male',is_child=True)

# papaniny.family_presentation()

# papaniny.is_18('Michael')

# 5

# class TheIncredibles(Family):
#     def __init__(self, members, last_name):
#         super().__init__(members, last_name)
    
#     def use_power(self,name):
#         avilability=self.is_18(name)
#         if avilability==True:
#             for x in self.members:
#                 if x['name']==name:
#                     print(f'My power is {x['power']}')
#         else:
#             raise Exception(f'{name} need to be 18 years old at minimum')
        
#     def incredible_presentation(self):
#         print('Here is our powerfull family: ',end=' ')
#         super().family_presentation()

# incredible_family=TheIncredibles( [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ],'Incredibles')


# incredible_family.born(name='Baby Jack',age=1,power='Unknown')
# incredible_family.incredible_presentation()
# incredible_family.use_power('Baby Jack')
# incredible_family.use_power('Michael')