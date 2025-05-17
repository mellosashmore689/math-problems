import math
from sympy import symbols

x = symbols('x')
equation = x**2 - 4*x + 5
solution = solve(equation, x)
print(solution[0])
