import math
from collections import Counter

def calculate_average(numbers):
    if not numbers:
        return 0
    
    total_sum = sum(numbers)
    count = len(numbers)
    
    average = total_sum / count
    return average

numbers = [1, 2, 3, 4, 5]
average = calculate_average(numbers)
print(average) # Output: 3.0
