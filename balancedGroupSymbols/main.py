from balanced_group_symbols import balanced_group_symbols

if __name__ == "__main__":
    in_str = input("Please enter your string: ")
    res = balanced_group_symbols(in_str)
    print("This is:", 'Balanced!'if res else 'Unbalanced :(')