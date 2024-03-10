# class Phone:
#     def __init__(self,phone_number):
#         self.number=phone_number
#         self.call_history=[]
#         self.messages=[]

#     def call(self,phone2):
#         call=f'{self.number} calles {phone2.number}'
#         self.call_history.append(call)
#         print(call)

#     def show_call_history(self):
#         print(self.call_history)

#     def send_message(self,other_phone,content):
#         message={}
#         message['from']=self.number
#         message['content']=content
#         message['to']=other_phone.number
#         self.messages.append(message)

#     def take_message(self, other_phone,content):
#         message={}
#         message['from']=other_phone.number
#         message['content']=content
#         message['to']=self.number
#         self.messages.append(message)


#     def show_outgoing_messages(self):
#         for x in self.messages:
#             if x['from']==self.number:
#                 print(f'From {self.number} to {x['to']}: {x['content']}')

#     def show_incoming_messages(self):
#         for x in self.messages:
#             if x['to']==self.number:
#                 print(f'From {x['from']} to {x['to']}: {x['content']}')
    
#     def show_messages_from(self,other_phone):
#         for x in self.messages:
#             if x['from']==other_phone.number:
#                 print(f'From {x['from']} to {x['to']}: {x['content']}')

# mynumber=Phone(555)
# hisnumber=Phone(999)
# hernumber=Phone(222)

# mynumber.call(hisnumber)
# mynumber.show_call_history()
# mynumber.send_message(hisnumber,'Hi garry')
# mynumber.send_message(hernumber,'from my to her number')
# mynumber.take_message(hernumber,'from her to my number')
# mynumber.take_message(hisnumber,'from his to my number')

# mynumber.show_outgoing_messages()

# mynumber.show_incoming_messages()

# mynumber.show_messages_from(hisnumber)


