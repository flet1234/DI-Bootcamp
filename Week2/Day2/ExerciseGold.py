# # Exercise 1

# list_one=[1,2,3]

# list_two=[4,5,6]

# list_one.extend(list_two)
# king_list=list_one

# print(king_list)

# Exercise 2

# for x in range(1500,2500):
#     if x%7==0 or x%5==0:
#         print(x)

# Exercise 3

# names = ['Samus','Cortana','V','Link','Mario','Cortana','Samus']

# user_input=input('Print your name: ')
# if user_input in names:
#     print (names.index(user_input))

# Exercise 4

# first=int(input('Please input three numbers, 1st: '))
# second=int(input('Please input 2nd: '))
# third=int(input('Please input 3rd: '))

# if third < first > second:
#     print('Greatest number is',first) 
# elif first< second >third:
#      print('Greatest number is',second)
# else:
#       print('Greatest number is',third)      

# Exercise 5

# import string

# alphabet=string.ascii_lowercase
# vowels = ['a', 'e', 'i', 'o', 'u']

# for x in list(alphabet):
#     if x in vowels:
#         print(x,'vovel')
#     else:
#         print(x,'consonant')

# Exercise 6 

# words=[]
# count=0
# number=1
# while count<7:
#     words.append(input(f"Please input 7 words: {number})"))
#     count=count+1
#     number=number+1
# print(words)

# letter=input('Now input a single letter: ')

# for x in range((len(words))):
#     if letter in words[x]:
#         print(f"{list(words[x]).index(letter)} is index of {letter} in {words[x]}")
#     else:
#         print(f'{words[x]} dont have {letter}')

# Exercise 7

# numberlist=[]
# for x in range(1,1000001):
#     numberlist.append(x)
# print(min(numberlist))
# print(max(numberlist))
# print(sum(numberlist))

# Exercise 8

# user_input=input('Please input some numbers separated with comma: ')
# num_list=user_input.split(',')
# print(num_list)
# tuple_list=tuple(num_list)
# print(tuple_list)

# Exercise 9

# import random
# number=random.randint(1,9)
# gameon=True
# lost=0
# win=0
# while gameon==True:
#     user_input=input('Try to guess my number, from 1 to 9, if u want to exit, print "exit": ')
#     if user_input=='exit':
#         gameon=False
#     elif int(user_input)==number:
#         print('You win! Try again!')
#         win=win+1
#     else:
#         print('Wrong, try again')
#         lost=lost+1
# print(f"Thank you for game, you won {win} games, and lost {lost} games")

