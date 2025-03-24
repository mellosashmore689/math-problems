import sympy as sp
from sympy import symbols

x = symbols('x')
expr = x**2 - 3*x + 2
sympy_code = sp.simplify(expr)
print(sympy_code)
