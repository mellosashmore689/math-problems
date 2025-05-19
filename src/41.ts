import math
from sympy import *

def calculate_expression():
    # Define symbols and constants
    x = symbols('x')
    y = symbols('y')
    z = symbols('z')
    
    # Define the expression for the first task
    f1 = (sqrt(3)**2*x + 5*y) - 6*z
    
    # Calculate the second expression using SymPy
    result2 = simplify((x**3 - y**4 + z**2)/y)
    
    return f1, result2

# Call the function to get the results
expression_result = calculate_expression()
