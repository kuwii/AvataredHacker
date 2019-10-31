---
title: Changelog 19.10.21：动态头像
date: 2019-10-21 00:00:00
categories:
- features
tags:
- mathjax
- feature
- changelog
---

那一年，我还在学习炼金术，

那一年，我仍然坚持在博客上写学习笔记，

……于是就有一大堆数学公式要整理。贴公式图片显然不是一个优雅的办法，而且写错了想改也是十分蛋疼的，于是就盯上了 MathJax 。旧博客虽然已经入土了， MathJax 还是个好东西，所以决定集成进来。

总之，通过 MathJax ，你可以实现如下的效果（以机器学习里的代价函数公式为例）：

$$J(\theta_0, \theta_1) = \frac {1}{2m} \displaystyle \sum _{i=1}^m \left ( \hat{y}^{(i)}- y^{(i)} \right)^2 = \frac {1}{2m} \displaystyle \sum _{i=1}^m \left (h_\theta (x^{(i)}) - y^{(i)} \right)^2$$

由于加载需要一定的时间，所以可能会有原始公式代码延迟一下才渲染成公式的情况，不过看起来似乎不是很严重，而且一个 \\(0 \\) star 的项目除了我自己又没有人真的用……

先这样吧……