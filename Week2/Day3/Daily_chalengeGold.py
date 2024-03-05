# import string
# alphabet=string.ascii_lowercase
# alphabet_with_commas=alphabet+',.!?1234567890 '

# def encrypt():
#     user_string=input('Hi please inpust that u want to encrypt: ').lower()
#     position=int(input('Input step for which u want to encrypt(nefative integer to the left and positive to the right): '))
#     new_string=''
#     for letter in user_string:
#         for i,x in enumerate(alphabet_with_commas):
#             if letter==x:
#                 if i+position>=len(alphabet_with_commas):
#                     i=i-len(alphabet_with_commas)
#                     new_string=new_string+alphabet_with_commas[i+position]
#                 elif i+position<=-(len(alphabet_with_commas)):
#                     i=i+len(alphabet_with_commas)
#                     new_string=new_string+alphabet_with_commas[i+position]   
#                 else:
#                     new_string=new_string+alphabet_with_commas[i+position]
#     print(f'Your encrypted result is {new_string}')

# def decrypt():
#     user_string=input('Hi please inpust that u want to decrypt: ').lower()
#     position=int(input('Input step for which u need to decrypt(negative integer to the left and "+" to the right): '))
#     old_string=''
#     for letter in user_string:
#         for i,x in enumerate(alphabet_with_commas):
#             if letter==x:
#                 if i+position>=len(alphabet_with_commas):
#                     i=i-len(alphabet_with_commas)
#                     old_string=old_string+alphabet_with_commas[i+position]
#                 elif i+position<=-(len(alphabet_with_commas)):
#                     i=i+len(alphabet_with_commas)
#                     old_string=old_string+alphabet_with_commas[i+position] 
#                 else:
#                     old_string=old_string+alphabet_with_commas[i+position]
#     print(old_string)

# gameon=True
# while gameon==True:
#     user_input=input('Print decrypt or encrypt, for exit print exit: ')
#     if user_input=='encrypt':
#         encrypt()
#     elif user_input=='decrypt':
#          decrypt()
#     elif user_input=='exit':
#         break   
#     else:
#         print('Invalid input!!!')

















