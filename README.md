(https://berlinfog.github.io/)

>
### [My blog is here 👆](<https://berlinfog.github.io/>)

## how to use

* begin
	* [environment ]
	* [start]
	* [write articels]
* components
	* [side bar]
	* [about-me]
	* [featured-tags]
	* [HTML5 keynote-layout)]
* comments and analytics
	* [comment](#comment)
	* [analytics](#analytics) 


### environment 

If you install [jekyll](http://jekyllcn.com/) locally，You can input `jekyll serve` or `jekyll s`, then you can input `http://127.0.0.1:4000/`to check changes for your blog。



### start

Modify `_config.yml` to build:

```
# Site settings
title: BY Berlinfog                
SEOTitle: berlinfog
description: "Hey"	   
```

More formats available at [Jekyll - Official Site](http://jekyllrb.com/) chinses：[Jekyll中文](http://jekyllcn.com/).

### wrtie articles

---
layout:     post
title:      Do you really know how to use the timer?
subtitle:   Detailed explanation of iOS timers
date:       2017-12-13
author:     //
header-img: img/post-bg-ios9-web.jpg
catalog: 	 true
tags:
    - iOS
    - Timer
---

### Side bar

The settings are in the _config.yml file under the Sidebar settings section.

```
# Sidebar settings
sidebar: true  # Add sidebar
sidebar-about-description: "Briefly describe yourself"
sidebar-avatar: /img/avatar-by.jpg     # Your avatar, please use an absolute path. Note: the name is case-sensitive, including the file extension.
```

### Social-media Account

input social network account below
	# SNS settings
	RSS: false
	jianshu_username: 	jianshu_id 
	zhihu_username:     username
	facebook_username:  username
	github_username:    username
	# weibo_username:   username


​	


### Keynote Layout

This section is used for embedding HTML-formatted slides, typically using Reveal.js, Impress.js, Slides, Prezi, etc. I believe a modern blog should not lack the ability to embed HTML slides.

The main principle is to add an iframe that includes an external link. You can directly write this in the front matter. See the YAML front matter example below for details.

```
---
layout:     keynote
iframe:     "http://huangxuan.me/js-module-7day/"
---
```

The iframe will automatically adjust its size on different devices. Padding is retained to allow mobile users to scroll down and add more content.


## Thanks
1. This repo forks from [Hux](https://github.com/Huxpro/huxpro.github.io) and (qiubaiying/qiubaiying.github.io）
2. Thanks for Jekyll, Github Pages and Bootstrap!


