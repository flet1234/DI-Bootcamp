import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'rfrfirf1234'
DATABASE = 'Restoraunt'


class MenuItem():
    tablename='Menu_Items'
    def __init__(self, name,price=0) -> None:
        self.name=name
        self.price=price
    
    def __repr__(self) -> str:
        return f'{self.name} for the price: {self.price}'

    def save(self):
        try:
            connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
            cursor=connection.cursor()
            query = f"INSERT INTO {self.tablename} (item_name, item_price) VALUES (%s, %s)"
            cursor.execute(query, (self.name, self.price))
            connection.commit()
            return True
        except psycopg2.Error as e:
            print("Eror while conecting!")
        finally:
            if connection:
                cursor.close()
                connection.close()
        
    def delete(self):
        try:
            connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
            cursor=connection.cursor()
            query = f"DELETE FROM {self.tablename} WHERE item_name=%s"
            cursor.execute(query, (self.name,))
            connection.commit()
            return True
        except psycopg2.Error as e:
            print("Eror while conecting!")
        finally:
            if connection:
                cursor.close()
                connection.close()

    def update(self,name,price):
        try:
            connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
            cursor=connection.cursor()
            query = f"SELECT Item_name FROM {self.tablename} WHERE item_name = %s"
            cursor.execute(query, (self.name,))
            results=cursor.fetchone()
            if results is not None:
                update_query = f"UPDATE {self.tablename} SET Item_name=%s, Item_price=%s WHERE item_name=%s"
                cursor.execute(update_query, (name,price,self.name))
                connection.commit()
                self.name=name
                self.price=price
                return True
            else:
                print('Item not found')
        except psycopg2.Error as e:
            print("Eror while conecting!")
        finally:    
            if connection:
                cursor.close()
                connection.close()
                
# item2 = MenuItem('Pizza', 40)   
# item2 = MenuItem('Burgershmurger',20)
# item2.save()
# item2.delete()
# item1.update('Burgershmurger',20)
# print(item1.name)

# connection=psycopg2.connect(host=HOSTNAME,user=USERNAME,password=PASSWORD,dbname=DATABASE)
# cursor=connection.cursor()
# query=f"SELECT * FROM Menu_Items"
# cursor.execute(query)
# results=cursor.fetchall()
# connection.close()
# for item in results:
#     print(item)