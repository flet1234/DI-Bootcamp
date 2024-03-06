# 1

# def display_message():
#     print('In this course i learned pain an misery')
# display_message()

# 2

# def favorite_book(title):
#     print(f'One of my favorite books is {title}')
# favorite_book('Cheburashka, part 2. Vengeance')   

# 3

# def describe_city(city_name,country='Israel'):
#     print(f'{city_name} in {country}')
# describe_city('Tel-aviv')
# describe_city('Koln','Germany')

# 4

# import random

# def guess_teh_number(num):
#     if num>100 or num<1:
#         print('Sorry u need to give me number form 1 to 100!')
#         pass
#     guess_num=random.randint(1,100)
#     if num==guess_num:
#         print('U WON')
#         print(f"This is our number: {guess_num}, this is your's: {num}")
#     else:
#         print('U LOST')
#         print(f"This is our number: {guess_num}, this is your's: {num}")

# guess_teh_number(64)

# 5

# def make_shirt(size='L',text='I love Python'):
#     print(f'The size of the shirt is {size} and the text is: {text}')
# make_shirt('XL','My name is Johny')
# make_shirt()
# make_shirt('M')
# make_shirt('SM','Spider-pig')
# make_shirt(text='LOLka',size="XXL")

# 6

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(list_of_magicians):
#     for name in list_of_magicians:
#         print(name)
# show_magicians(magician_names)

# def make_great(list_of_magicians):
#     for i,x in enumerate(list_of_magicians):
#         y=x+' the Great'
#         list_of_magicians.pop(i)
#         list_of_magicians.insert(i,y)

# make_great(magician_names)
# show_magicians(magician_names)

#7 

# import random

# def get_random_temp(season):
#     if season<3 and season>0 or season==12:
#         temperature=round(random.uniform(-10.0,16.0),1)
#     elif season>2 and season<6:
#         temperature=round(random.uniform(16.0,32.0),1)
#     elif season >8 and season <12:
#         temperature=round(random.uniform(10.0,25.0),1)
#     elif season>5 and season<9:
#         temperature=round(random.uniform(20.0,40.0),1)
#     return temperature

# def main():
#     user_input=input('Write a month: ')
#     if user_input in ['1','2','3','4','5','6','7','8','9','10','11','12']:
#         temperature=get_random_temp(int(user_input))
#         print(f'The temperature right now is {temperature} degrees Celsius')
#         if temperature<0:
#             print('Brrr, that’s freezing! Wear some extra layers today')
#         elif temperature>0 and temperature<16:
#             print('Quite chilly! Don’t forget your coat')
#         elif temperature>16 and temperature<24:
#             print('Take coat')
#         elif temperature>24 and temperature<32:
#             print('Its a good time for a walk, its warm')
#         else:
#             print('Its really hot, stay inside')
#     else:
#         print('Input is invalid')
#         main()
# main()

# 8

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

# def star_wars_quizz():
#     count_right=0
#     count_wrong=0
#     number=0
#     questionnumber=[]
#     wronganswerlist=[]
#     gameon=True
#     while gameon==True:
#         print(data[number].get('question'))
#         user_answer=input()
#         if user_answer.lower()==data[number].get('answer').lower():
#             print('Right')
#             count_right=count_right+1
#             wronganswerlist.append(user_answer)
#         else:
#             print('Wrong')
#             count_wrong=count_wrong+1
#             wronganswerlist.append(user_answer)
#             questionnumber.append(number)
#         number=number+1
#         if count_wrong==4:
#             print('Do you wannt to play again?')
#             user_input=input('Y/N?')
#             if user_input.lower()=='y':
#                 gameon=False
#                 star_wars_quizz()
#             else:
#                 print(f'You finished quiz. Your result: \nWrong answers: {count_wrong}\nRight answers: {count_right}\nThere is your mistakes: ')
#                 for question in questionnumber:
#                     print(f'\n{data[question].get('question')}\nRight answer was: {data[question].get('answer')}')
#                     print(f'Your answer is :{wronganswerlist[question]}')
#                 print('Bye')
#                 gameon=False
#         if number==len(data):
#             print(f'You finished quiz. Your result: \nWrong answers: {count_wrong}\nRight answers: {count_right}\nThere is your mistakes: ')
#             for question in questionnumber:
#                 print(f'{data[question].get('question')}\nRight answer was: {data[question].get('answer')}')
#                 print(f'Your answer is :{wronganswerlist[question]}')
#             gameon=False


# star_wars_quizz()