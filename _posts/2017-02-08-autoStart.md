---
title: Windows开机启动Hexo
description: 小技巧
layout: default
---

> Hexo安装hexo-admin组件以后，所有的操作都可以在浏览器中轻松完成了，但是有一个问题就是每次开机都需要运行一次`hexo s`

<!-- more -->

## windows下配置开机启动

为了更方便的使用，寻找一种可以开机启动hexo server的方法，通过脚本实现。
需要创建2个脚本，一个为vbs脚本，一个为bat脚本。

vbs脚本放到启动文件夹，用于运行bat脚本，而bat脚本用于启动`hexo server`

#### 创建vbs脚本
```Bash
set ws=WScript.CreateObject("WScript.Shell")
ws.Run "E:\\WorkSpace\\webProject\\Hexo-blog\\hexo-server.bat /start",0
```

#### 创建bat脚本
```Bash
E:
cd E:/WorkSpace/webProject/Hexo-Blog
hexo s -d
```

#### 将vbs脚本放到启动文件夹
win10 启动文件夹目录为
`C:\Users\你的用户名\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`

这样就能实现开机启动hexo server了，剩下的一切都可以交给**浏览器**和`hexo-admin`了。如果使用七牛，则可以使用[`hexo-admin with qiniu`](https://github.com/xbotao/hexo-admin)
