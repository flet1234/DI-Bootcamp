# 1

# mylist=[1,2,3,4,5,6]
# x='Hello'
# mylist.insert(4,x)
# print(mylist)

# 2

# mystring='Hello world and stars'
# space_count=0
# for x in mystring:
#     if x==' ':
#         space_count+=1
# print(space_count)

# 3
# import string

# mystring='Hello WorLd'
# upcount=0
# lowcount=0
# for x in mystring:
#     if x.isupper():
#         upcount+=1
#     elif x.islower():
#         lowcount+=1
# print(upcount, lowcount)

# 4 

# mylist=[1,2,3,4,5]
# result=0
# for x in mylist:
#     result+=x
# print(result)

# 5

# mylist=[23,56,12,76,4,18,65,34,89,12,7]
# newlist=[]
# for x in range(len(mylist)):
#     if mylist[x]>mylist[x-1]:
#         newlist.append(mylist[x])
# print(newlist[-1])

# 6

# number=4
# factorial_number=1
# for x in range(1,number+1):
#     factorial_number*=x
# print(factorial_number)

# 7

# mylist=[1,2,3,4,5,6]
# count=0
# for x in mylist:
#     count+=1
# print(count)

# 8

# mylist=[1,5,4,2,1,1,1]
# result=0
# for x in range(len(mylist)):
#     mylist[x]*=mylist[x]
# for x in mylist:
#     result+=x
# for x in range(1,result):
#     if result/x==x:
#         print(x)

# 9

# my_list1=[1,2,3,4,5,6]
# my_list2=[6,5,4,3,2,1]
# my_list3=[4,2,5,3,1,6]

# def check_mono(somelist):
#     result=True
#     for x in range(len(somelist)):
#         y=x+1 
#         if y==len(somelist):
#             break
#         if somelist[x]<somelist[y]:
#             result1=True
#         else:
#             result1=False
#             break
        
#     for x in range(len(somelist)):
#         y=x+1
#         if y==len(somelist):
#             break
#         if somelist[x]>somelist[y]:
#             result2=True
#         else:
#             result2=False
#             break
#     if result1 or result2==True:
#         result=True
#     else:
#         result=False

#     print(result)

# check_mono(my_list1)

#<-------------simple method----------------->

# def monocheck(somelist):
#     newlist1=sorted(my_list1)
#     newlist2=sorted(my_list1,reverse=True)
#     if newlist1 == somelist or newlist2 == somelist:
#         result=True
#     else: 
#         result=False
#     print(result)
#     return result

# monocheck(my_list3)

# 10

# mylist=['Hello','goodnight','night','ok']
# count=0
# for x in mylist:
#     if count<len(x):
#         count=count+len(x)
#         word=x
# print(word)

# 11

# mylist=['hello',1,'hey','bokertov',11,23]
# int_list=[]
# string_list=[]
# for x in mylist:
#     if type(x)==int:
#         int_list.append(x)
#     elif type(x)==str:
#         string_list.append(x)
# print(int_list)
# print(string_list)

# 12

# mystring='radar'
# mystring1='John'

# def palidrome(string):
#     if string==string[::-1]:
#         return True
#     else:
#         return False

# print(palidrome(mystring1))

# 13

# sentence = 'Do or do not there is no try'
# k=2
# def sum_over_k(sentence,k):
#     count=0
#     newlist=sentence.split(' ')
#     for x in newlist:
#         if len(x)>k:
#             count+=1
#     return print(count)


# sum_over_k(sentence,2)

# 14

# dict_avg={'a': 1,'b':2,'c':8,'d': 1}
# result=sum(dict_avg.values())//len(dict_avg)
# print(result)

# 15

# num=10
# num1=20
# mylist=[]
# for x in range(2,num+1):
#     if num%x==0 and num1%x==0:
#         mylist.append(x)
# print(mylist)

# 16

# num=29
# mylist=[]
# for x in range(2,num+1):
#     if num%x==0:
#         mylist.append(x)
# if len(mylist)==1:
#     result=True
# else:
#     result=False
# print(result)

# 17

# mylist=[1,2,2,3,4,5]
# result=[]
# for i,x in enumerate(mylist):
#     if x%2==0 and i%2==0:
#         result.append(x)
# print(result)

# 18

# def type_count(**kwargs):
#     mydikt={}
#     for x in kwargs.values():
#         value_type=type(x)
#         mydikt[value_type]=mydikt.get(value_type,0)+1
#     return print(mydikt)

# type_count(a=1,b='string',c=1.0,d=True,e=False)

# 19


# def splitmimic(string,splitter):
#     newstring=''
#     newlist=[]
#     string=string+splitter
#     for x in string:
#         if x!=splitter:
#             newstring+=x
#         else:
#             newlist.append(newstring)
#             newstring=''
#     return print(newlist)

# splitmimic('Hello,my name is,john',',')

# 20

# mystring='torpedon'
# newstring=''
# for x in mystring:
#     newstring+='*'
# print(newstring)