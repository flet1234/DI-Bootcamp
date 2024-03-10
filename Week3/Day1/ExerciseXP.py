# 1

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1=Cat('Barsik',10)
# cat2=Cat('Topor', 8)
# cat3=Cat('Kirpich',5)

# def find_old_cat(*args):
#     agelist=[]
#     for x in args:
#         agelist.append(x.age)
#     maxage=max(agelist)
#     for x in args:
#         if maxage==x.age:
#             print(f'The oldest cat is {x.name}, and is {x.age} years old.')

# find_old_cat(cat1,cat2,cat3)

# 2

# class Dog:
#     def __init__(self,dog_name,dog_height):
#         self.name=dog_name
#         self.height=dog_height   
    
#     def bark(self):
#         print(f'{self.name} goes woof!')

#     def jump(self):
#         print(f'{self.name} jumps {self.height*2}cm high!')


# davids_dog=Dog('Rex',50)
# print(f'{davids_dog.name} is {davids_dog.height}cm high')
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog=Dog('Teacup',20)
# print(f'{sarahs_dog.name} is {sarahs_dog.height}cm high')
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height>sarahs_dog.height:
#     print(davids_dog.name)
# else:
#     print(sarahs_dog.name)

# 3

# class Song:
#     def __init__(self,lirics):
#         self.lirics=lirics
    
#     def sing_me_a_song(self):
#         for x in self.lirics:
#             print(x)
    
# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
        
# stairway.sing_me_a_song()

# 4

# class Zoo:
#     def __init__(self,zoo_name):
#         self.name=zoo_name
#         self.animals=[]
    
#     def add_animal(self,*new_animal):
#         if new_animal not in self.animals:
#             self.animals.extend(new_animal)

#     def get_animals(self):
#         for x in self.animals:
#             print(x)
    
#     def sell_animal(self,animal_sold):
#         self.animals.remove(animal_sold)

#     def sort_animals(self):
#         animal_dikt={}
#         self.animals.sort()
#         animal_groups = [[self.animals[0]]]
#         i = 1
#         list_count = 0
#         while i < len(self.animals):
#             if self.animals[i][0] == self.animals[i - 1][0]:
#                 animal_groups[list_count].append(self.animals[i])
#             else:
#                 animal_groups.append([self.animals[i]])
#                 list_count += 1
#             i += 1
#         for i,x in enumerate(animal_groups,start=1):
#             animal_dikt[i]=x
#         return animal_dikt

#     def get_groups(self):
#         animal_dikt=self.sort_animals()
#         for key,values in animal_dikt.items():

#             if len(values)>1:
#                 print(f'Group: {key}:', end='')
#                 for value in values:
#                     print(f'{value}',end=',')    
#                 print(' ')
#             else:
#                 print(f'Group: {key}:{values[0]}')
    
# ramat_gan_safari=Zoo('Ramat Gan Safari')

# print(ramat_gan_safari.name)
# ramat_gan_safari.add_animal('Girafe','Bobr','Bear','Babuin','Crocodile','Monkey','Dog')                   
# ramat_gan_safari.get_animals()
# ramat_gan_safari.sell_animal('Girafe')
# ramat_gan_safari.get_animals()
# ramat_gan_safari.sort_animals()
# ramat_gan_safari.get_groups()

