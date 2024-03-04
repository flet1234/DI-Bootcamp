# Exercise 1

# my_set={1,3,7,5,8}
# my_set.add(9)
# my_set.add(13)
# print (my_set)

# my_setlist=list(my_set)
# my_setlist.pop()
# my_set=set(my_setlist)
# print (my_set)

# friend_set={4,6,8,2,}
# print(friend_set)

# ourset=my_set.union(friend_set)
# print(ourset)

# Exercise 2

# No

# Exercise 3

# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# basket.remove('Banana')
# basket.remove('Blueberries')
# basket.append('Kiwi')
# basket.insert(0,'Apples')
# print (basket)
# x=basket.count('Apples')
# print(f'there is {x} Apples in a basket')
# basket.clear()
# print(basket)

# Exercise 4

# It has a float point number

# x=[1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
# print(x)

# y={1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5}
# print(y)

# number=0.5
# mylist=[]
# for x in range(10):
#     mylist.append(number)
#     number=number+0.3
# print(mylist)

# Exercise 5

# num=1
# for x in range(20):
#     print(num)
#     num=num+1

# mylist=[]
# num=1
# for x in range(20):
#     mylist.append(num)
#     if mylist.index(num) %2==0 and mylist.index(num)!=0:
#         print(num) 
#     num=num+1

# Exercise 6

# name='Maksim'
# while input('Plese input name of me: ').upper() != name.upper():
#     input('Plese input name of me: ')

# Exercise 7

# user_input=input('Input your favorite fruits, separate them with space: ')
# user_fruits=user_input.split(' ')
# print(user_fruits)

# list_of_fruits=[]
# x=0
# for x in range(len(user_fruits)):
#     list_of_fruits.append(user_fruits[x].upper())
# print(list_of_fruits)    

# user_input2=input('Input what fruit u wanna eat: ')
# if user_input2.upper() in list_of_fruits:
#     print('You choose one of your favorite fruit! Enjoy!')
# else:
#     print('You choose something else, i hope you enjoy!')


# Exercise 8

# topings=['pepperoni', 'olives','pineapple','cheese']
# count=0
# while True:
#     print(' '.join(topings))
#     user_input=input('Input a topping that u want to add, when finished type "exit": ').lower()
#     if user_input=='exit' or user_input=='quit':
#         break
#     elif user_input not in topings:
#         print('We dont have this toping sorry')
#     elif user_input in topings:
#         print('You added ',user_input)
#         count=count+1
# print('Pizza will be ',10+2.5*count)

# Exercise 9/ 1,2,3

# ticket_cost=15
# ticket_cost_kid=10
# user_input=input('Hi plesase input age of all members of your group, separate it with "space"')
# user_age=user_input.split(" ")
# print(user_age)

# user_list=[]
# for index in range(len(user_age)):
#     user_list.append(int(user_age[index]))
# print(user_list) 

# total_cost=0
# for age in user_list:
#     if age>12:
#         total_cost=total_cost+ticket_cost
#     elif 12>=age>=3:
#         total_cost=total_cost+ticket_cost_kid
# print('Total cost will be',total_cost)            

# Exercise 9/ 4

# list_of_age=[]
# list_of_names=[]
# name_age={}
# number=1
# place=0
# allowed_list=[]
# count=int(input('How many tickets do you want?'))
# while count!=0:
#     list_of_names.append(input(f'Input name of the viewer number {number}: ').lower())
#     list_of_age.append(int(input(f'Input age of the viewer number {number}: ')))
#     number=number+1
#     count=count-1
#     name_age[list_of_age[place]]=list_of_names[place]
#     place=place+1
# print(name_age)

# for item in name_age.keys():
#     if item > 21 or item < 16:
#         allowed_list.append(name_age[item])
# print(allowed_list)  

# final_call=', '.join(allowed_list)
# print(final_call.capitalize(),'can go to the cinema, else not')

# Exercise 10


# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# while "Pastrami sandwich" in sandwich_orders:
#     sandwich_orders.remove("Pastrami sandwich")
# print(sandwich_orders)    

# finished_sandwiches=[]
# for index in range(len(sandwich_orders)):
#     x=sandwich_orders.pop(0)
#     finished_sandwiches.append(x)
#     print('I made your',x)