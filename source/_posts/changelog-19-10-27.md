---
title: Changelog 19.10.27：拆分MathJax配置文件
date: 2019-10-27 00:00:00
categories:
- features
tags:
- mathjax
- feature
- changelog
---

之前加载 MathJax 是在```layout/components/setMathjax.ejs```里实现的，考虑到日后有修改这个文件的可能，为了不影响用户自定义配置，就把配置拆了出来形成了下面两个文件：

* ```layout/components/_config_mathjax_cdn.ejs```：用于配置选择最快的CDN
* ```layout/components/_config_mathjax.ejs```：用于MathJax的配置

这样后面如果有东西需要改的话，这两个配置文件是不会受影响的。

不过想想，好像也没啥需要再改的了……