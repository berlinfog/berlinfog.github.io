---
layout:     post
title:     2019-05-10-简单的python Weshare涨停板分析
subtitle:  python
date:       2019-05-10
author:     berlinfog
header-img: img/post-bg-coffee.jpeg
catalog: true
tags:
    - python
    - 金融
---
## 简单的python Weshare涨停板分析

投资银行学的小组作业，使用 Weshare 做了一个简单的python分析，参考了以下链接：

<http://tushare.org/>

<https://www.cnblogs.com/sthv/p/6012838.html>

主要学习到的有series以及dataframe格式的应用。

```python
import tushare as ts
import pandas as pd
import datetime
df2=ts.new_stocks()
def days(str1,str2):
    date1=datetime.datetime.strptime(str1[0:10],"%Y-%m-%d")
    date2=datetime.datetime.strptime(str2[0:10],"%Y-%m-%d")
    num=(date1-date2).days
    return num
#df=df[df['issue_date']>'2016-06-01']
count=0
num=0
sum=0
df101=pd.DataFrame()
a={'xcode':-1,'name':-1,'number':-1}
df101 = df101.append(a,ignore_index=True)
df00=pd.DataFrame()
df00 = df00.append(a,ignore_index=True)
df30=pd.DataFrame()
df30 = df30.append(a,ignore_index=True)
df60=pd.DataFrame()
df60 = df60.append(a,ignore_index=True)
for i in df2['code']:
    df4 = df2[df2['code'] == i]
    df = ts.get_hist_data(i)
    df3=df4['issue_date']
    if df is None:
        count=count+1
        #print("hahha")
        continue
    else:
        df=df[['open','close','p_change']]
        if df is None:
            count = count + 1
            # print("hahha")
            continue
        else:
            try:
                start_date=df[df['p_change']<9.8].tail(1).index[0]
            except IndexError:
                count+=1
                continue
            sum += days(start_date, df3[count])
            print(i,days(start_date,df3[count]))

            b={'xcode':i,'name':str(df4['name']),'number':days(start_date,df3[count])}
            df101=df101.append(b,ignore_index=True)
            if int(i)<300000:
                df00 = df00.append(b, ignore_index=True)
            elif int(i)<600000:
                df30 = df30.append(b, ignore_index=True)
            else:
                df60 = df60.append(b, ignore_index=True)

            count=count+1
            num+=1


print("最终")
print(sum/num)
df101.to_csv("C:\\Users\\10750\\1.csv",encoding='utf_8_sig')
df00.to_csv("C:\\Users\\10750\\2.csv",encoding='utf_8_sig')
df30.to_csv("C:\\Users\\10750\\3.csv",encoding='utf_8_sig')
df60.to_csv("C:\\Users\\10750\\4.csv",encoding='utf_8_sig')

```

