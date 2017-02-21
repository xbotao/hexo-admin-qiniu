---
title: hexo-admin-qiniu
description: 使用说明
layout: default
---

## 基础入门

### 1. 安装Hexo并创建博客

```
npm install -g hexo
cd ~/
hexo init my-blog
cd my-blog
npm install
```

### 2. 安装**hexo-admin-qiniu**插件并开始使用

```
npm install --save hexo-admin-qiniu
hexo server -d
open http://localhost:4000/admin/
```

### 3. 站点配置文件添加qiniu配置项

七牛云存储仓库，请务必使用 **“华东区”** 服务器 !!!

获取七牛AK、SK等参考使用技巧中相关文章

```
admin:
  qiniuCfg:
      imageslim: true  # 启动图片瘦身，仅华东区bucket可以使用
      AccessKey: 'your qiniu AK'
      SecretKey: 'your qiniu SK'
      BucketName: 'your BK Name'
      bucketHost: 'you BK Host'
```

### 4. 发布文章

点击`deploy`按钮，发布博客到静态托管网页。
使用之前，需要在博客配置文件`_config.yml`中配置好`deploy`属性

```
deploy:
  type: git
  repo:
    github: xxxxxxxxxxxx.git,master
```

## 使用技巧

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h3>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>&nbsp;&#45;&nbsp;<small><span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span></small>
      </h3>
    </li>
  {% endfor %}
</ul>


