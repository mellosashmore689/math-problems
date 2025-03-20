import numpy as np
import sympy

def solve_equation(a, b):
    # Solve the quadratic equation ax^2 + bx + c = 0
    x = sympy.solve((a*x**2) + (b*x) - c, x)
    
    return x

# Example usage
x1, x2 = solve_equation(1, -3)
print(f"x1: {x1}, x2: {x2}")
