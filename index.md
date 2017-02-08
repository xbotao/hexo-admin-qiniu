---
layout: default
---
# 基础入门

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

# 使用技巧

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h3>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>&nbsp;&#45;&nbsp;<small><span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span></small>
      </h3>
    </li>
  {% endfor %}
</ul>


