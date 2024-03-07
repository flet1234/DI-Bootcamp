import string

field_points={'column1_row1':' ','column2_row1':' ','column3_row1':' ',
              'column1_row2':' ','column2_row2':' ','column3_row2':' ',
              'column1_row3':' ','column2_row3':' ','column3_row3':' '}

field=f'_____ _____ _____\n     |     |     \n  {field_points['column1_row1']}  |  {field_points["column2_row1"]}  |  {field_points["column3_row1"]}   \n_____|_____|_____\n     |     |     \n  {field_points["column1_row2"]}  |  {field_points["column2_row2"]}  |  {field_points["column3_row2"]}  \n_____|_____|_____\n     |     |     \n  {field_points["column1_row3"]}  |  {field_points["column2_row3"]}  |  {field_points["column3_row3"]}  \n_____|_____|_____\n'

sides=['O','X']

def display_field(field_points):
    field=f'_____ _____ _____\n     |     |     \n  {field_points['column1_row1']}  |  {field_points["column2_row1"]}  |  {field_points["column3_row1"]}   \n_____|_____|_____\n     |     |     \n  {field_points["column1_row2"]}  |  {field_points["column2_row2"]}  |  {field_points["column3_row2"]}  \n_____|_____|_____\n     |     |     \n  {field_points["column1_row3"]}  |  {field_points["column2_row3"]}  |  {field_points["column3_row3"]}  \n_____|_____|_____\n'
    print(field)


def side_choice():
    while True:
        side=input('Choose your side X or O, print x/o: ').upper()
        if side not in sides:
            print("Print 'x' or 'o'")
        else:
            break
    return side
    
def user_choice(side):
    field_demo=('___ ___ ___\n   |   |   \n 7 | 8 | 9 \n___|___|___\n   |   |   \n 4 | 5 | 6 \n___|___|___\n   |   |   \n 1 | 2 | 3 \n___|___|___\n')
    print(field_demo)
    while  True:
        user_input=input(f'Choose place for {side}: ')
        if not user_input.isdigit():
            print("Please imput a integer from 1 to 9!")
        else:
            user_coordinate=int(user_input)
            if user_coordinate<1 or user_coordinate>9:
                print("Please imput a integer from 1 to 9!")
            else:    
                break
    return user_coordinate    

def we_get_win_cond ():
    while True:
        answerlist=['y','n','no','exit','yes']
        user_input=input('You want to start again? or exit? print Y/N: ').lower()
        if user_input not in answerlist:
            print('Invalid input')
        else:
            answerlist=['n','no','exit']
            if user_input in answerlist:
                wincondition=False
                gameon=False
                conditiontuple=(wincondition,gameon)
                print('Bye bye')
                break
            else:
                wincondition=False
                gameon=True
                conditiontuple=(wincondition,gameon)
                break
    return conditiontuple

def tik_tak_toe():
    gameon=True
    while gameon==True:
        field_points={  'column1_row1':' ','column2_row1':' ','column3_row1':' ',
                        'column1_row2':' ','column2_row2':' ','column3_row2':' ',
                        'column1_row3':' ','column2_row3':' ','column3_row3':' '}
        print('Welcome, it is a tic-tac-toe game')
        side=side_choice()
        wincondition=True
        while wincondition==True:
            while True: 
                display_field(field_points)
                user_coordinate=user_choice(side)
                if user_coordinate==9:
                    if field_points['column3_row1']==' ':
                        field_points['column3_row1']=side
                        break
                    else:
                        print('You need to choose empty space!!!')
                elif user_coordinate==8:
                    if field_points['column2_row1']==' ':
                        field_points['column2_row1']=side
                        break
                    else:
                        print('You need to choose empty space!!!')
                elif user_coordinate==7:
                    if field_points['column1_row1']==' ':
                        field_points['column1_row1']=side
                        break
                    else:
                        print('You need to choose empty space!!!')
                elif user_coordinate==6:
                    if field_points['column3_row2']==' ':
                        field_points['column3_row2']=side
                        break
                    else:
                        print('You need to choose empty space!!!')
                elif user_coordinate==5:    
                    if field_points['column2_row2']==' ':
                        field_points['column2_row2']=side
                        break
                    else:
                        print('You need to choose empty space!!!')
                elif user_coordinate==4:
                    if field_points['column1_row2']==' ':
                        field_points['column1_row2']=side
                        break
                    else:
                        print('You need to choose empty space!!!')
                elif user_coordinate==3:
                    if field_points['column3_row3']==' ':
                        field_points['column3_row3']=side
                        break
                    else:
                        print('You need to choose empty space!!!')
                elif user_coordinate==2:
                    if field_points['column2_row3']==' ':
                        field_points['column2_row3']=side
                        break
                    else:
                        print('You need to choose empty space!!!')
                elif user_coordinate==1:
                    if field_points['column1_row3']==' ':
                        field_points['column1_row3']=side
                        break
                    else:
                        print('You need to choose empty space!!!')
            if field_points['column1_row1']==field_points['column2_row1']==field_points['column3_row1']==side:
                print(f'Congratulations {side} win!')
                display_field(field_points)
                wincondition,gameon=we_get_win_cond()
            elif field_points['column1_row2']==field_points['column2_row2']==field_points['column3_row2']==side:
                print(f'Congratulations {side} win!')
                display_field(field_points)
                wincondition,gameon=we_get_win_cond()
            elif field_points['column1_row3']==field_points['column2_row3']==field_points['column3_row3']==side:
                print(f'Congratulations {side} win!')
                display_field(field_points)
                wincondition,gameon=we_get_win_cond()
            elif field_points['column1_row1']==field_points['column1_row2']==field_points['column1_row3']==side:
                print(f'Congratulations {side} win!')
                display_field(field_points)
                wincondition,gameon=we_get_win_cond()
            elif field_points['column2_row1']==field_points['column2_row2']==field_points['column2_row3']==side:
                print(f'Congratulations {side} win!')
                display_field(field_points)
                wincondition,gameon=we_get_win_cond()
            elif field_points['column3_row1']==field_points['column3_row2']==field_points['column3_row3']==side:
                print(f'Congratulations {side} win!')
                display_field(field_points)
                wincondition,gameon=we_get_win_cond()
            elif field_points['column1_row1']==field_points['column2_row2']==field_points['column3_row3']==side:
                print(f'Congratulations {side} win!')
                display_field(field_points)
                wincondition,gameon=we_get_win_cond()
            elif field_points['column3_row1']==field_points['column2_row2']==field_points['column1_row3']==side:
                wincondition,gameon=we_get_win_cond()
            if (' ') not in field_points.values() and gameon==True:
                print('Its a draw')
                display_field(field_points)
                wincondition,gameon=we_get_win_cond()
            if side=='X':
                side='O'
            else:
                side='X'

tik_tak_toe()