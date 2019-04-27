---
layout:     post
title:      2019-04-26-python列表
subtitle:  python
date:       2019-04-26
author:     berlinfog
header-img: img/post-bg-coffee.jpeg
catalog: true
tags:
    - python
---

# 字典简介

在该 notebook 中，你将要学习 Python 字典。

## 1.1字典将 `keys` 与 `values` 相关联

```
ticket = {
    "date" : "2018-12-28",
    "priority" : "high",
    "description" : """Vehicle did not slow down despite
    SLOW    
    SCHOOL    
    ZONE    """
}
```

你在上面看到的`ticket` 是一个Python`dictionary`。 字典是一种 **无序的** 数据结构。

使用`list`可以根据 **位置**（例如`my_list[0]`）访问数据，但字典是无序的。 字典中的数据需要通过它的关键字而不是它的位置来访问。

在上面的`ticket`示例中，有三个**关键字**。 你可以通过运行下面的代码来看看它们分别是什么。

```
print(ticket.keys())
```

字典中的每个**关键字**都与一个**值\**相关联。 下面的代码可以检索与**关键字**描述关联的一个**值**。

```
print(ticket['description'])
```

## 1.2字典是*可变的*（可以被修改）

字典是**可变的**，这意味着它们可以被改变（修改）。“可变的"意味着：

1. 可以在词典中**添加**元素。
2. 可以在词典中**删除**元素。
3. 可以在词典中**修改**元素。

下面的代码演示了如何添加、删除与修改词典中的元素。

```
# Let's start with an empty dictionary. Eventually this will store 
# English to spanish translations...

eng_to_spa = {} # this creates an empty dictionary
print(eng_to_spa)
```



```
# 1. Adding elements to a dictionary.
#
#    Elements can be added to a dictionary as follows:

eng_to_spa['blue']  = 'Azul'
eng_to_spa['gren']  = 'verde'

print(eng_to_spa)
```

哎呀！ 我把“绿色”两个字打错了。 让我们从该词典中把该元素删除吧...

```
# 2. Removing elements from a dictionary
#    
#    Elements can be removed from a dictionary using the del keyword

del eng_to_spa['gren']

print(eng_to_spa)
```

它看起来像“azul”，是大写的...让我们把它修改一下吧！

```
# 3. Modifying elements in a dictionary.
#
#    Modifying the value associated with a key works just
#    like adding a new value...

eng_to_spa['blue'] = 'azul'

print(eng_to_spa)
```

### TODO - 完成 `eng_to_spa` 函数

在下面的代码单元格中，添加一些额外的颜色，使`eng_to_spa` 能够反映出如下对应关系：

| 英语   | 西班牙语 |
| ------ | -------- |
| blue   | azul     |
| green  | verde    |
| pink   | rosa     |
| orange | naranja  |
| gray   | gris     |
| brown  | marron   |

In [ ]:

```
eng_to_spa['blue'] = 'azul'
eng_to_spa['green'] = 'verde'

# YOUR CODE HERE - complete the eng_to_spa
#   dictionary so it contains all the information
#   shown in the table above.

# Testing code below
assert(eng_to_spa['blue'] == 'azul')
assert(eng_to_spa['gray'] == 'gris')
assert(eng_to_spa['orange'] == 'naranja')
assert(eng_to_spa['pink'] == 'rosa')
print("Your english to spanish dictionary is looking good!")
```

## 1.3字典是*无序的*

字典是**无序的**，具体指的是什么意思呢？ 看一看以下两个票（ ticket）。

```
dictionary_ticket_1 = {
    "date"       : "2018-12-31",
    "priority"   : "high",
    "description": "Vehicle made unexpected stop."
}

dictionary_ticket_2 = {
    "priority"   : "high",
    "description": "Vehicle made unexpected stop.",
    "date"       : "2018-12-31"
}

# these dictionaries contain the same information, but the
# ordering looks different. Does Python consider them identical?

print("Does dictionary_ticket_1 == dictionary_ticket_2?")
print(dictionary_ticket_1 == dictionary_ticket_2)
```

### 遍历一个字典

尽管没有定义明确的元素排序，但你仍然可以遍历字典的**关键字**。

In [ ]:

```
# demonstration of dictionary looping 
# demo 1 - keys only

for key in dictionary_ticket_1:
    print(key)
```

In [ ]:

```
# demonstration of dictionary looping 
# demo 2 - keys and values

for key in dictionary_ticket_1:
    value = dictionary_ticket_1[key]
    print(key, ':', value)
```

## TODO - 练习：“调换”字典

下面的代码重新定义了`eng_to_spa`字典。 你需要做的是编写一个名为`reverse_dictionary`的函数，该函数可以根据一个英西词典，返回一个西英词典。

In [ ]:

```
def reverse_dictionary(dictionary):
    new_d = {}
    # TODO - your code here
    return new_d

eng_to_spa = {
    "red" :    "rojo",
    "blue"   : "azul",
    "green"  : "verde",
    "black"  : "negro",
    "white"  : "blanco",
    "yellow" : "amarillo",
    "orange" : "naranja",
    "pink"   : "rosa",
    "purple" : "morado",
    "gray"   : "gris"
}

# TESTING CODE

spa_to_eng = reverse_dictionary(eng_to_spa)

assert(len(spa_to_eng) == len(eng_to_spa))
assert(spa_to_eng['rojo'] == 'red')
assert(spa_to_eng['azul'] == 'blue')
assert(spa_to_eng['verde'] == 'green')

print("Nice work! Your reverse_dictionary function is correct.")
```

## 1.4西法词典（西班牙语到法语）

在这个练习中，你将要根据两本词典（一个西英词典和一个法英词典），将它们合并成一个西法词典。

首先，我们来看看现有的两个字典。

In [ ]:

```
eng_to_spa = {
    "red" :    "rojo",
    "blue"   : "azul",
    "green"  : "verde",
    "black"  : "negro",
    "white"  : "blanco",
    "yellow" : "amarillo",
    "orange" : "naranja",
    "pink"   : "rosa",
    "purple" : "morado",
    "gray"   : "gris"
}

french_to_eng = {
    "bleu"  : "blue",
    "noir"  : "black", 
    "vert"  : "green",
    "violet": "purple",
    "gris"  : "gray",
    "rouge" : "red",
    "orange": "orange",
    "rose"  : "pink",
    "marron": "brown",
    "jaune" : "yellow",
    "blanc" : "white",
}

print("there are    ", len(eng_to_spa), "colors in eng_to_spa")
print("but there are", len(french_to_eng), "colors in french_to_eng")
```

In [ ]:

```
# don't forget you have the "reverse_dictionary" function!

english_to_french = reverse_dictionary(french_to_eng)

for english_word in english_to_french:
    french_word = english_to_french[english_word]
    print("The french word for", english_word, "is", french_word)
```

In [ ]:

```
def spanish_to_french(english_to_spanish, english_to_french):
    """
    Given an English to Spanish dictionary and an English
    to French dictionary, returns a Spanish to French dictionary.
    
    If any words appear in one dictionary but NOT the other, 
    they should not be included in the resulting dictionary.
    """
    s2f = {}
    #
    # TODO - your code here
    #
    return s2f


# TESTING CODE 
S2F = spanish_to_french(eng_to_spa, english_to_french)

assert(S2F["rojo"] == "rouge")
assert(S2F["morado"] == "violet")

print("Nice work! Your spanish to french function works correctly!")
```

### 我的解决方案

在进行下一步之前，请确保你已尝试解决上述问题！

当测试我的第一个解决方案时，出现了一个错误。 在下面，尝试运行我的第一次尝试吧，看看它是什么。

In [ ]:

```
def spanish_to_french_1(english_to_spanish, english_to_french):
    s2f = {}
    for english_word in english_to_french:
        french_word = english_to_french[english_word]
        spanish_word = english_to_spanish[english_word]
        s2f[spanish_word] = french_word
    return s2f

S2F_1 = spanish_to_french_1(eng_to_spa, english_to_french)
```

我不断收到以下消息：

In [ ]:

```
KeyError: 'brown'
```

这是因为"brown"不在我的西英词典中！

没关系，我可以对每个密钥进行**归属检查**。 将上面的代码与下面的代码进行比较。

In [ ]:

```
def spanish_to_french_2(english_to_spanish, english_to_french):
    s2f = {}
    for english_word in english_to_french:
        if english_word in english_to_spanish:
            french_word = english_to_french[english_word]
            spanish_word = english_to_spanish[english_word]
            s2f[spanish_word] = french_word
    return s2f

S2F_2 = spanish_to_french_2(eng_to_spa, english_to_french)
```

### 关键字`in`的注释（以及“归属测试”）

注意上面的代码中的if语句。当我们编写如下语句时

In [ ]:

```
if X in Y
```

我们正在进行“归属测试”。 当`Y`是词典时，我们正在测试`X`是否属于该词典中的**关键字**。 如果是，则测试返回`True`； 否则它返回`False`。

In [ ]:

```
capitals = {
    "spain" : "madrid",
    "france" : "paris",
    "china" : "beijing"
}

print("Is 'china' a key in this dictionary?")
print("china" in capitals)
print()
print("Is 'paris' a key in this dictionary?")
print("paris" in capitals)
```



## 1.5字典小结

下面是关于字典的几个重要事项，请牢记！

#### 1.5.1. 字典将 `keys` 与 `values` 相关联

下面的字典有2个关键字（`"abc"`和`"def"`）和2个值（`123`和`456`）

In [ ]:

```
d = {"abc":123, "def":456}
```

#### 1.5.2. 字典是无序的

如果两个字典具有相同的关键字**并且**这些关键字与相同的值相关联，则这两个字典是相同的。顺序无关紧要。

In [ ]:

```
> d1 = {"abc":123, "def":456}
> d2 = {"def":456, "abc":123}
> d1 == d2
True
```

#### 1.5.3. 字典是“可变的”

这意味着字典可以通过各种方式进行修改

##### 3.1 增加新的元素

In [ ]:

```
> d = {}
> d['k'] = 'v'
> print(d)
{'k': 'v'}
```

##### 3.2 删除元素

In [ ]:

```
> del d['k']
> print(d)
{}
```

##### 3.3 改变元素

In [ ]:

```
> d['key'] = 'value' # first need to add an element back in
> print(d)
{'key': 'value'}

> d['key'] = 'other value'
> print(d)
{'key' : 'other value'}
```

#### 1.5.4. 遍历一个字典

遍历一个字典时，事实上，你是在循环访问该词典的**关键字**。

#### 1.5.5. 归属测试

Python中的`in`关键字可用于测试某个词是否属于字典中的一个**关键字**。