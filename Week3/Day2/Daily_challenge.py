# from math import ceil

# class Pagination:
#     def __init__(self,items=None,pageSize=10):
#         self.items=items
#         self.pageSize=round(pageSize)
#         self.currentPage=1
#         self.totalPages=len(self.items)/self.pageSize
        
#     def all_items(self):
#         pagelist=[[] for x in range(ceil(len(self.items)/self.pageSize))]
#         i=self.pageSize
#         y=0
#         listnum=0
#         while y<len(self.items):
#             for x in range(y,i):
#                 pagelist[listnum].append(self.items[x])
#             i+=4
#             y+=4
#             if i>len(self.items):
#                     i=len(self.items)
#             listnum+=1
#         return pagelist

#     def getVisibleItems(self):
#         pagelist=self.all_items()
#         print(pagelist[self.currentPage-1])
    
#     def nextPage(self):
#         self.currentPage+=1
#         if self.currentPage>ceil(len(self.items)/self.pageSize):
#             self.currentPage=ceil(len(self.items)/self.pageSize)
#         return self
    
#     def previousPage(self):
#         self.currentPage-=1
#         if self.currentPage<1:
#             self.currentPage=1
#         return self
    

#     def firstPage(self):
#         self.currentPage=1
#         return self
    

#     def lastPage(self):
#         self.currentPage=ceil(len(self.items)/self.pageSize)
#         return self
    
#     def goToPage(self, pageNum):
#         self.currentPage=pageNum
#         return self
    

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)


# p.getVisibleItems()
# p.nextPage().nextPage().nextPage()
# p.getVisibleItems()
# p.previousPage()
# p.getVisibleItems()
# p.firstPage()
# p.getVisibleItems()
# p.lastPage()
# p.getVisibleItems()
# p.firstPage()
# p.getVisibleItems()
# p.goToPage(3)
# p.getVisibleItems()