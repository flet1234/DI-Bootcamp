# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

   
#     #Your code starts HERE
#     def __str__(self):
#         return (f'{self.amount} {self.currency}s')

#     def __int__(self):
#         return self.amount
    
#     def __repr__(self):
#         return (f'{self.amount} {self.currency}s')

#     def __add__(self,other):
#         if type(other)==int:
#             return self.amount+other
#         elif isinstance(other, Currency) and self.currency==other.currency:
#             return self.amount+other.amount
#         else:
#             raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')
        
#     def __call__(self):
#         print(self.amount, self.currency)

#     def __iadd__(self,other):
#         if type(other)==int:
#             self.amount+=other
#             return self
#         elif isinstance(other, Currency) and self.currency==other.currency:
#             self.amount+=other.amount
#             return self
#         else:
#             raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')



# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)
# print(str((c1)))
# print(int(c1))
# print(repr(c1))
# print(c1+5)
# print(c1+c2)
# c1()
# c1 += 5
# print(c1)
# c3+=c4
# c3()
# c1+c3

# 2
# from func import add as add_2
# print(add_2(1,9))

# 3

# import string
# import random

# def secretword():
#     letters=string.ascii_letters
#     print(letters)

#     secretword=''
#     for x in range(5):
#         secretword+=letters[random.randint(0,len(letters)-1)]
#     print (secretword)
#     return secretword

# secretword()

# 4

# import datetime

# def timenow():
#     timenow=datetime.datetime.now()
#     print(timenow.date())

# timenow()

# 5

# import datetime
# def Time_until_1st_januar():
#     today=datetime.datetime.now()
#     januar1=datetime.datetime(today.year+1,1,1)
#     timeleft=januar1-today
#     print(f'There is {timeleft.days} days and {timeleft.seconds//3600} hours until 1st januar')
# Time_until_1st_januar()

# 6

# from datetime import datetime

# def how_much_minutes(date):
#     user_birthday=datetime.strptime(date,'%Y/%m/%d')
#     print(user_birthday)
#     today=datetime.now()
#     print(today)
#     lived=today-user_birthday
#     print(lived.total_seconds()//60)

# how_much_minutes('1991/08/18')

# 7

# from faker import Faker
# fake=Faker()
# users=[]
# def add_fake_user(list_for_users,how_much_users):
#     for x in range(how_much_users):
#         list_for_users.append({'name':fake.name(),'address':fake.address(), 'language_code':fake.language_code()})
#     print(list_for_users)

# add_fake_user(users,3)