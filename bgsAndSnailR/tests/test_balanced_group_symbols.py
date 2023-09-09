
from bgsAndSnailR.src.balanced_group_symbols import balanced_group_symbols

def test_balanced_group_symbols_balanced():
    assert balanced_group_symbols('[()]{}{()()}') == True
    assert balanced_group_symbols('()') == True
    assert balanced_group_symbols('({[]})') == True
    assert balanced_group_symbols('{{[()]}}') == True
    assert balanced_group_symbols('(()[{}])') == True
    assert balanced_group_symbols('()[]{}') == True
    assert balanced_group_symbols('(()()())') == True
    assert balanced_group_symbols('') == True

def test_balanced_group_symbols_unbalanced():
    assert balanced_group_symbols('[(])') == False
    assert balanced_group_symbols('(') == False
    assert balanced_group_symbols(')') == False
    assert balanced_group_symbols('({)}') == False
    assert balanced_group_symbols('{{[()]}}]') == False
    assert balanced_group_symbols('()[]{}(') == False
    assert balanced_group_symbols('adsasda') == False
    assert balanced_group_symbols(' ') == False



