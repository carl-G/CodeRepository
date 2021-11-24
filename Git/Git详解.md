## Git详解

### git简介

git是目前最流行的版本管理工具，学会git几乎成了开发者的必备技能。
git有很多优势，其中之一就是远程操作非常简便，一下罗列最常用的5个git命令

+ git clone
+ git remote
+ git fetch
+ git pull
+ git push

![git工作流程](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014061202.jpg)

几个专有名词的译名如下。
+ Workspace: 工作区
+ Index/Stage: 暂存区
+ Repository：仓库区（或本地仓库）
+ Remote: 远程仓库

### 一。git clone

远程操作的第一步，通常就是从远程主机克隆一个版本库，这时就要用到**git clone** 命令

`$ git clone <版本库的网址>`

该命令会在本地主机生成一个目录，与远程主机的版本库同名。如果需要指定不同的目录名，可以将目录名作为 **git clone**命令的第二个参数

`$ git clone <版本库的网址> <本地目录名>`

### 一。git remote

为了便于管理，Git要求每个远程主机都必须指定一个主机名。**git remote**命令就用于管理主机名。
不带选项的时候，**git remote** 命令列出所有远程主机

```
$ git remote
origin
```

使用 -v 选项，可以查看远程主机的网址。

```
$ git remote -v
origin  git@github.com:jquery/jquery.git (fetch)
origin  git@github.com:jquery/jquery.git (push)
```

上面命令表示，当前只有一台远程主机，叫做origin，以及他的网址
