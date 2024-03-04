user_year=[]
user_input=input('Please input your birthday(DD/MM/YYYY): ')
for x in user_input[-4:]:
    user_year.append(x)
print (user_year)   

user_num=int(''.join(user_year))
print(user_num)

agenum=2024-user_num
print(agenum)

age=str(agenum)
candles=int(age[-1])
print(candles)

cake_top_string="_ _ _ _ _ _ _ _ _"
candles_on_top=cake_top_string.replace('_','i',candles)
candlesfinalfinal=candles_on_top.replace(' ','')
print(candlesfinalfinal)    

print(f'    _{candlesfinalfinal}_')
print('   |:H:a:p:p:y:|')
print(' __|___________|__')
print('|^^^^^^^^^^^^^^^^^|')
print('|:B:i:r:t:h:d:a:y:|')
print('|                 |')
print('~~~~~~~~~~~~~~~~~~~')