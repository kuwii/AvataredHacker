# AvataredHacker
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)  [![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-2.0)  

**AvataredHacker**是一款Hexo博客主题，修改自[**CodeDaraW/Hacker**](https://github.com/CodeDaraW/Hacker)，在保持原主题总体风格简洁的情况下，尝试添加一些使网站和文章更有趣的小特效和功能。


## 安装

获得主题文件， `git clone` 或者 `download zip` 均可；  

在 `themes` 文件夹中创建文件夹 `AvataredHacker` ，将主题文件都复制粘贴至 `AvataredHacker` 文件夹；  

然后在hexo全局配置文件 `_config.yml` 中应用主题：

```yaml
theme: AvataredHacker
```

这样就安装好了，开始享受吧~

__注意：版本更新后建议在hexo生成前执行一次 `hexo clean` ，清除以前的缓存，避免带来的一些莫名其妙的问题。__

## 配置

参考 `_config.example.yml` 配置案例，创建主题配置文件 `_config.yml` 并编辑。

### 配置头像

如其名， **AvataredHacker** 使用一个头像取代了博客的主标题。头像可以一个静态图片，还可以是一个支持“看向鼠标”效果的动态头像。

#### 使用动态头像

在 `_config.yml` 中，有如下配置：

```yaml
dynamic_avatar: true
max_distance: 15
sensitivity: 0.01
```

`dynamic_avatar`: `boolean`，是否使用动态头像  
`max_distance`: `number`，使用动态头像时，“眼球”可以移动的最大距离（使用静态头像时此项无效）
`sensitivity`: `number`，使用动态头像时，“眼球”随鼠标移动的灵敏度（使用静态头像时此项无效）


#### 更换头像

主题文件中 `source/images` 文件夹内以 `avatar` 开头的为头像图片。

如果希望使用静态头像，替换 `avatar.png` 即可。

如果希望使用动态头像，需要替换如下两个文件：

* `avatar_body.png`：头像本体（不包含“眼球”）
* `avatar_eyeball`：看向鼠标的“眼球”

在网页中，两张图片左上角对齐，“眼球”在上，“本体”在下叠加显示。

### 启用评论和谷歌分析

在 `_config.yml` 中，有如下配置：

```yaml
# gitment
gitment: false
gitment_owner:
gitment_repo:
gitment_client_id:
gitment_client_secret:

# gitalk
gitalk: false
gitalk_owner:
gitalk_admin: []
gitalk_repo:
gitalk_client_id:
gitalk_client_secret:

# valine comment
valine: false
leancloud_id:
leancloud_key:

# disqus comment
disqus: false
disqus_shortname:

# google analytics
googleTrackId:
```

`gitment`: `boolean`，是否开启 Gitment 评论  
`gitment_owner`: `string`，你的 GitHub ID  
`gitment_repo`: `string`，存储评论的 Repo  
`gitment_client_id`: `string`，你的 Client ID  
`gitment_client_secret`: `string`，你的 Client Secret  

`gitalk`: `boolean`，是否开启 Gitalk 评论  
`gitalk_owner`: `string`，你的 GitHub ID  
`gitalk_admin`: `array`，所有管理员 GitHub ID  
`gitalk_repo`: `string`，存储评论的 Repo  
`gitalk_client_id`: `string`，你的 Client ID  
`gitalk_client_secret`: `string`，你的 Client Secret  

`valine`: `boolean`，是否开启 Valine 评论  
`leancloud_id`: `string`，你的 LeanCloud ID  
`leancloud_key`: `string`，你的 LeanCloud Key  

`disqus`: `boolean`，是否开启 Disqus 评论；  
`disqus_shortname`: `string`，你的 Disqus Site Shortname。  

`googleTrackId`: `string`，为谷歌分析的个人ID，留空则为不使用谷歌分析。

### 启用分类和标签页面
分类功能：执行 `hexo new page categories` ，然后修改生成的 `source/categories/index.md` ：

``` markdown
title: categories
date: 2017-01-30 19:16:17
layout: "categories"
---  
```

如果你需要关闭该页的评论，可以添加一行 `comments: false`；`title` 对应的则是该页的标题。  

标签功能：同理，执行 `hexo new page tags` ，然后修改生成的 `source/tags/index.md` ：
``` markdown
title: tags
date: 2017-01-30 19:16:17
layout: "tags"
---  
```
配置同分类功能。

在菜单中添加链接：编辑主题的 `_config.yml` ，在 `menu` 中添加 `Categories: /categories` 和 `Tags: /tags`，如下：
``` yml
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
```

## 协议
GNU GPL(General Public License) v2.0

## 修改说明

本项目由 kuwii 修改自[**CodeDaraW/Hacker**](https://github.com/CodeDaraW/Hacker)。改动以及相应时间列在 [**CHANGELOG.md**](/README.md) 中。