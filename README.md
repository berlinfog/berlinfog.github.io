(https://github.com/qiubaiying/qiubaiying.github.io)
(https://github.com/Huxpro/huxpro.github.io) 
(http://www.jianshu.com/p/e68fba58f75c)
(https://github.com/qiubaiying/qiubaiying.github.io/wiki/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B)

>
### [查看博客戳这里 👆](<https://berlinfog.github.io/>)

## 使用

* begin
	* [environment ](#环境)
	* [start](#开始)
	* [write articels](#撰写博文)
* components
	* [side bar](#侧边栏)
	* [about-me](#mini-about-me)
	* [featured-tags](#featured-tags)
	* [HTML5 keynote-layout)](#keynote-layout)
* 评论与 Google/Baidu Analytics
	* [comment](#comment)
	* [analytics](#analytics) 


### environment 

如果你安装了 [jekyll](http://jekyllcn.com/)，那你只需要在命令行输入`jekyll serve` 或 `jekyll s`就能在本地浏览器中输入`http://127.0.0.1:4000/`预览主题，对主题的修改也能实时展示（需要强刷浏览器）。



### start

你可以通用修改 `_config.yml`文件来轻松的开始搭建自己的博客:

```
# Site settings
title: BY Berlinfog                    # 你的博客网站标题
SEOTitle: berlinfog
description: "Hey"	   	   # 随便说点，描述一下
```

Jekyll官方网站还有很多的参数可以调，比如设置文章的链接形式...网址在这里：[Jekyll - Official Site](http://jekyllrb.com/) 中文版的在这里：[Jekyll中文](http://jekyllcn.com/).

### wrtie articles

要发表的文章一般以 **Markdown** 的格式放在这里`_posts/`，你只要看看这篇模板里的文章你就立刻明白该如何设置。

yaml 头文件长这样:

```
---
layout:     post
title:      定时器 你真的会使用吗？
subtitle:   iOS定时器详解
date:       2017-12-13
author:     //
header-img: img/post-bg-ios9-web.jpg
catalog: 	 true
tags:
    - iOS
    - 定时器
---

```

### 侧边栏

看右边:
![](https://raw.githubusercontent.com/qiubaiying/qiubaiying.github.io/master/img/readme-side.png)

设置是在 `_config.yml`文件里面的`Sidebar settings`那块。

```
# Sidebar settings
sidebar: true  #添加侧边栏
sidebar-about-description: "简单的描述一下你自己"
sidebar-avatar: /img/avatar-by.jpg     #你的大头贴，请使用绝对地址.注意：名字区分大小写！后缀名也是
```

侧边栏是响应式布局的，当屏幕尺寸小于992px的时候，侧边栏就会移动到底部。具体请见bootstrap栅格系统 <http://v3.bootcss.com/css/>


### Mini About Me

Mini-About-Me 这个模块将在你的头像下面，展示你所有的社交账号。这个也是响应式布局，当屏幕变小时候，会将其移动到页面底部，只不过会稍微有点小变化，具体请看代码。

### Social-media Account

在下面输入的社交账号，没有的添加的不会显示在侧边框中。新加入了[简书](https:/www.jianshu.com)链接, <http://www.jianshu.com/u/e71990ada2fd>

	# SNS settings
	RSS: false
	jianshu_username: 	jianshu_id 
	zhihu_username:     username
	facebook_username:  username
	github_username:    username
	# weibo_username:   username


​	


### Keynote Layout

HTML5幻灯片的排版：

![](https://camo.githubusercontent.com/f30347a118171820b46befdf77e7b7c53a5641a9/687474703a2f2f6875616e677875616e2e6d652f696d672f626c6f672d6b65796e6f74652e6a7067)

这部分是用于占用html格式的幻灯片的，一般用到的是 Reveal.js, Impress.js, Slides, Prezi 等等.我认为一个现代化的博客怎么能少了放html幻灯的功能呢~

其主要原理是添加一个 `iframe`，在里面加入外部链接。你可以直接写到头文件里面去，详情请见下面的yaml头文件的写法。

```
---
layout:     keynote
iframe:     "http://huangxuan.me/js-module-7day/"
---
```

iframe在不同的设备中，将会自动的调整大小。保留内边距是为了让手机用户可以向下滑动，以及添加更多的内容。


### Comment

博客不仅支持 [Disqus](http://disqus.com) 评论系统,还加入了 [Gitalk](https://gitalk.github.io/) 评论系统，[支持 Markdwon 语法](https://guides.github.com/features/mastering-markdown/)，cool~


#### Gitalk

优点：界面干净简洁，利用 Github issue API 做的评论插件，使用 Github 帐号进行登录和评论，最喜欢的支持 Markdown 语法，对于程序员来说真是太 cool 了。

缺点：配置比较繁琐，每篇文章的评论都需要初始化。


### Analytics

网站分析，现在支持百度统计和Google Analytics。需要去官方网站注册一下，然后将返回的code贴在下面：



## 致谢

1. 以上均转载[BY Blog](<http://qiubaiying.top/>)，自己稍微进行了一点点修改，感谢大佬。
2. 这个模板是从这里 [Hux](https://github.com/Huxpro/huxpro.github.io) fork 的, 感谢这个作者。 
3. 感谢 Jekyll、Github Pages 和 Bootstrap!


