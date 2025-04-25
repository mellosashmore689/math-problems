import sympy as sp

def solve_system(x, y):
    # Solve the system of equations
    solution = sp.solve([x - 2*y, x + 3*y], (x, y))
    return solution

# Generate random data for the code
random_data = [5, 10]
solution_data = solve_system(random_data[0], random_data[1])
print(solution_data)
