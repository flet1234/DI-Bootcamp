from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    print('View an Item (V)')
    print('Add an Item (A)')
    print('Delete an Item (D)')
    print('Update an Item (U)')
    print('Show an Item (S)')
    print('Quit (Q)')


def viev_an_item():
    user_input=input('Input name of the dish: ')
    user_input=user_input.lower().capitalize()
    return print(MenuManager.get_by_name(user_input))

def add_item_to_menu():
    user_input_name=input('Input name of the dish: ')
    user_input_name=user_input_name.lower().capitalize()
    user_input_price=input('Input price of the dish: ')
    user_input_price=int(user_input_price)
    newitem=MenuItem(user_input_name,user_input_price)
    if newitem.save():
        print('Item added successfully')
    else:
        print('Error')

def remove_item_from_menu():
    user_input=input('Input name of the dish: ')
    user_input=user_input.lower().capitalize()
    newitem=MenuItem(user_input)
    if newitem.delete():
        print('Item deleted successfully')
    else:
        print('Error')

def update_item_from_menu():
    user_input_name=input('Input name of the dish you want to remake: ')
    user_input_name=user_input_name.lower().capitalize()
    user_input_new=input('Input new name for the dish: ')
    user_input_new=user_input_new.lower().capitalize()
    user_input_price=input('Input new price for the dish: ')
    user_input_price=int(user_input_price)
    newitem=MenuItem(user_input_name)
    if newitem.update(user_input_new,user_input_price):
        print('Update was successfull')
    else:
        print('Error')

def show_restaurant_menu():
    result=MenuManager.all_items()
    for x in result:
        print(x)

# viev_an_item()   
# add_item_to_menu()   
# remove_item_from_menu()
# update_item_from_menu()
# show_restaurant_menu()
        
def main():
    print('Welcome to magic menu 9000')
    menu=True
    while menu==True:
        show_user_menu()
        user_input=input(': ')
        print(user_input)
        if user_input.upper()=='V':
            viev_an_item()
        elif user_input.upper()=='A':
            add_item_to_menu()
        elif user_input.upper()=='D':
            remove_item_from_menu()
        elif user_input.upper()=='U':
            update_item_from_menu()
        elif user_input.upper()=='S':
            show_restaurant_menu()
        elif user_input.upper()=='Q':
            print('End of a session')
            menu=False
        else:
            print('End of a session')
            menu=False
main()

