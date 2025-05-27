from sympy import symbols, solve

x = symbols('x')
f = x**3 - 6*x**2 + 11*x - 6
roots = solve(f, x)
print(roots)
