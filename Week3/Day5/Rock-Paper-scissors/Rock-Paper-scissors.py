from game import Game
import os

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def get_user_menu_choice():
    print('\n               Menu:')
    print('1.Play game (g)',end='   ')
    print('2.Show scorres (s)')
    print('            Quit (q)')
    user_input=input(': ')
    return user_input

def print_results(results):
    print(f'\nwin:{results['win']}')
    print(f'loss:{results['loss']}')
    print(f'draw:{results['draw']}')

def main():
    clear_screen()
    results={'win':0,'loss':0,'draw':0}
    user_input=None
    while user_input != 'q':
        print('\n  ROCK/PAPER/SCISSORS GAME 9000')
        user_input=get_user_menu_choice()
        if user_input=='g':
            newgame=Game()
            result=newgame.play()
            results[result]+=1
        elif user_input=='s':
            print_results(results)
    if user_input=='q':
        print_results(results)
        print('\nBye')
            
main()