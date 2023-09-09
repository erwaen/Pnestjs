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
