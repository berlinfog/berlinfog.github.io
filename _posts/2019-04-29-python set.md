---
layout:     post
title:     2019-04-29-python set
subtitle:  python
date:       2019-04-29
author:     berlinfog
header-img: img/post-bg-coffee.jpeg
catalog: true
tags:
    - python
---

# 集合介绍

Python中的一个`set`是**独特**且**不可变**（不可更改）对象的集合。

要了解一个集合的工作方式，请看下面的代码：

In [ ]:

```
# start with an empty set

my_set = set()

print(my_set)
```

In [ ]:

```
# add a few elements

my_set.add('a')
my_set.add('b')
my_set.add('c')
my_set.add(1)
my_set.add(2)
my_set.add(3)

print(my_set)
```

In [ ]:

```
# like a dictionary, a set is UNORDERED. 
# We can still loop through a set though.

for element in my_set:
    print(element)
```



In [ ]:



```
# let's see how many elements are in this set...

print("there are", len(my_set), "elements in my_set")
```



In [ ]:

```
# can we make the set bigger by adding more "copies"
# of existing elements?

my_set.add("a")
my_set.add("a")
my_set.add("a")
my_set.add("a")
my_set.add("a")
my_set.add("a")
my_set.add("a")
my_set.add("a")

print("there are", len(my_set), "elements in my_set")
```

In [ ]:

```
# there are still only 6 elements...
# 
# that's because sets only care about UNIQUE elements.
# They do not allow for multiple "copies"

print(my_set)
```



In [ ]:



```
# and they haven't changed. What if we remove "a"
my_set.remove("a")
print("there are", len(my_set), "elements in my_set")
print(my_set)
```

### 集合的力量

该`set`受到一组称为[集合论](https://en.wikipedia.org/wiki/Set_theory)的数学分支的启发而产生。

集合如此有用的原因在于它们可以让我们利用“文氏图逻辑”。

例如，这里有两个集合，一个是包含小于10的质数的`primes`；一个是包含小于10的奇数的`odds`。寻找这两个集合之间关系的方法之一是使用 **文氏图**。

![Venn Diagram](https://s3.cn-north-1.amazonaws.com.cn/static-documents/nd101/DLND+documents/png/sets-1.png)

在此图中，蓝色区域包含奇数，红色包含素数，重叠的紫色区域包含同时属于奇数和素数的数字。

## 注意 - 在这里要慢一点哦！

接下来的几个单元格展示了一些关于集合的一些**方法**。仔细阅读后，尝试将每种方法与上述的文氏图进行关联。

In [ ]:



```
# Initializing two sets

odds   = set([1,3,5,7,9])
primes = set([2,3,5,7])
```

In [ ]:

```
# Demonstration of the "intersection" between two sets
# The intersection corresponds to the overlapping region
# in the Venn Diagram above.

odd_AND_prime = odds.intersection(primes)
print(odd_AND_prime)
```

In [ ]:



```
# Demonstration of the "union" of two sets. The union
# of sets A and B includes ANY element that is in A OR B 
# or both.

odd_OR_prime = odds.union(primes)
print(odd_OR_prime)
```

In [ ]:

```
# Demonstration of the "set difference" between two sets.
# What do you expect odds-primes to return?

odd_not_prime = odds - primes
print(odd_not_prime)
```

In [ ]:

```
# Another demo of "set difference"

prime_not_odd = primes - odds
print(prime_not_odd)
```

### 并集 vs 交集

两个集合A与B的**并集**包含A*或\*B中的元素*或* 包含两者的元素。**交集**包含两者中的元素。

![set union vs intersection](https://s3.cn-north-1.amazonaws.com.cn/static-documents/nd101/DLND+documents/png/sets-2.png)

### `A-B` vs `B-A`

**A-B** 包含在A中但不在B中的元素。 **B-A** 包含B中的元素，但不包含A中的元素。

![set_a - set_b](https://s3.cn-north-1.amazonaws.com.cn/static-documents/nd101/DLND+documents/png/sets-3.png)

![set_b - set_a](https://s3.cn-north-1.amazonaws.com.cn/static-documents/nd101/DLND+documents/png/sets-4.png)

## TODO - 练习：A或B，但不能同时包含

编写一个函数，将两个集合（`set_a`和`set_b`）作为输入，并返回一个新的集合，其中包含`set_a`或`set_b`中的元素，但**不**包含两者兼有的元素。

在上面的文氏图中，除了重叠的中间区域之外，将包括图表中的所有内容。在这个示例中，将是数字9、1和2。

注 - 尝试在答案中使用以下所有集合操作：

- **intersection**
- **union**
- **difference**

In [ ]:

```
def a_or_b_but_not_both(set_a, set_b):
    """Returns a set which contains any element that is 
    a member of set_a OR a member of set_b but NOT a member
    of both."""
    return 

# testing code
assert a_or_b_but_not_both(odds, primes) == set([9,1,2])
print("Nice job! Your function works correctly!")
```

In [ ]:

```
#

#

# Spoiler Alert! Solution Below!

#

#

#

#

#

#

#

#

#

#

```

```
# Solution 1
def a_or_b_but_not_both(set_a, set_b):
    """Returns a set which contains any element that is 
    a member of set_a OR a member of set_b but NOT a member
    of both."""
    a_and_b = set_a.intersection(set_b)
    a_or_b = set_a.union(set_b)
    return a_or_b - a_and_b

assert a_or_b_but_not_both(odds, primes) == set([9,1,2])
```

In [ ]:

```
# Solution 2
def a_or_b_but_not_both(set_a, set_b):
    """Returns a set which contains any element that is 
    a member of set_a OR a member of set_b but NOT a member
    of both."""
    a_without_b = set_a - set_b
    b_without_a = set_b - set_a
    return a_without_b.union(b_without_a)

assert a_or_b_but_not_both(odds, primes) == set([9,1,2])
```

In [ ]:

```
# Solution 3
# 
# There is actually a REALLY succinct way of writing this 
# function using a single character. I'm not going to tell
# you what that is now, but at the end of this notebook 
# you'll find a link to Python documentation that will...
```

### 太好了，但标签与标记呢？

In [ ]:

```
def consolidate_labels(t1_labels, t2_labels):
    """
    Combines labels from two tickets without duplication.
    
    Given t1_labels and t2_labels (both lists), return 
    a consolidated list of labels without duplicates.
    """
    
    # TODO - rewrite this function to use sets. You should
    #   be able to replace all the code below with 1 or 2
    #   lines if you use sets appropriately.
    # 
    # NOTE - to convert a set back to a list, you can
    #   use the list() function (demonstrated in the
    #   cell below).
    
    combined = []
    for label in t1_labels:
        if label not in combined:
            combined.append(label)
    for label in t2_labels:
        if label not in combined:
            combined.append(label)
    return combined


# testing code
labels_1 = ["python", "bug", "localization", "bug"]
labels_2 = ["planning", "localization"]

combined_labels = consolidate_labels(labels_1, labels_2)

assert( set(combined_labels) == set(["python", "bug", 
                                     "localization", "planning"]))
print("Nice job! Your function works correctly!")
```



```
# demonstration of Python's list() and set() functions

odds = [1,3,5,7,9]
odds_as_set = set(odds)
odds_back_to_list = list(odds_as_set)

print("odds:        ", odds)
print("as set:      ", odds_as_set)
print("back to list:", odds_back_to_list)
```



```
# andy's solution
def consolidate_labels(t1_labels, t2_labels):
    """
    Combines labels from two tickets without duplication.
    
    Given t1_labels and t2_labels (both lists), return 
    a consolidated list of labels without duplicates.
    """
    return set(t1_labels).union(set(t2_labels))

labels_1 = ["python", "bug", "localization", "bug"]
labels_2 = ["planning", "localization"]

combined_labels = consolidate_labels(labels_1, labels_2)

assert( set(combined_labels) == set(["python", "bug", 
                                     "localization", "planning"]))
```