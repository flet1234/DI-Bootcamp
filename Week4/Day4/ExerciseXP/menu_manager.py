import psycopg2
from menu_item import MenuItem

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'rfrfirf1234'
DATABASE = 'Restoraunt'

class MenuManager:
    tablename='Menu_Items'
    def __init__(self, name) -> None:
        self.name=name

    @classmethod    
    def get_by_name(cls,name):
        try:
            connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
            cursor=connection.cursor()
            query = f"SELECT Item_name, Item_price FROM {cls.tablename} WHERE item_name = %s"
            cursor.execute(query, (name,))
            results=cursor.fetchone()
            if results is not None:
                (item_name,item_price) = results
                return MenuItem(item_name,item_price)

            else:
                return None
        except psycopg2.Error as e:
            print("Eror while conecting!")
        finally:    
            if connection:
                cursor.close()
                connection.close()

    @classmethod
    def all_items(cls):
        try:
            connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
            cursor=connection.cursor()
            query = f"SELECT Item_name, Item_price FROM {cls.tablename}"
            cursor.execute(query)
            results=cursor.fetchall()
            resultlist=[]
            for item_name,item_price in results:
                resultlist.append(MenuItem(item_name,item_price))
            return resultlist
        except psycopg2.Error as e:
            print("Eror while conecting!")
        finally:    
            if connection:
                cursor.close()
                connection.close()

# gregor=MenuManager('Gregor')
# print(gregor.get_by_name('Burger'))
# print(gregor.all_items())

