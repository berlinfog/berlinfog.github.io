---
layout:     post
title:     2019-05-03-Sense 函数与 Move函数
subtitle:  python
date:       2019-05-03
author:     berlinfog
header-img: img/post-bg-coffee.jpeg
catalog: true
tags:
    - python
---
# Sense 函数与 Move函数

在这个notebook中，我们把所有之前所学的知识汇总在一起，看一看当机器人不断进行感应、运动、再感应的循环时，初始概率分布会发生什么样变化，以及其他数据会怎样变化！ 回想一下，当机器人感知到周围环境（即红色或绿色）时，它就会获得有关其环境的信息。但是，每次移动时，由于运动的不确定性，也会丢失一些信息。


<img src='images/sense_move.png' width=50% height=50% />


首先，需要用到常用的资源导入和显示函数。


```python
# importing resources
import matplotlib.pyplot as plt
import numpy as np
```

其次，还有一个用于可视化概率分布的辅助函数。


```python
def display_map(grid, bar_width=1):
    if(len(grid) > 0):
        x_labels = range(len(grid))
        plt.bar(x_labels, height=grid, width=bar_width, color='b')
        plt.xlabel('Grid Cell')
        plt.ylabel('Probability')
        plt.ylim(0, 1) # range of 0-1 for probability values 
        plt.title('Probability of the robot being at each cell in the grid')
        plt.xticks(np.arange(min(x_labels), max(x_labels)+1, 1))
        plt.show()
    else:
        print('Grid is empty')

```

### 练习：
给定列表为motions=[1,1]，如果机器人首先感知到红色，则计算后验分布，然后向右移动一个单位，然后感知绿色，之后再次向右移动，从均匀的先验分布`p`开始。

`motions=[1,1]`意味着机器人向右移动一个单元格，然后向右移动。你会获得一个初始变量以及完整的`sense` 与`move`函数，如下所示。


```python
# given initial variables
p=[0.2, 0.2, 0.2, 0.2, 0.2]
# the color of each grid cell in the 1D world
world=['green', 'red', 'red', 'green', 'green']
# Z, the sensor reading ('red' or 'green')
measurements = ['red', 'green']
pHit = 0.6
pMiss = 0.2

motions = [1,1]
pExact = 0.8
pOvershoot = 0.1
pUndershoot = 0.1

# You are given the complete sense function
def sense(p, Z):
    ''' Takes in a current probability distribution, p, and a sensor reading, Z.
        Returns a *normalized* distribution after the sensor measurement has been made, q.
        This should be accurate whether Z is 'red' or 'green'. '''
    q=[]
    # loop through all grid cells
    for i in range(len(p)):
        # check if the sensor reading is equal to the color of the grid cell
        # if so, hit = 1
        # if not, hit = 0
        hit = (Z == world[i])
        q.append(p[i] * (hit * pHit + (1-hit) * pMiss))
        
    # sum up all the components
    s = sum(q)
    # divide all elements of q by the sum to normalize
    for i in range(len(p)):
        q[i] = q[i] / s
    return q


# The complete move function
def move(p, U):
    q=[]
    # iterate through all values in p
    for i in range(len(p)):
        # use the modulo operator to find the new location for a p value
        # this finds an index that is shifted by the correct amount
        index = (i-U) % len(p)
        nextIndex = (index+1) % len(p)
        prevIndex = (index-1) % len(p)
        s = pExact * p[index]
        s = s + pOvershoot  * p[nextIndex]
        s = s + pUndershoot * p[prevIndex]
        # append the correct, modified value of p to q
        q.append(s)
    return q


## TODO: Compute the posterior distribution if the robot first senses red, then moves 
## right one, then senses green, then moves right again, starting with a uniform prior distribution.

## print/display that distribution
```

### 关于熵值的说明

该视频提到，在更新步骤之后熵值将下降，并且在测量步骤之后熵值将上升。

通常情况下，**熵值可以用来测量不确定性的量**。由于更新步骤增加了不确定性，因此熵值应该增加。测量步骤降低了不确定性，因此熵值应该减少。

让我们看一看当前的这个例子，其中机器人可以处于五个不同的位置。当所有位置具有相等的概率$[0.2, 0.2, 0.2, 0.2, 0.2]$时，会出现最大的不确定性。

它遵循的公式如下： $$\text{熵值} = \Sigma  (-p \times log(p))$$，所以， $$-5 \times (.2)\times log(0.2) = 0.699$$

进行测量就会降低不确定性，从而降低熵值。假设在进行测量后，概率变为<span class =“mathquill”> [0.05,0.05,0.05,0.8,0.05]</span>。现在熵值减少到0.338。因此，一个测量步骤会使熵值降低，而一个更新步骤则会使熵值增加。
