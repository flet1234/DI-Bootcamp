# import math
# import turtle

# class Circle:
#     def __init__(self, radius, diametr):
#         self.radius=radius
#         self.diametr=diametr
#         self.name=str(Circle.find_area(self))
    
#     @classmethod
#     def make_circle_with_radius(cls,radius):
#         return Circle(radius,radius*2)
    
#     @classmethod
#     def make_circle_with_diametr(cls,diametr):
#         return Circle(diametr/2,diametr)
    
#     def find_area(self):
#         area=math.pi*(self.radius**2)
#         return area
    
#     def __str__(self):
#         return f'Circle with radius:{self.radius} and diametr:{self.diametr}'
    
#     def __repr__(self):
#         return self.name
    
#     def __add__(self,other_circle):
#         totalarea=Circle.find_area(self)+Circle.find_area(other_circle)
#         return Circle.make_circle_with_radius(math.sqrt(totalarea/math.pi))

#     def __lt__(self,other_circle):
#         return Circle.find_area(self)<Circle.find_area(other_circle)
    
#     def __gt__(self,other_circle):
#         return Circle.find_area(self)>Circle.find_area(other_circle)
    
#     def __eq__(self,other_circle):
#         return Circle.find_area(self)==Circle.find_area(other_circle)
    
#     def __ne__(self,other_circle):
#         return Circle.find_area(self)!=Circle.find_area(other_circle)
    
    
    
        
# c1=Circle(20,40)
# c2=Circle.make_circle_with_diametr(100)
# c3=Circle.make_circle_with_radius(30)

# # print(c2.radius)
# # print(c3.diametr)

# # print(c1.find_area())

# # print(str(c1))

# # print(c2+c1)

# # print(c2!=c1)
# # print(str(c1))
# mylist=[]
# mylist.append(c3)
# mylist.append(c2)
# mylist.append(c1)
# print(mylist)
# print(sorted(mylist))
# s=turtle.getscreen()
# t=turtle.Turtle()

# for x in sorted(mylist):
#     t.circle(x.radius)