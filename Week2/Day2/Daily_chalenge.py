# Exercise 1

# number=int(input('Give me a number that i should multiply: '))
# length=int(input('Give me a legnth for it: '))
# multiply_list=[]         
# for item in range(length):
#     multiply_list.append(number)
#     number=number+number
# print(multiply_list)    

# Exercise 2

user_input=input('Input string with duplicate consecutive letters: ')
finished_list=['']

for letter in user_input:
    if letter not in finished_list[-1]:
        finished_list.append(letter)
finished_list.pop(0)
print(''.join(finished_list))     
     