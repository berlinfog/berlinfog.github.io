---
layout:     post
title:     2023-02-23-Stable Diffusion安装
subtitle:  other
date:       2023-02-23
author:     berlinfog
header-img: img/post-bg-coffee.jpeg
catalog: true
tags:
    - other
---
# Stable Diffusion安装

1.首先，安装好Python，这里我的版本是

https://www.python.org/downloads/release/python-3106/

2.然后下载好 Github

https://git-scm.com/download/win

3.下载Stable-diffusion

```cmd
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

4.解压压缩包到D或者C盘根目录

例如我的D:/stable-diffusion-webui

5.打开D:\stable-diffusion-webui\models\Stable-diffusion，安装以下软件

6.安装https://huggingface.co/CompVis/stable-diffusion-v-1-4-original里面的sd-v1-4.ckpt，改名model.ckpt放到D:\stable-diffusion-webui\models\Stable-diffusion。

7.安装vae，是一个加强补丁，https://huggingface.co/stabilityai/sd-vae-ft-mse-original/tree/main里下载最后一个文件，safetensor格式的，放到D:\stable-diffusion-webui\models\Stable-diffusion。

8.安装一个lora，https://civitai.com/models/7448/korean-doll-likeness，把koreanDollLikeness_v10.safetensors放到D:\stable-diffusion-webui\models\Lora里面。

9.编辑D:\stable-diffusion-webui\webui-user.bat,Python位置可能各个机器不一样。

```bat
@echo off

set PYTHON= C:\Python310\python.exe
set GIT=
set VENV_DIR=
set COMMANDLINE_ARGS=--medvram --reinstall-xformers --xformers --autolaunch --deepdanbooru

call webui.bat
```

10.双击D:\stable-diffusion-webui\webui-user.bat运行，如果提示

```bat
Installing xformers
Installing requirements for Web UI
Launching Web UI with arguments: --medvram --xformers --autolaunch --deepdanbooru
Loading weights [fc2511737a] from D:\stable-diffusion-webui\models\Stable-diffusion\chilloutmix_NiPrunedFp32Fix.safetensors
Creating model from config: D:\stable-diffusion-webui\configs\v1-inference.yaml
LatentDiffusion: Running in eps-prediction mode
DiffusionWrapper has 859.52 M params.
Loading VAE weights specified in settings: D:\stable-diffusion-webui\models\Stable-diffusion\vae-ft-mse-840000-ema-pruned.vae.safetensors
Applying xformers cross attention optimization.
Textual inversion embeddings loaded(0):
Model loaded in 8.2s (load weights from disk: 0.1s, create model: 0.7s, apply weights to model: 5.2s, apply half(): 1.7s, load VAE: 0.5s).
Running on local URL:  http://127.0.0.1:7860
```

这样的话就说明运行成功了。

11.到settings的stable diffusion选择SD VAE为840000这个模型，点击apply settings保存。

12.选择Stable Diffusion checkpoint为model.ckpt，或者可以下载一个新的效果更好的放入D:\stable-diffusion-webui\models\Stable-diffusion文件夹里面。

13.点击txt2img，在prompt输入

```bat
<lora:koreanDollLikeness_v15:0.66>, best quality, ultra high res, (photorealistic:1.4), 1girl, (intricate white sleeveless maid clothes:1), (Kpop idol), (aegyo sal:1), (busty), ((cleavage)), (curvy), large breasts, huge breasts, (light blonde twintail:1), ((puffy eyes)), from below, looking at viewer, laughing, happy
```

在negative输入

```bat
paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, (outdoor:1.6), glans
```

模型选择chilloutmix_cilloutmixNi，step选择28，CFG scale选择8，其他例如width、height默认512，seed选择-1，如果想要高画质可以打开hires.fix，点击generate等待就可以出现想要的小姐姐了。



其他：常见词汇比如a girl，如果想要加强语气可以用(thin:1.5),lora可以多个结合，但是测试多个lora加起来超过1可能会不太正常。

参考：

https://www.bilibili.com/video/BV12x4y1V71Q/?spm_id_from=333.337.search-card.all.click&vd_source=ff110f9f6f3d4b61907ecd5725474b85

https://github.com/AUTOMATIC1111/stable-diffusion-webui

https://github.com/AUTOMATIC1111/stable-diffusion-webui




