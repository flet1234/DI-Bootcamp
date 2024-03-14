from Angaramm_checker import AnagramChecker
import re
import os

def count_words(user_input):
    words=user_input.split()
    return len(words)

def check_user_input():
    user_input=input('\nYour call:')
    if re.search(r'[!@#$%^&*()_+{}\[\]:;<>,.?/\\|`~-]',user_input):
        raise TypeError('Input is invalid, it must a single word, without special characters and numbers')
    elif re.search(r'\d',user_input):
        raise TypeError('Input is invalid, it must a single word, without special characters and numbers')
    elif count_words(user_input)>1:
        raise TypeError('Input is invalid, it must a single word, without special characters and numbers')
    else:
        user_input=re.sub(' ','',user_input)
    return user_input

def anacheck9000():
    os.system('cls')
    print('         ANACHECK 9000         ')
    print('Welcome to anagram checker 9000')
    print('\n1. Input word to get anagramms')
    print("2. Input 'exit' for exit")

    new_anagrams=AnagramChecker(check_user_input())
    if new_anagrams.is_valid_word()==False:
        raise TypeError("It's not a real word")
    else:
        os.system('cls')
        list_of_anagrams=new_anagrams.get_anagrams()
        result=','.join(list_of_anagrams)
        print(f'Your word: {new_anagrams.word.upper()}')
        print(f'This is a valid English word')
        if len(result)==0:
            print(f'There is no anagram for your word')
        else:
            print(f'Anagrams for yoor word: {result}')

anacheck9000()