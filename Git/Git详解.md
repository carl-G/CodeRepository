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

git常用的命令清单如下：

[常用Git命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

### 一、git clone

远程操作的第一步，通常就是从远程主机克隆一个版本库，这时就要用到**git clone** 命令

`$ git clone <版本库的网址>`

该命令会在本地主机生成一个目录，与远程主机的版本库同名。如果需要指定不同的目录名，可以将目录名作为 **git clone**命令的第二个参数

`$ git clone <版本库的网址> <本地目录名>`

### 二、git remote

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

**git remote show**命令加上主机名，可以查看该主机的详细信息

`$ git remote show <主机名>`

**git remote add**命令用于添加远程主机

`$ git remote add <主机名> <网址>`

**git remote rm**命令用于删除远程主机

`$ git remote rm <主机名>`

**git remote rename**命令用于远程主机的改名

`$ git remote rename <原主机名> <新主机名>`

### 三、git fetch

一旦远程主机的版本库有了更新（commit）,需要把这些更新取回本地，这时候就要用到**git fetch**命令

`$ git fetch <远程主机名>`

上面的命令将某个远程主机的更新，全部取回本地。
**git fetch**通常用来查看其他人的进程，因为它取回的代码对你本地开发代码没有影响；储存在Repository;
默认情况下，**git fetch**取回所有分支的更新。如果只想取回特定分支，可以指定分支名。

`$ git fetch <远程主机名> <分支名>`

比如取回origin主机的master分支

`$ git fetch origin master`

取回的更新，在本地主机需要用‘远程主机名/分支名’的形式读取。比如**origin**主机的**master**，就要用**origin/master**读取
**git branch** 命令的 *-r* 选项，可以用来查看远程分支， *-a* 选项查看所有分支。

```
$ git branch -r
origin/master

$ git branch -a
* master
  remote/origin/master
```

取回远程主机的更新后，可以在它的基础上，使用**git checkout**命令创建一个新的分支。

`$ git checkout -b newBranch origin/master`

上面命令表示在**origin/master**的基础上，创建一个新的分支
此外，也可以使用**git merge** 命令或者 **git rebase** 命令，在本地分支上合并远程分支。

```
$ git merge origin/master
# 或者
$ git rebase origin/master
```

上面命令表示在当前分支上，合并**origin/master**

### 四、 git pull

**git pull** 命令的作用是，取回远程主机某个分支的更新，再与本地的指定分支合并。它的完整格式稍稍有点复杂。

`$ git pull <远程主机名> <远程分支名>:<本地分支名>`

比如取回**origin**主机的**next**分支，与本地的master合并：命令如下

`$ git pull origin next:master`

如果是远程分支和当前分支合并，则冒号后面的部分可以省略：

`$ git pull origin next`

上面命令含义是 先取回远程分支的next,然后和当前分支合并；可以拆解为两部分 fetch + merge

```
git fetch origin 
git merge origin/next
```

在实际使用中，我们经常在本地分支和远程分支之间建立一种追踪关系。比如，在**git clone**的时候，所有分支默认与同名的远程分支建立追踪关系。也就是说 本地的**master**分支自动‘追踪’**origin/master**分支。
Git也允许手动建立关联关系

`$ git branch --set-upstream master origin/master`

上面命令指定本地master分支追踪到远程master分支

如果当前分支和远程分支已经产生了关联关系，**git pull**可以省略远程分支名

`$ git pull origin`

以上命令表示，本地的当前分支自动和远程相关联的分支进行合并；

如果当前分支只有一个追踪分支，连远程主机名都可以省略（大概率如此）

`$ git pull`

上面命令表示，当前分支和远程唯一追踪关联的分支进行合并

如果合并需要rebase模式可以使用 *--rebase* 选项

`$ git pull --rebase <远程主机名> <远程分支名>:<本地分支名>`

如果远程主机删除了某个分支，默认情况下，**git pull** 不会在拉取远程分支的时候，删除对应的本地分支，这是为了防止**git pull**不知不觉删除了本地的分支。

但是，你可以改变这个行为，加上参数 *-p* 就会在本地删除远程已经删除的分支。

```
$ git pull -p
# 等同于下面的命令
$ git fetch --prune origin
$ git fetch -p
```

### 五、git pull

**git pull**命令用于将本地分支的更新推送到远程主机。格式和**git pull**命令相仿，作用相反～

`$ git push <远程主机名> <本地分支名>:<远程分支名>`

注意，分支推送顺序的写法是<来源地>:<目的地>，所以git pull是<远程分支>:<本地分支>，而git push是<本地分支>:<远程分支>。

如果省略远程分支名，则表示将本地分支推送与之关联的远程分支，如果该远程分支不存在，则被新建 （可用于本地新拉取的分支 第一次push）

`$ git push origin master`

以上命令表示将本地的master分支代码推送到远程主机名为origin的追踪远程分支上，如果没有该远程分支，则新建一个新的远程分支与之关联追踪关系

如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支。

```
$ git push origin :master
# 等同于
$ git push origin --delete master
```

上面命令表示删除远程master分支。

如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略。

`$ git push origin`

上面命令表示，将当前分支推送到**origin**主机名的对应追踪分支

如果当前分支只有一个远程追踪分支，主机名都可以省略

`$ git push`

如果当前分支和多个主机存在追踪关系，则可以使用 *-u* 指定一个默认主机，这样后面就可以不加任何参数使用**git push**了。

不带任何参数的**git push**，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。如果要修改这个设置，可以采用**git config**命令。

```
$ git config --global push.default matching
# 或者
$ git config --global push.default simple
```
还有一种情况，不管是否存在对应的远程分支，将本地所有的分支都推送到远程主机，这时候需要使用 *--all* 选项。

`$ git push --all origin`

上面命令表示，将所有本地分支都推送到origin主机。

如果远程主机的版本比本地的版本更新，推送Git会报错，要求现在本地**git pull**合并差异，然后再推送到远程主机。这时候，如果你一定要推送，可以使用 *--force* 选项。

`$ git push --force origin`

上面命令使用 *-force* 选项，结果导致远程主机上更新的版本被覆盖，除非你很确定要这么做，否则应该避免使用 *--force* 选项。

最后 **git push** 不会推送标签（tag），需要使用 *--tags* 选项

`$ git push origin --tags`

文章绝大部分出自于[阮一峰的Git远程操作](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)详解一文