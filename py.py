key = str(input("Logging key...\n"))

while key:
    if key == "":
        print("enter")
        key = str(input("Logging key...\n"))
    else:
        print(key)
        key = str(input("Logging key...\n"))