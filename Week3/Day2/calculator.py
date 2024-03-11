import operators

print(operators.addOperator(10,5))
print(operators.divideOperator(10,5))

from operators import addOperator

print(addOperator(20,10))

from operators import divideOperator as popo

print(popo(9,3))