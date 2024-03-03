number=int(input("Please input a number: "))
if number % 3==0 and number % 5==0:
    print('FizzBuzz')
elif number % 5==0:
    print("Buzz")
elif number %3==0:
    print('Fizz')
else :
    print('No Fizz Buzz for you!')      