from datetime import datetime

class Airline:
    def __init__(self,id,name) -> None:
        self.id=id
        self.name=name
        self.planes=[]
    
class Airplane:
    def __init__(self,id) -> None:
        self.id=id
        self.current_location=Airport.city
        self.company=None
        self.next_flights=sorted([])
    
    def fly(self,destination):
        pass

    def location_on_date(self,date):
        pass

    def availible_on_date(self,date,location):
        pass

class Flight:
    def __init__(self,date) -> None:
        self.date=datetime.date(date)
        self.destination=None
        self.origin=



x=datetime.now()
print(datetime.date(x))
