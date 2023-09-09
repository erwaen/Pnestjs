def snail_rearrangement(matrix: list[list[int]]):
    my_list = []
    # breakpoint()
    while matrix:
        # Remove the first row and append this one to the result list my_list
        my_list += matrix.pop(0)

        #1. LEFT TO RIGHT PART

        # to avoid errors, check first if matrix have element and the check if exist the first actual row is not empty
        if matrix and matrix[0]:
            for row in matrix:
                # we append to list the last element for every remaining row in the matrix, this remove from the matrix too because the for is pass by
                my_list.append(row.pop())

        # 2. TOP TO BOTTOM PART
        if matrix:
            # remove and append all the last row (bottom one) and append to the list
            my_list += matrix.pop()[::-1]

        # 3. BOTTOM TO TOP PART
        if matrix and matrix[0]:
            # we append to my_list every first element of every row, but in reverse order (from bottom to top)
            for row in matrix[::-1]:
                my_list.append(row.pop(0))
    return my_list

matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
]
snail_rearrangement(matrix)


