import re
import os
from nltk.corpus import stopwords
# “A good book would sometimes cost as much as a good house.”


class Text:
    def __init__(self, text):
        self.text=text
    
    def frequancy(self,word):
        words_list=self.text.split(' ')
        count=0
        for x in words_list:
            if x.lower()==word.lower():
                count+=1
        return count
    
    def common(self):
        count=0
        words_list=self.text.split()
        for x in set(words_list):
            ocurences=words_list.count(x)
            if ocurences>count:
                mostcommon=x
                count=ocurences
        return mostcommon

    def unique(self):
        words_list=self.text.split()
        unique=set(words_list)
        return  unique
    
    @classmethod
    def use_file(cls,file):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path+f'/{file}') as f:
            content=f.read()
            return cls(content)

class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)
    
    def no_punctuation(self):
        no_punctuation=re.sub(r'^\w\s','',self.text)
        return no_punctuation
    
    def no_stop_words(self):
        english_stopwords = stopwords.words('english')
        no_stop_words=self.text
        for x in english_stopwords:
            no_stop_words=re.sub(r'\b'+x+r'\b','',no_stop_words)
        print(no_stop_words)
    
    def no_special(self):
        no_special=re.sub(r'[^a-zA-Z0-9\s]','',self.text)
        print(no_special)


# text1=Text('A good book would sometimes cost as much as a good house')
# text1.common()
# print(text1.unique())
# text2=Text.use_file('the_stranger.txt')
# print(text2.frequancy('good'))
# print(text2.unique())
# print(text2.common())
text3=TextModification.use_file('the_stranger.txt')
print(text3.no_special())





