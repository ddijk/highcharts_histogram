#!/usr/bin/env python3
"""
Author : isc75529 <isc75529@localhost>
Date   : 2020-12-15
Purpose: Rock the Casbah
"""

import argparse


# --------------------------------------------------
def get_args():
    """Get command-line arguments"""

    parser = argparse.ArgumentParser(
        description='Rock the Casbah',
        formatter_class=argparse.ArgumentDefaultsHelpFormatter)


    parser.add_argument('file',
                        help='A readable file',
                        metavar='FILE',
                        type=argparse.FileType('rt'),
                        default=None)


    return parser.parse_args()


# --------------------------------------------------
def main():
    """Make a jazz noise here"""

    args = get_args()
    file_arg = args.file

    # print('file_arg = "{}"'.format(file_arg.name if file_arg else ''))

    result= {}
    result['<20'] = 0
    result['20-30'] = 0
    result['30-40'] = 0
    result['40-50'] = 0
    result['50-60'] = 0
    result['>=60'] = 0
    
    for line in file_arg:
        val = int(line.strip())
        if ( val < 20):
            result['<20'] += 1
        if ( val >= 20 and val < 30):
            result['20-30'] += 1
        if ( val >= 30 and val < 40):
            result['30-40'] += 1
        if ( val >= 40 and val < 50):
            result['40-50'] += 1
        if ( val >= 50 and val < 60):
            result['50-60'] += 1
        if ( val >= 60 ):
            result['>=60'] += 1
    
        
    print(result)

# --------------------------------------------------
if __name__ == '__main__':
    main()
