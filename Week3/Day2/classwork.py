# class Door:
#     def __init__(self):
#         self.is_closed=True

#     def open_door(self):
#         self.is_closed=False
#         print('door is opened')
    
#     def close_door(self):
#         self.is_closed=True
#         print('door is closed')

# class Blocked_door(Door):
#     def __init__(self):
#         super().__init__()
    
#     def open_door(self):
#         print('You cant open a blocked door')

# # mydoor=Door()
# # mydoor.close_door()
# # mydoor.open_door()
# # print(mydoor.is_closed)
# # mydoor.close_door()
# # print(mydoor.is_closed)

# myblockeddoor=Blocked_door()
# print(myblockeddoor.is_closed)
# myblockeddoor.close_door()
# myblockeddoor.open_door()


# class A():

#     def dothis(self):
#         print("doing this in A")


# class B(A):
#     pass


# class C():
#     def dothis(self):
#         print("doing this in C")


# class D(C, B):
#     pass

# d_instance = D()
# d_instance.dothis() 


# class Book():
#     def __init__(self, title, author, publication_date, price):
#         self.title = title
#         self.author = author
#         self.publication = publication_date
#         self.price = price

#     def present(self):
#         print(f'Title: {self.title}')

# class Fiction(Book):
#     def __init__(self, title, author, publication_date, price, is_awesome):
#         super().__init__(title, author, publication_date, price)
#         self.genre = 'Fiction'
#         self.is_awesome = is_awesome
#         if self.is_awesome:
#             self.bored = False
#             print('Woow this is an awesome book')
#         else:
#             self.bored = True
#             print('I am very bored')

# if __name__ == '__main__':
#     foundation = Fiction('Asimov', 'Foundation', '1966', '5£', True)
#     foundation.present()
#     print(foundation.price)
#     print(foundation.bored)
#     boring_book = Fiction('boring_guy', 'boring_title', 'boring_date', '9000£', False)
#     print(boring_book.bored)

# Given a list of numbers, write a function that returns the sum of every number.
# BUT you can have a malicious string inside the list.

# my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
# result=0
# i=0
# while i!=len(my_list):
#     try:
#         result=result+my_list[i]
#         i+=1
#     except:
#         print('String atack')
#         i+=1
#         continue
# print(result)    

# Create a file called operators.py

# Create 2 functions : addOperator(x,y) that returns the addition of 2 numbers,
#  and divideOperator(x,y) that returns the division of 2 numbers

# Create another file called calculator.py, and import the operators module.
# Call the 2 functions and display the results

# Do this process 3 times :

# once by importing the whole module
# the second time by importing specific functions
# the third time by using alias

