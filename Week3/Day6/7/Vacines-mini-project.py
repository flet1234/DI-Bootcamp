class Human:
    def __init__(self, id, name, age, priority, blood_type, family=None):
        self.id=id
        self.name=name
        self.age=age
        self.priority=priority
        self.blood_type=blood_type
        self.family=family
    
    def add_family_member(self,person):
        person.family=[]
        person.family.append(self)
        person.family.append(person)
        self.family=person.family

    def __repr__(self) -> str:
        return f'{self.name}'

class Queue:
    def __init__(self,humans=[]):
        self.humans=humans
    
    def add_person(self,person):
        if person.age>60 or person.priority==True:
            self.humans.insert(0,person)
        else:
            self.humans.append(person)

    def find_in_queue(self,person):
        for x in self.humans:
            if x.name==person.name:
                return self.humans.index(x)
    
    def swap(self, person1, person2):
        index_of_p1=self.find_in_queue(person1)
        index_of_p2=self.find_in_queue(person2)
        self.humans[index_of_p1], self.humans[index_of_p2]=self.humans[index_of_p2],self.humans[index_of_p1]
    
    def get_next(self):
        if self.humans==[]:
            return None
        else:
            next_one=self.humans[0]
            del self.humans[0]
            return next_one
    
    def get_next_blood_type(self,blood_type):
        if self.humans==[]:
            return None
        else:
            for x in range(len(self.humans)):
                if self.humans[x].blood_type == blood_type.upper():
                    next_one=self.humans.pop(x)
                    return next_one

    
    def sort_by_age(self):
        self.humans.sort(key=lambda human: (-human.priority, -human.age))

    def rearrange_queue(self):
        for x in range(len(self.humans)):
            for y in range(x+1,len(self.humans)):
                if self.humans[x].family==self.humans[y].family and self.humans[x].family!=None :
                    if self.humans[-1]==self.humans[y]:
                        rearange=self.humans.pop(y)
                        self.humans.insert(x-1,rearange)
                        break
                    else:    
                        rearange=self.humans.pop(y)
                        self.humans.insert(x+2,rearange)
                        break

human1=Human(100,'John',35,False,'A')
human2=Human(200,'Mara',27,False,'AB')
human3=Human(300,'Doron',67,False,'O')
human4=Human(400,'Bobenique',21,True,'B')
human5=Human(500,'Bob',28,False,'B')
human6=Human(600,'Andrew',44,True,'AB')
human7=Human(700,'Paul',98,False,'O')
human8=Human(800,'Olga',39,True,'A')

new_queue=Queue()
new_queue.add_person(human1)
new_queue.add_person(human2)
new_queue.add_person(human3)
new_queue.add_person(human4)
new_queue.add_person(human5)
new_queue.add_person(human6)
new_queue.add_person(human7)
new_queue.add_person(human8)

human5.add_family_member(human2)
print(human1.family)

new_queue.rearrange_queue()
# print(new_queue.find_in_queue(human4))

# new_queue.swap(human4,human1)
# new_queue.sort_by_age()
# print(new_queue.get_next())
# print(new_queue.get_next())
# print(new_queue.get_next())
# print(new_queue.get_next())
# print(new_queue.get_next())
# print(new_queue.get_next_blood_type('ab'))
# print(new_queue.get_next_blood_type('o'))
# print(new_queue.get_next_blood_type('a'))
# print(new_queue.get_next_blood_type('b'))
# print(new_queue.get_next_blood_type('ab'))
print(new_queue.humans)


