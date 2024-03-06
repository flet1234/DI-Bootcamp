string='Programming is cool!'
character='o'

def letter_check(string, character):
    count=0
    for x in string.lower():
        if x==character:
            count=count+1
    print(f"There is {count} {character}'s in your string")

letter_check('How was your day?','w')