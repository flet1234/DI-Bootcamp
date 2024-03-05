# 1
# words={}
# user_input=list(input('Please input a word: '))
# for i,item in enumerate(user_input):
#     if item not in words:
#         words[item]=[i]
#     else:
#         words[item].append(i)
# print(words)    

# 2

# item_purchase={'chocolate':'$3',
#                'cheese':'$5',
#                'shirt':'$10',
#                'strawberry':'$20',
#                'car':'$1000',
#                'PC': '$250'}

# wallet='$2'
# antidollar_list=[]
# for x in item_purchase.values():
#     antidollar_list.append(x[1:])

# costlist=[]
# for x in antidollar_list:
#     costlist.append(int(x))
# print(costlist)

# walletnumber=int(wallet[1:])
# print(walletnumber)

# for i,item  in enumerate(item_purchase):
#     item_purchase[item]=costlist[i]
# print(item_purchase)    
# finallist=[]

# # while walletnumber > min(item_purchase.values()):   <---while loop if we wanna buy more chocolates

# for i,item in enumerate(item_purchase):
#     if walletnumber - item_purchase[item] > 0:
#         walletnumber=walletnumber-item_purchase[item]
#         if item_purchase[item] not in finallist:
#             finallist.append(item)
#     else:
#         print('You cant afford anything')
#         break
# print (f'This is what you can get for {wallet} {finallist}')
