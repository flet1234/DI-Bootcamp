import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'rfrfirf1234'
DATABASE = 'Restoraunt'

# Without database:

# newdikt={'Andrew':'qwer1234','Daniel':'Rombaba','Doron':'321123'}
# gameon=True
# while gameon==True:
#     user_input=input('Exit of Login?: ')
#     if user_input.lower()=='exit':
#         break
#     elif user_input.lower()=='login':
#         user_login=input('Please input your login: ')
#         user_password=input('Please input your password: ')
#         if user_login.capitalize() in newdikt and newdikt[user_login.lower().capitalize()]==user_password:
#             print('you are now logged in')
#             username=user_login
#             gameon=False
#         else:
#             print('Incorrect data')
#             user_input=input('Do you wanna signup Y/N? :')
#             if user_input.upper()=='N':
#                 break
#             elif user_input.upper()=='Y':
#                 while True:
#                     user_login=input('Please input new login: ')
#                     if user_login.capitalize() in newdikt:
#                         print('Sorry that login is already exist')
#                     else:
#                         user_password=input('Please input new password: ')
#                         newdikt[user_login.capitalize()]=user_password
#                         print('You registered succsesfully')
#                         print('You are now logged in')
#                         username=user_login
#                         gameon=False
#                         print(newdikt)
#                         break


# With database:

# try:                
gameon=True
while gameon==True:
    user_input=input('Exit of Login?: ')
    if user_input.lower()=='exit':
        break
    elif user_input.lower()=='login':
        user_login=input('Please input your login: ').capitalize()
        user_password=input('Please input your password: ')
        connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
        cursor=connection.cursor()
        query ="SELECT * FROM users WHERE login = %s"
        cursor.execute(query,(user_login,))
        result=cursor.fetchone()
        if result is not None:
            if user_login in result and user_password in result:
                print('you are now logged in')
                username=user_login
                gameon=False
        else:
            print('Incorrect data')
            user_input=input('Do you wanna signup Y/N? :')
            if user_input.upper()=='N':
                break
            elif user_input.upper()=='Y':
                    while True:
                        user_login=input('Please input new login: ').capitalize()
                        connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
                        cursor=connection.cursor()
                        query ="SELECT * FROM users WHERE login = %s"
                        cursor.execute(query,(user_login,))
                        result=cursor.fetchone()
                        if result is not None:
                            if user_login in result:
                                print('Sorry that login is already exist')
                        else:
                            user_password=input('Please input new password: ')
                            connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
                            cursor=connection.cursor()
                            query ="INSERT INTO users (login,password) VALUES (%s,%s)"
                            cursor.execute(query,(user_login,user_password))
                            connection.commit()
                            print('You registered succsesfully')
                            print('You are now logged in')
                            gameon=False
                            break

# def save(self):
#         try:
#             connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
#             cursor=connection.cursor()
#             query = f"INSERT INTO {self.tablename} (item_name, item_price) VALUES (%s, %s)"
#             cursor.execute(query, (self.name, self.price))
#             connection.commit()
#             return True
#         except psycopg2.Error as e:
#             print("Eror while conecting!")
#         finally:
#             if connection:
#                 cursor.close()
#                 connection.close()
