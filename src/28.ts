import sympy

def main():
    # Define symbols
    x, y = sympy.symbols('x y')

    # Define equation
    f = (x - 1) * (y + 2)

    # Solve for y
    y_solution = solve(f, y)

    # Print the solution
    print(y_solution[0])

if __name__ == "__main__":
    main()
