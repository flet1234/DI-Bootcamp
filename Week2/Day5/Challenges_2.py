# 1

# row=3
# for x in range(0,row):
#     for y in range(0,row-x-1):
#         print(' ',end='')
#     for z in range(0,2*x+1):
#         print('*',end='')
#     print()
 
# row=5
# for x in range(0,row):
#     for y in range(0,row-x-1):
#         print(' ',end='')
#     for z in range(0,x+1):
#         print('*',end='')
#     print()

# row=10
# for x in range(0,row):
#     if x<5:
#         for z in range(0,x+1):  
#             print('*',end='')
#     else:
#         for y in range(0,x-row+5):
#             print(' ',end='')
#         for z in range(0,row-x):  
#             print('*',end='')   
#     print()
   
# # 2

# my_list = [2, 24, 12, 354, 233]
# for i in range(len(my_list) - 1):
#     minimum = i
#     for j in range( i + 1, len(my_list)):
#         if(my_list[j] < my_list[minimum]):
#             minimum = j
#             if(minimum != i):
#                 my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
# print(my_list)