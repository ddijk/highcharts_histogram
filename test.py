import os
from subprocess import getoutput


prog = './histo.py'

def test_create_dict():
    out = getoutput(f'{prog} run1_binary')
   
    assert out == "{'<20': 227, '20-30': 122, '30-40': 22, '40-50': 12, '50-60': 3, '>=60': 14}"
   

