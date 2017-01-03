![logo](docs/logo.png?raw=true)

An admin UI for the [Hexo blog engine](http://hexo.io). Based off of the [Ghost](http://ghost.org) interface, with inspiration from [svbtle](http://svbtle.com) and [prose.io](http://prose.io).

## Hexo-admin

[hexo-admin](https://github.com/jaredly/hexo-admin)

## Hexo-admin with qiniu

Hexo-admin with qiniu is alter by the npm hexo-admin@2.1.0

### how to use qiniu

add your qiniu config in project config file `_config.yml`

```
admin:
  qiniuCfg:
      AccessKey: 'your qiniu AK'
      SecretKey: 'your qiniu SK'
      BucketName: 'your BK Name'
      bucketHost: 'you BK Host'
```
#### AK and SK
![](http://oh1jgyw0v.bkt.clouddn.com/45y6x0ke5t57b5obonksf76u8r.png)

![](http://oh1jgyw0v.bkt.clouddn.com/j2w63t3jsu0dax632imkklcy2e.png)

#### BucketName and bucketHost
![](http://oh1jgyw0v.bkt.clouddn.com/74qyc2dn56pw430zb3jgw849dl.png)

## Deploy

Click deploy button and pop a terminal, deploy the blog to your pages.
Before this, you should config `deploy` in `_config.yml`

```
deploy:
  type: git
  repo:
    github: xxxxxxxxxxxx.git,master
```
### how to use

![](http://oh1jgyw0v.bkt.clouddn.com/xyrqgzm3428lrzrohsr7fovahh.png)

