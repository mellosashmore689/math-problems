import numpy as np
from scipy.optimize import fmin

def square_root(x):
    return x ** 0.5

result = fmin(square_root, 4)
print(result)
