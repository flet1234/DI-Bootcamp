# 1

# What is a class?-->It's a blueprint for creating objects, atributes for them, and method's(functions for them)
# What is an instance?-->its a unic object of a class
# What is encapsulations?--> Encapsulations hide data about how class works or it iternals state, but give users  public methonds to work with it
# What is abstractions?--> abstraction allows to simplify complex systems, manage complexity, and create modular, maintainable, and extensible code by focusing on essential characteristics while hiding unnecessary details
# What is inheritance?-->it allowes to inherit methods and atributes from a parent class
# What is multiple inheritanse?--> if your class have multiple parent classes
# What is polymorohism?-->we can use 1 method but it will do other things to other class, like dunder methods or methods of child classes from 1 parrent
# What is method resolution order or Mro?--> its an order in which python uses methods from parent/child classes, so it will be always predictable

# 2
import random

class Cards:
    def __init__(self,suit,value):
        self.suit=suit
        self.value=value

    def __repr__(self):
        return (f'{self.value} of {self.suit}')
    
class Deck:
    def __init__(self):
        newdeck=[]
        for suit in ['Hearts','Diamonds','Clubs','Spades']:
            for value in ['A','2','3','4','5','6','7','8','9','10','J','Q','K']:
                newdeck.append(Cards(suit,value))
        self.cards=newdeck
    
    def __repr__(self):
        return (f'Deck of {len(self.cards)} cards')

    def shufle(self):
        random.shuffle(self.cards)
    
    def deal(self):
        hand=self.cards.pop(-1)
        return hand
newdeck=Deck()
print(newdeck.cards)
newdeck.shufle()
print(newdeck.cards)
newdeck.deal()
print(newdeck)
print(newdeck.cards)