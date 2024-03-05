# # 1,2,3
# birthdays={'Max':'1991/08/19',
#            'Daniel':'1999/02/24',
#            'Hotulka':'2005/01/31',
#            'Pinokio':'1789/05/15',
#            'Tratarkin':'1867/07/21'}
# print('Hi user, You can look up the birthdays of the people in the list!')
# print(','.join(birthdays.keys()))
# user_name=input('Please input your name: ').lower().capitalize()
# if user_name not in birthdays:
#     user_answer=input(f'Sorry, we don’t have the birthday information for {user_name} do you want to add? Y/N :').upper()
#     if user_answer=='N':
#         print('Bye')
#     elif user_answer=='Y':
#         user_date=input('Please input your birthday date in format YYYY/MM/DD: ')
#         birthdays[user_name]=user_date
#         print(f'Birthday of {user_name} is in {birthdays[user_name]}')
# else:
#     print(f'Birthday of {user_name} is in {birthdays[user_name]}')

#4

# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }
# for x in items:
#     print(f'Price of {x} is {items[x]}')


# items = {
#     "banana": {"price": 4 , "stock":10},
#     "apple": {"price": 2, "stock":5},
#     "orange": {"price": 1.5 , "stock":24},
#     "pear": {"price": 3 , "stock":1}
# }
# total=0
# for x in items:
#     key1,key2=items[x]
#     all_of_one_item=items[x][key1]*items[x][key2]
#     total=all_of_one_item+total
# print(total)