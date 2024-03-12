# class Character:
#     def __init__(self, name, life=20, attack=10):
#         self.name=name
#         self.life=life
#         self.attack=attack
    
#     def basic_atack(self, other_character):
#         other_character.life-=self.attack

# class Druid(Character):
#     def __init__(self, name, life=20, attack=10):
#         super().__init__(name, life, attack)
#         print('I eat leaves...')
    
#     def meditate(self):
#         self.life+=10
#         self.attack-=2
    
#     def animal_help(self):
#         self.attack+=5

#     def fight(self, other_character):
#         other_character.life-=((self.life*0.75)+(self.attack*0.75))
    
# class Warrior(Character):
#     def __init__(self, name, life=20, attack=10):
#         super().__init__(name, life, attack)
#         print('I have a big diktionary!')
    
#     def brawl(self, other_character):
#         other_character.life-=(self.attack*2)
#         self.life+=(self.attack*0.5)
    
#     def train(self):
#         self.life+=2
#         self.attack+=2
    
#     def roar(self, other_character):
#         other_character.attack-=3

# class Mage(Character):
#     def __init__(self, name, life=20, attack=10):
#         super().__init__(name, life, attack)
#         print('I im a M-m-m-mm-mmaa-mama-mama-ma-mage!!!')
    
#     def curse(self, other_character):
#         other_character.attack-=2
    
#     def summon(self):
#         self.attack+=3
    
#     def cast_spell(self, other_character):
#         other_character.life-=(self.attack/self.life)




# char1=Druid('GreenyBoy')

# char2=Warrior('Naked_Menace')

# char3=Mage('Gendalf')

# char3.cast_spell(char2)
# print(char3.attack)
# print(char2.life)