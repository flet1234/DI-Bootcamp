import random
import string

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

### YOUR CODE STARTS FROM HERE ###

def display(lifecount):
    if lifecount==0:
        print('   ______')
        print('  |      |')
        print('  |      ')
        print('  |    ')
        print('  |     ')
        print(' _|________')
        print('|          |')
        print('|          |')
    
    if lifecount==1:
        print('   ______')
        print('  |      |')
        print('  |      o')
        print('  |    ')
        print('  |     ')
        print(' _|________')
        print('|          |')
        print('|          |')
    if lifecount==2:
        print('   ______')
        print('  |      |')
        print('  |      o')
        print('  |      O')
        print('  |     ')
        print(' _|________')
        print('|          |')
        print('|          |')
    if lifecount==3:
        print('   ______')
        print('  |      |')
        print('  |      o')
        print('  |    --O')
        print('  |     ')
        print(' _|________')
        print('|          |')
        print('|          |')
    if lifecount==4:
        print('   ______')
        print('  |      |')
        print('  |      o')
        print('  |    --O--')
        print('  |        ')
        print(' _|________')
        print('|          |')
        print('|          |')
    if lifecount==5:
        print('   ______')
        print('  |      |')
        print('  |      o')
        print('  |    --O--')
        print('  |     |  ')
        print(' _|________')
        print('|          |')
        print('|          |')
    if lifecount==6:
        print('   ______')
        print('  |      |')
        print('  |      o')
        print('  |    --O--')
        print('  |     | |')
        print(' _|________')
        print('|          |')
        print('|          |')

def secretword(word):
    newword=[]
    for x in range(len(word)):
        if word[x].isalpha():
            newword.append('*')
        else:
            newword.append(' ')
    newword=''.join(newword)
    return newword

def hangman_game():
    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card']
    word = random.choice(wordslist) 
    lifecount=0
    newword=secretword(word)
    gameon=True
    while gameon==True:
        display(lifecount)
        print(newword)
        while True:
            user_input=input('Input a letter: ').lower()
            if len(user_input)==1 and user_input.isalpha():
                break
            else:
                print('Please input a single letter')
        for i,letter in enumerate(word):
            if letter == user_input:
                newword=newword[:i]+user_input+newword[i+1:]
            elif user_input not in word:
                lifecount+=1
                break      
        if lifecount==6:
            display(lifecount)
            gameon=False
            print(f'You are hanged, word was "{word}"')
            user_input=input('Restart? Y/N?: ').lower()
            if user_input=='y':
                hangman_game()
        elif '*' not in newword:
            print('You win, congtratulations!!!')
            gameon=False
            user_input=input('Restart? Y/N?: ').lower()
            if user_input=='y':
                hangman_game()
hangman_game()