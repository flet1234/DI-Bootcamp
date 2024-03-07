import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728

my_list=[]
pair_list=[]
count=1
for x in list_of_numbers:
    if x<=3728:
        my_list.append(x)

for x in range(len(my_list)):
    for y in range(x+1,len(my_list)):
        if my_list[x] + my_list[y] == 3728:
            pair_list.append(my_list[x])
            pair_list.append(my_list[y])
            my_list.pop(x)
            my_list.pop(y-1)
            break

print(len(pair_list)/2)
