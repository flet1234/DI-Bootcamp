import os

dir_path = os.path.dirname(os.path.realpath(__file__))

class AnagramChecker:
    def __init__(self,word):
        with open(dir_path+'/words.txt') as f:
            self.text=f.read()
            self.word=word
    
    def is_valid_word(self):
        valid=False
        if self.word.upper() in self.text:
            valid=True
        return valid
    
    def get_anagrams(self):
        list_of_words=self.text.split()
        list_of_anagrams=[]
        checked_word=self.word.upper()
        for x in list_of_words:
            if len(x)==len(checked_word) and x!=checked_word:
                if sorted(list(x))==sorted(list(checked_word)):
                    list_of_anagrams.append(x)
        return list_of_anagrams
    

    