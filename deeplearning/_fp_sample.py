# encoding: utf-8
import functools


def ascending(a, b):
    return a if a <= b else b


def descending(a, b):
    return a if a > b else b


def sorted(xs, compare=ascending):
    print('list:', xs)
    return [] if not xs else __select(xs, compare)


def __select(xs, compare):
    selected = functools.reduce(compare, xs, xs[0])
    selected_list = [selected]
    remain = list(filter(lambda ele: ele not in selected_list, xs))
    print('--')
    print('selected:', selected_list)
    print('remain:', remain)
    return selected_list if not remain else selected_list + __select(remain, compare)


print(sorted([2, 1, 3, 6, 5]))
print(sorted([2, 1, 3, 6, 5], descending))
