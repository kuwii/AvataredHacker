---
title: Changelog 20.09.13：暗黑模式
date: 2020-09-13 00:00:00
categories:
- features
tags:
- dark mode
- feature
- changelog
---

鸽了一整年……这次Merge了官方（[CodeDaraW/Hacker](https://github.com/CodeDaraW/Hacker)）在上一个版本之后的更新。

主要是增加了对[prefers-color-scheme](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme)中dark模式的支持，当浏览器启用深色模式时，页面将自动换为深色调配色。

需要注意的是部分浏览器可能尚未支持这个Feature（多半是浏览器内核过老导致的，多见于一些换皮的“安全”、“极速”浏览器）。