---
layout:     post
title:     2019-05-03-Multiple Measurements
subtitle:  python
date:       2019-05-03
author:     berlinfog
header-img: img/post-bg-coffee.jpeg
catalog: true
tags:
    - python
---
# Multiple Measurements

In this notebook, let's go over the steps a robot takes to help localize itself from an initial, uniform distribution to sensing and updating that distribution and finally normalizing that distribution.

1. The robot starts off knowing nothing; the robot is equally likely to be anywhere and so `p` is a uniform distribution.
2. Then the robot senses a grid color: red or green, and updates this distribution `p` according to the values of pHit and pMiss.
3. We normalize `p` such that its components sum to 1.
4. **We repeat steps 2 and 3 for however many measurements are taken**

<img src='images/robot_sensing.png' width=50% height=50% />



```python
# importing resources
import matplotlib.pyplot as plt
import numpy as np
```

A helper function for visualizing a distribution.


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

### QUIZ: Measure Twice

Below is the normalized sense function, add code that can loop over muliple measurements, now in a *list* `measurements`. Add to this code so that it updates the probability twice and gives the posterior distribution after both measurements are incorporated. 

Make sure that your code allows for any sequence of measurements whether two measurements or more have been taken.


```python
# given initial variables
p=[0.2, 0.2, 0.2, 0.2, 0.2]
# the color of each grid cell in the 1D world
world=['green', 'red', 'red', 'green', 'green']

# measurements, now a *list* of sensor readings ('red' or 'green')
measurements = ['red', 'green']
pHit = 0.6
pMiss = 0.2

# sense function
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

## TODO: Add your code for accounting for 2 motion measurements, here
## Grab and print out the resulting distribution, p
p = []

print(p)
display_map(p)
```
