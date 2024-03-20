import requests
import psycopg2
import random

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'rfrfirf1234'
DATABASE = 'Restoraunt'

url='https://restcountries.com/v3.1/all'
response=requests.get(url)
if response.status_code==200:
    data=response.json()
else:
    print(' Connection ERROR')

# print(data[0]['name']['official'])
# print(data[0]['capital'][0])
# print(data[0]['flags']['png'])
# print(data[0]['subregion'])
# print(data[0]['population'])

for x in range(10):
    x=random.randint(0,len(data))
    try:
        connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
        cursor=connection.cursor()
        query = f"""INSERT INTO Countries (Name, Capital, Flag, Subregion, Population)
        VALUES (%s, %s, %s, %s, %s)"""
        cursor.execute(query, (data[x]['name']['official'], data[x]['capital'][0],data[x]['flags']['png'],data[x]['subregion'],data[x]['population']))
        connection.commit()
    except psycopg2.Error as e:
        print("Eror while conecting!")
    finally:
        if connection:
            cursor.close()
            connection.close()


