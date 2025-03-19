import random
def generate_ts_code():
    numbers = list(range(10))
    operations = ['+', '-', '*', '/']
    ts_code = ''
    for i in range(5):
        number = random.choice(numbers)
        operation = random.choice(operations)
        ts_code += f'{number} {operation} '
    return ts_code[:-1]