from math import sqrt, pi

# Calculate Pi using the Monte Carlo method
n = 1000000
x = y = n / 2 + sqrt(4 - x * x)
if x < y:
    z = x + (y - x) / 3
else:
    z = y + (x - y) / 3
pi_estimate = pi * z**2

# Calculate Pi using an approximation formula
n_approx = 1000000
approx_pi = int(n_approx ** 2 / 4)
if n_approx < approx_pi * 2:
    pi_approximation = (approx_pi - 1) / (approx_pi + 1)
else:
    pi_approximation = ((n_approx - 1) - 2 * (n_approx ** 3)) / (6 * (n_approx - 1))

# Print the results
print("Monte Carlo Estimate of Pi:", pi_estimate, "\nApproximate Formula Estimate of Pi:", pi_approximation)
