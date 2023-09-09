from bgsAndSnailR.src.snail_rearrangement import snail_rearrangement

def test_snail_empty():
    assert snail_rearrangement([]) == []

def test_snail_1x1():
    assert snail_rearrangement([[1]]) == [1]

def test_snail_2x2():
    matrix = [
        [1, 2],
        [3, 4]
    ]
    assert snail_rearrangement(matrix) == [1,2,4,3]

def test_snail_3x3_matrix():
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    assert snail_rearrangement(matrix) == [1, 2, 3, 6, 9, 8, 7, 4, 5]

def test_snail_4x4_matrix():
    matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    assert snail_rearrangement(matrix) == [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

def test_snail_9x9_matrix():
    matrix = [
        [1,  2,  3,  4,  5,  6,  7,  8,  9],
        [10, 11, 12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25, 26, 27],
        [28, 29, 30, 31, 32, 33, 34, 35, 36],
        [37, 38, 39, 40, 41, 42, 43, 44, 45],
        [46, 47, 48, 49, 50, 51, 52, 53, 54],
        [55, 56, 57, 58, 59, 60, 61, 62, 63],
        [64, 65, 66, 67, 68, 69, 70, 71, 72],
        [73, 74, 75, 76, 77, 78, 79, 80, 81]
    ]   
    assert snail_rearrangement(matrix) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 27,
        36, 45, 54, 63, 72, 81, 80, 79, 78, 77, 76, 75, 74, 73, 64, 55, 46, 37, 28, 19,
        10, 11, 12, 13, 14, 15, 16, 17, 26, 35, 44, 53, 62, 71, 70, 69, 68, 67, 66, 65, 56, 47, 38, 29,
        20, 21, 22, 23, 24, 25, 34, 43, 52, 61, 60, 59, 58, 57, 48, 39, 30, 31, 32, 33, 42, 51, 50, 49, 40, 41
    ]
