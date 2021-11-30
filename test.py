from random import random, randint

for i in range(1,11):
    print("rad", i, end=": ")
    for j in range(1,2):
        kast = randint(1,6)
        kast2 = randint(1,6)
        print(kast, kast2, end=" ")
    print()