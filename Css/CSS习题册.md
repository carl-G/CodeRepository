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
+ reletive 相对定位: 相对当前位置进行偏移-不脱离文档流
+ flex 弹性布局 -不脱离文档流
+ table 表格布局: 前端最早期布局方式-不脱离文档流 
+ grid 栅格布局: 栅格化布局，类似于bootstrap - 不脱离文档流（目前兼容性）
+ float 浮动 - 脱离文档流
+ absolute 绝对定位: 相对于上一级布局节点进行位置定位-脱离文档流
+ fixed 固定定位: 相对于视图进行位置精准定位-脱离文档流
+ sticky 粘性布局：常用于吸顶功能-脱离文档流


### flex 有哪些语法 一一列举?

### 哪些会影响页面的重绘和重排？

### 如何水平垂直居中？

### CSS选择器有那些？

### CSS选择器权重

###  inline 的元素能设置宽高、margin 属性吗

###  CSS3性能优化

### 如何实现宽度不固定的正方形？

### 移动端1px边框如何处理？

### font-size 和 border 可以被继承吗
