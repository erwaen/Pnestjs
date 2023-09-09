
from test_balanced_group_symbols import balanced_group_symbols

def test_balanced_group_symbols():
    assert balanced_group_symbols('[()]{}{()()}') == True
    assert balanced_group_symbols('[(])') == False