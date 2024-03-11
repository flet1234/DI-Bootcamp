# from ExerciseXP import Dog
# import random
# class PetDog(Dog):
#     def __init__(self, name, age, weight, trained=False):
#         super().__init__(name, age, weight)
#         self.trained=False
        
#     def train(self):
#         self.bark()
#         self.trained=True

#     def play(self,*other_dogs):
#         mylist=[other_dog.name for other_dog in other_dogs]
#         x=','.join(mylist)
#         print(f'{self.name},{x} is playing')
    
#     def do_a_trick(self):
#         if self.trained==True:
#             x=random.randint(1,4)
#             if x==1:
#                 print(f'{self.name} does a barrel roll')
#             if x==2:
#                 print(f'{self.name} stands on his back legs')
#             if x==3:
#                 print(f'{self.name} shakes your hand')
#             if x==4:
#                 print(f'{self.name} plays dead')
#         else:
#             print(f'{self.name} just staring at you')

# bobig=PetDog('Bobig', 3, 30)
# sharig=PetDog('Sharig',5,25)
# cyber_killer_300=PetDog('Cyber_killer_300', 10, 50)

# bobig.train()
# print(bobig.trained)

# bobig.do_a_trick()
# sharig.do_a_trick()

# bobig.play(sharig,cyber_killer_300)

