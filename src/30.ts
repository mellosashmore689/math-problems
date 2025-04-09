import numpy as np

def rand_matrix(n):
    """
    Generate a random matrix with n rows and n columns.
    
    Args:
    - n (int): Number of rows and columns in the matrix.
    
    Returns:
    - A 2D NumPy array filled with random numbers.
    """
    return np.random.rand(n, n)
