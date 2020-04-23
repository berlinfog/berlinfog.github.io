### python2和python3版本转换

> 在win10环境下进行傻瓜式安装。当安装完成时，计算机便具备了Python3.6的环境，推荐使用 Anaconda Prompt 进入命令行

接下来，在cmd的环境下，输入以下命令安装Python2.7的环境

```
conda create -n python27 python=2.7 anaconda
```

上面的代码创建了一个名为python27的python2.7的环境，最后一个参数表示安装anaconda下python2.7的所有默认包，这个参数时可选的。

我们进入cmd环境，现在默认的python版本时python3.6，只需要一行简单的代码就可以转为python2.7的环境

```
activate python27
```

此时本窗口下的python版本变为了python2.7，那么你肯定猜到了恢复到python3.6的命令

```
deactivate python27
```

其实呢，一般没有必要恢复到原环境。只要打开一个新的cmd窗口，默认的python版本就是python3.6

### Anaconda 镜像

> 这里使用了清华大学开源软件镜像站tuna提供的资源，在此表示感谢

[https://mirrors.tuna.tsinghua...](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)

Anaconda 安装包可以到以下地址分流下载
[https://mirrors.tuna.tsinghua...](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

因为Anaconda.org的服务器在国外，conda下载的速度经常很慢。可以设置国内的镜像源来加速：

```
# TUNA 还提供了 Anaconda 仓库的镜像，运行以下命令即可添加 Anaconda Python 免费仓库
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
# 设置搜索时显示通道地址
conda config --set show_channel_urls yes

# 执行完上述命令后，会生成配置文件记录着我们对conda的配置，直接手动创建、编辑该文件是相同的效果
# Linux/Mac
~/.condarc
# Windows
C:\Users\USER_NAME\.condarc

# 运行测试一下吧
conda install numpy
```

## conda安装django实践

> 以下操作为 anaconda python3.6 环境下进入Anaconda Prompt安装django1.11的实践过程

```
# 在python3.6环境下进入Anaconda Prompt创建django1.x专用虚拟环境
conda create -n django1.x
# 激活专用虚拟环境
activate django1.x
# 查看conda当前django可用版本
conda search django
conda install django==1.11.10
# 切换到虚拟环境家目录
cd C:\Users\wsgzao\AppData\Local\conda\conda\envs\django1.x
# 创建项目
django-admin.py startproject myweb
# 创建app
python manage.py startapp myapp
# 启动Django中的开发服务器
python manage.py runserver
# 帮助文档
python manage.py -h
# Django命令
python manage.py <command> [options]
```

## conda常用命令

最新版的conda是从site-packages文件夹中搜索已经安装的包，不依赖于pip，因此可以显示出通过各种方式安装的包。conda将conda、python等都视为package，因此完全可以使用conda来管理conda和python的版本



```
# 列出所有已安装的包
conda list
# 安装软件包，同时它会自动安装此软件包的依赖项 
conda install package_name
# 同时安装多个包
conda install numpy pandas
# 安装指定版本的包
conda install python=2.7
# 安装离线包
conda install /package-path/package-filename.tar.bz2
# 卸载包
conda remove package_name
# 更新环境中的所有已安装的包
conda update/upgrade --all
# 更新conda，保持conda最新
conda update conda
# 更新anaconda
conda update anaconda
# 更新python
conda update python
# 查看conda安装信息
conda info
# 查看conda帮助
conda help
# 搜索可以安装的包
conda search package_name
# 创建conda虚拟环境
conda create -n env_name
# 在这里，-n env_name 设置环境的名称（-n 是指名称），而 list of packages 是要安装在环境中的包的列表
conda create -n env_name list of packages
# 可以创建具有特定 Python 版本的环境
conda create -n py2.7.14 python=2.7.14
# 查看conda版本
conda -V

# 进入环境
# linux 下用 
source activate env_name
# windows 下用
activate env_name

# 离开环境
# linux 下用 
source deactivate
# windows 下用
deactivate

# 列出环境
conda env list
# 删除环境
conda env remove -n env_name
# 导出环境将包保存为 YAML，输出环境中的所有包的名称（包括 Python 版本）
conda env export > environment.yaml
# 加载环境
conda env create -f environment.yaml
```




  