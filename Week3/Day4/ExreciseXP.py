import requests
import os
import re
import random
import string

dir_path = os.path.dirname(os.path.realpath(__file__))

# 1
# responce=requests.get('https://norvig.com/ngrams/sowpods.txt')
# print(responce.content)
# with open('words.txt','wb') as f:
#     f.write(responce.content)

# def get_words_from_file(file):
#     with open(dir_path+f'/{file}') as f:
#         words=f.readlines()
#     newlist=[]
#     for x in words:
#         newlist.append(re.sub('\n','',x))
#     words=set(newlist)
#     return words


# def get_random_sentence(length):
#     newlist=[]
#     words=get_words_from_file('words.txt')
#     for x in range(length):
#         newlist.append(random.choice(list(words)))
#     return newlist

# # newlist=get_random_sentence(5)
# # print(newlist)

# # random_sentence=' '.join(newlist).lower()
# # print(random_sentence)

# def main():
#     user_input=input('Hi! this program will give random sentence, input how many words you want to be in it(number from 2 to 20): ')
#     if user_input.isdigit():
#         user_int=int(user_input)
#         if user_int<21 and user_int>1:
#             wordslist=get_random_sentence(user_int)
#             random_sentence=' '.join(wordslist).lower()
#         else:
#             raise TypeError('Wrong input!!!')
#     else:
#         raise TypeError('Wrong input!!!')
#     print(random_sentence)

# main()

# 2

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data=json.loads(sampleJson)
print(f'Salary is {data['company']['employee']['payable']['salary']}')

data['company']['employee']['birth_date']='21.09'
print(data)

with open('ExerciseXP.json','w') as f:
    json.dump(data,f, indent=2 , sort_keys=True)