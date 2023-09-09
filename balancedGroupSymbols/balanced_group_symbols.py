SYMBOLS = {
    ')': '(',
    ']': '[',
    '}': '{'
}

def balanced_group_symbols(user_inp: str):
    my_stack = [] # the solution will better and not overwhelming if we use a stack

    # we iterate through the characters of the user input
    for c in user_inp: 
        if c in '([{':
            # if is an open tag, we insert to the stack
            my_stack.append(c)
        elif c in ')]}': 
            # only if is a closed tag
            # 1. check first if we have characters in our stack yet, before doing the pop()
            # 2. remove the head char in the stack and seve in a var, for do later a comparasion
            # 3. Check if the symbol that was in the stack its the pair of this closed tag; this return false if is not his pair; else will continue

            if not my_stack:
                return False
        
            head_stack =  my_stack.pop()

            if head_stack != SYMBOLS[c]:
                return False
            
        else:
            # if is anohter symbol like a 'abcmlfasl' or whatever, we just print something and return false
            print(f"!!!!! THE char '{c}' is NOT A VALID CHARACTER!!!")
            return False

    # Finally if there's another char inside my_stack this will return False, but if there's no char left, this will return True
    return len(my_stack) == 0


# STEP BY STEP VISUAL
# user_inp = '{()}[]'
# ==FOR LOOP===
# 1. c = '{'; my_stack = ['{']
# 2. c = '('; my_stack = ['{', '(']
# 3. c = ')'; my_stack = ['{'] (pop '(' since it matches with a closed tag)
# 4. c = '}'; my_stack = [] (pop '{' since it matches with a closed tag)
# ==END OF FOR LOOP==

# At this point the stack is empty which means all group symbols are balanced

# we check if the stack is empty, and it is, so the function returns True.




