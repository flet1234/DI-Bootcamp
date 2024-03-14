import random

class Game:
    def __init__(self):
        pass

    def get_user_item(self):
        while True:
            print('\nSelect your weapon:')
            print('1.Rock (r)')
            print('2.Paper (p)')
            print('3.Scissors (s)')
            user_input=input(': ')
            if user_input.lower()=='r':
                choice='r'
                return choice
            elif user_input.lower()=='p':
                choice='p'
                return choice
            elif user_input.lower()=='s':
                choice='s'
                return choice
    
    def get_computer_item(self):
        weapons=['r','p','s']
        cp_choice=random.choice(weapons)
        return cp_choice
    
    def get_game_result(self,user_item,computer_item):
        if user_item==computer_item:
            return None
        elif user_item=='r' and computer_item=='s':
            return True
        elif user_item=='s' and computer_item=='p':
            return True
        elif user_item=='p' and computer_item=='r':
            return True
        else:
            return False
    
    def play(self):
        user_item=self.get_user_item()
        computer_item=self.get_computer_item()
        if user_item=='r':
            item='Rock'
        elif user_item=='s':
            item='Scissors'
        elif user_item=='p':
            item='Paper'
        if computer_item=='r':
            cp_item='Rock'
        elif computer_item=='s':
            cp_item='Scissors'
        elif computer_item=='p':
            cp_item='Paper'
        result=self.get_game_result(user_item,computer_item)
        if result==False:
            print(f'\nYou lost')
            print(f'Your choice: {item}')
            print(f'Computer choice: {cp_item}')
            return 'loss'
        elif result==True:
            print(f'\nYou win')
            print(f'Your choice: {item}')
            print(f'Computer choice: {cp_item}')
            return 'win'
        else:
            print(f'\nDraw')
            print(f'Your choice: {item}')
            print(f'Computer choice: {cp_item}')
            return 'draw'
