# 1

# from datetime import datetime
# def until_holiday():
#     holidaydate='2024-08-19'
#     upcoming_holiday=datetime.strptime(holidaydate,'%Y-%m-%d')
#     today=datetime.now()
#     time_remaining=upcoming_holiday-today
#     print(today.strftime('%Y-%m-%d %H:%M:%S'))
#     print(f'{time_remaining.days} until holiday')

# until_holiday()

# 2

# def planet_age(seconds_lived,planet):
#     seconds_lived=seconds_lived
#     earth_orbit=31557600
#     if planet.lower()=='earth':
#         age=seconds_lived//earth_orbit
#         print(f'your age on {planet} will be {age}')
#     elif planet.lower()=='mercury':
#         mercury_orbit=earth_orbit*0.2408467
#         age=seconds_lived//mercury_orbit
#         print(f'your age on {planet} will be {age}')
#     elif planet.lower()=='venus':
#         venus_orbit=earth_orbit*0.61519726
#         age=seconds_lived//venus_orbit
#         print(f'your age on {planet} will be {age}')
#     elif planet.lower()=='mars':
#         mars_orbit=earth_orbit*1.8808158
#         age=seconds_lived//mars_orbit
#         print(f'your age on {planet} will be {age}')
#     elif planet.lower()=='jupiter':
#         jupiter_orbit=earth_orbit*11.862615
#         age=seconds_lived//jupiter_orbit
#         print(f'your age on {planet} will be {age}')
#     elif planet.lower()=='saturn':
#         saturn_orbit=earth_orbit*29.447498
#         age=seconds_lived//saturn_orbit
#         print(f'your age on {planet} will be {age}')
#     elif planet.lower()=='uranus':
#         uranus_orbit=earth_orbit*84.016846
#         age=seconds_lived//uranus_orbit
#         print(f'your age on {planet} will be {age}')
#     elif planet.lower()=='neptun':
#         neptun_orbit=earth_orbit*164.79132
#         age=seconds_lived//neptun_orbit
#         print(f'your age on {planet} will be {age}')
#     else:
#         raise TypeError('Your input is invalid')
    
# planet_age(1000000000,'mars')

# 3

# import re

# return_numbers='k5k3q2g5z6x9bn'
# print(re.findall('\d',return_numbers))

# 4

