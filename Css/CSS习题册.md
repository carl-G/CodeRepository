## Css 常见知识点 包括部分企业面试题

### 介绍一下盒子模型
盒子模型组成部分 = margin + border + padding + content
盒子模型分为IE盒子模型和标准盒子模型；
IE盒子模型宽度 = content + padding + border
标准盒子模型宽度 = content

### box-sizing有哪些取值
通常用box-sizing切换IE盒子模型和标准盒子模型
box-sizing: border-box; IE盒子模型
box-sizing: content-box; 标准盒子模型

### 什么是BFC
块级格式化行为上下文，BFC内部的元素格式不会影响到外部；相当于一个封闭的大箱子，内部不论如何，均不会影响外部

### 触发BFC
+ body根元素
+ position (fixed, absolute)
+ float (除了null以外的所有取值)
+ overflow (除了visible)
+ display: inline-box table-cell flex

### 触发BFC, 可以解决什么问题
+ margin重叠的问题
+ 清除浮动

### 项目中常用的有哪些布局方式？
+ static 默认流式布局-不脱离文档流
+ relative 相对定位: 相对当前位置进行偏移-不脱离文档流
+ flex 弹性布局 -不脱离文档流
+ table 表格布局: 前端最早期布局方式-不脱离文档流 
+ grid 栅格布局: 栅格化布局，类似于bootstrap - 不脱离文档流（目前兼容性）
+ float 浮动 - 脱离文档流
+ absolute 绝对定位: 相对于上一级布局节点进行位置定位-脱离文档流
+ fixed 固定定位: 相对于视图进行位置精准定位-脱离文档流
+ sticky 粘性布局：常用于吸顶功能-脱离文档流


### flex 有哪些语法 一一列举?
+ flex-direction 改变flex的轴向
+ justify-content 主轴的排列方式 参数 center,flex-start,flex-end,space-between,space-around,space-evenly等
+ align-item 交叉轴的排列方式 参数同上
+ flex-grow 放大比例
+ flex-shrink 缩小比例
+ flex-wrap 是否允许换行
+ flex-basis 定义了分配多余空间之前，项目所占据的主轴空间


### 哪些会影响页面的重绘和重排？
重绘：color,background-color； 影响填充之类的
重拍：width，height,display等 影响排列的，页面初始化，浏览器窗口大小发生变化

### 如何水平垂直居中？
1. margin:auto: 定位上下左右为0；margin: auto 实现居中
```
// css
div {
    width: 400px;
    height: 400px;
    border: 1px solid #000;
    position: relative;   
}
p {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
// dom
<div> <p> 2222 </p></div>
```
2. 定位
```
div {
    width: 400px;
    height: 400px;
    border: 1px solid #000;
    position: relative;   
}
p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
```
3. table-cell
```
div {
    width: 400px;
    height: 400px;
    border: 1px solid #000;
    display: table-cell;
    vertical-align: middle;
    text-align: center  
}
p {
    vertical-align: minddle;
}
```
4. flex
```
div {
    display: flex;
    width: 400px;
    height: 400px;
    justify-content: center;
    align-item: center
}
```


### CSS选择器有那些？
1. ID选择器 #xx
2. 类选择器 .xx
3. 子选择器 (.xx > .yy) || (.xx .yy )
4. 伪元素选择器 :hover, :active , :active, :nth-child, last-child, first-child ...
5. 标签选择器 p img span ...
6. 通配符选择器
### CSS选择器权重
!import > ID选择器 > 类选择器 > 标签选择器
###  inline 的元素能设置宽高、margin 属性吗
inline 行内元素，内容自然撑高，设置宽高无意义，margin,padding也是只有左右边距有意义，上下边距无意义
###  CSS3性能优化
1. 首屏静态加载共有css
2. 减少嵌套
3. ID前不要嵌套
4. 减少使用通配符
5. 雪碧图
6. ...
### 如何实现宽度不固定的正方形？
```
div {
    width: 100%;
    background-color : #000;
    padding-top: 100%
}
```
### 移动端1px边框如何处理？
采用 border-image 的方式 
采用 transform: scale()的方式
### font-size 和 border 可以被继承吗
font-size可以被继承，border不能