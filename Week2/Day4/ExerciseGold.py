def get_age(year,month,day):
    nowday=6
    nowmonth=3
    nowyear=2024
    year=int(year)
    month=int(month)
    day=int(day)
    if nowday-day <0:
        month=month+1
        if nowmonth-month <0:
            year=year+1
    age=nowyear-year
    return age

def can_retire():
    date_of_birth=input('Please input your birthday in format YYYY/MM/DD: ')
    gender=input('Please input your gender m/f: ').lower()
    year=date_of_birth[0:4]
    month=date_of_birth[5:7]
    day=date_of_birth[9:]
    if gender=='f':
        if get_age(year,month,day)>=62:
            return True
        else:
            return False
    if gender=='m':
        if get_age(year,month,day)>=67:
            return True
        else:
            return False

print(can_retire())

