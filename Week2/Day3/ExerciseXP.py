# Exercise 1

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# newdictionary={}
# for item,val in zip(keys, values):
#     newdictionary[item]=val
# print(newdictionary)

# Exercise 2

# tasks 1,2,3

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# ticket_cost=15
# ticket_cost_kid=10
# total_cost=0

# for keys in family:
#     if family.get(keys)>12:
#         total_cost=total_cost+ticket_cost
#     elif 12>=family.get(keys)>=3:
#         total_cost=total_cost+ticket_cost_kid
# print('Total cost will be',total_cost)      

# task 4

# list_of_names=[]
# list_of_age=[]
# family={}
# ticket_cost=15
# ticket_cost_kid=10
# total_cost=0
# number=1
# place=0

# count=int(input('How many tickets do you want?'))
# while count!=0:
#     list_of_names.append(input(f'Input name of the viewer number {number}: ').lower())
#     list_of_age.append(int(input(f'Input age of the viewer number {number}: ')))
#     number=number+1
#     count=count-1
#     family[list_of_names[place]]=list_of_age[place]
#     place=place+1
# print(family)

# for keys in family:
#     if family.get(keys)>12:
#         total_cost=total_cost+ticket_cost
#     elif 12>=family.get(keys)>=3:
#         total_cost=total_cost+ticket_cost_kid
# print('Total cost will be',total_cost)      

# Exercise 3
# 2
# brand={
#     'name':'Zara',
#     'creation date': 1975,
#     'creator name': 'Amancio Ortega Gaona',
#     'type of clothes':['men','women','children','home'],
#     'international_competitors': ['Gap', 'H&M', 'Benetton'],
#     'number_stores': 7000, 
#     'major_color':{
#     'France': 'blue', 
#     'Spain': 'red', 
#     'US':['pink', 'green']
#         } 
#     }
# # 3
# brand['number_stores']=2
# print(brand)
# # 4
# print(f"{brand['name']}'s clients are {brand['type of clothes'][0]}'s {brand['type of clothes'][1]}'s and {brand['type of clothes'][2]} from whole world")
# # 5
# brand['country_creation']='Spain'
# print(brand)
# # 6
# if 'international_competitors' in brand:
#     brand['international_competitors'].append('Desigual')
# print(brand)    
# # 7
# del brand['creation date']
# print(brand)
# # 8
# print(brand['international_competitors'][-1])
# # 9
# print(' '.join(brand['major_color']['US']))
# # 10
# print(len(brand))
# # 11
# keys_only=brand.keys()
# print(','.join(keys_only))
# # 12
# more_on_zara={'creation date':1975,'number_stores':10000}
# print(more_on_zara)
# # 13
# brand.update(more_on_zara)
# print(brand)
# #14
# print(brand['number_stores'])
# its updated by update()

# Exercise 4

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# 1
# disney_users_A={}
# for i,item in enumerate(users):
#     disney_users_A[item]=i
# print(disney_users_A)
# 2
# disney_users_A={}
# for i,item in enumerate(users):
#     disney_users_A[i]=item
# print(disney_users_A)
# 3
# disney_users_A={}
# for i,item in enumerate(sorted(users)):
#     disney_users_A[item]=i
# print(disney_users_A)
# 4.1
# disney_users_A={}
# for i,item in enumerate(users):
#     if 'i' in users[i]:
#         disney_users_A[item]=i
# print(disney_users_A)
# 4.2
# disney_users_A={}
# for i,item in enumerate(users):
#     if 'm' in users[i][0].lower() or 'p' in users[i][0].lower():
#         disney_users_A[item]=i
# print(disney_users_A)