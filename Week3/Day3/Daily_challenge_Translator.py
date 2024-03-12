# import os

# from google.cloud import translate_v2

# os.environ['GOOGLE_APPLICATION_CREDENTIALS']= r'C:\Users\maksim\Desktop\games\googlekey.json'

# translate_client = translate_v2.Client()

# french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# text=french_words

# target='en'

# output=translate_client.translate(text, target_language=target)

# # print(output[0]['translatedText'])

# # print(french_words[0])

# result={}
# for x in range(len(french_words)):
#     result.update({french_words[x]:output[x]['translatedText']})
# print(result)

 
