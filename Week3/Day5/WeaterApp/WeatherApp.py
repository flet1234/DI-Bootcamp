from pyowm.owm import OWM
import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

owm = OWM('71410add991b7d44bdaa0194451236b9')
weather_mgr = owm.weather_manager()
# weather=weather_mgr.weather_at_place('Tel aviv,IL').weather
# weather_mgr.weather_at_place('Tel aviv,IL').weather.wind()
# weather_mgr.weather_at_place('Tel aviv,IL').weather.sunrise_time(timeformat='date')
# weather_mgr.weather_at_place('Tel aviv,IL').weather.sunset_time(timeformat='date')

# print(f'The weather in Tel aviv: {weather.temperature('celsius')['temp']} and {weather.status}')
# print(f'Wind speed in Tel aviv: {weather.wind()['speed']}m/s')
# print(f'Today sunrise was in {weather.sunrise_time(timeformat='date')}')
# print(f'Today sunset will be in {weather.sunset_time(timeformat='date')}')
# print(weather_mgr.weather_at_id(5108179).location)

# reg = owm.city_id_registry() <--not working, so i downloaded json file.

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def get_id():
    with open(dir_path+r'\city.list.json','r',encoding='utf-8') as f:
        city_list=json.load(f)

    user_input=input('Input city and retrive its weather: ')
    user_input=user_input.lower()
    country=input('Input your country id(RU,IL,US,GB): ') 
    country=country.upper()

    for x in city_list:
        if x['name'].lower()==user_input:
            if x['country']==country:
                id=x['id']
    return id

def weather():
    clear_screen()
    id=get_id()
    weather=weather_mgr.weather_at_id(id).weather
    print(f'The weather : {weather.temperature('celsius')['temp']} and {weather.status}')
    print(f'Wind speed : {weather.wind()['speed']}m/s')
    print(f'Today sunrise was in {weather.sunrise_time(timeformat='date')}')
    print(f'Today sunset will be in {weather.sunset_time(timeformat='date')}')

weather()


# Just example from json file
#   "id": 293397,
#         "name": "Tel Aviv",
#         "state": "",
#         "country": "IL",
#         "coord": {
#             "lon": 34.780571,
#             "lat": 32.080879
# "id": 293153,
#         "name": "Yoqne‘am ‘Illit",
#         "state": "",
#         "country": "IL",
#         "coord": {
#             "lon": 35.133331,
#             "lat": 32.666672

# daily_forecast=weather_mgr.forecast_at_id(293397, 'daily').forecast
# for weather in daily_forecast:
#     weather.get_reference_time('iso'), weather.get_status()