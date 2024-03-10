# class Farm:
#     def __init__(self,farm_name):
#         self.name=farm_name
#         self.farm={}
    
#     def add_animal(self,animal,amount=1):
#         if animal in self.farm:
#             self.farm[animal]+=amount
#         else:
#             self.farm[animal]=amount

#     def get_info(self):
#         print(f"{self.name}'s farm")
#         print('')
#         for key,value in self.farm.items():
#             print(f'{key} : {value}')
#         return('      E-I-E-I-O')
    
#     def get_animal_types(self):
#         animallist=[]
#         for x in self.farm:
#             animallist.append(x)
#         print(animallist)    
#         return animallist
    
#     def get_short_info(self):
#         animallist=self.get_animal_types()
#         print(f"{self.name}'s farm has",end=' ')
#         for x in animallist:
#             if x == animallist[-2]:
#                 print(f"{x}'s", end=' and ')
#             else:
#                 print(f"{x}'s", end=', ')

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())
# macdonald.get_animal_types()
# macdonald.get_short_info()



