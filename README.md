# AvataredHacker | [中文版文档](/README_zh-CN.md)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)  [![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-2.0)  

**AvataredHacker** is a theme for Hexo, modified from [**CodeDaraW/Hacker**](https://github.com/CodeDaraW/Hacker), which tries to add some small effects and features that make the blog and articles funny while keeping the theme simple.

## Installation

Firstly get the theme files, `git clone` or `download zip` both are ok.  

Create a folder named `AvataredHacker` in the folder `themes`, and copy all the theme files to the folder `AvataredHacker`.  

Then apply the theme in the hexo global configuration file `_config.yml`:

```yaml
theme: AvataredHacker
```
Now all are in order, just enjoy~

__Notice: After every update, you'd better run command `hexo clean` to clean cache files before Hexo generating, in case of some problems cache files bring.__


## Configure

Refering to the example configuration file `_config.example.yml`, 
create the theme configuration file `_config.yml` and edit it.

### Configure Avatar

As its name, **AvataredHacker** replaces the main title of the blog with an avatar, which can be a static image, or a dynamic avatar that supports the effect of "looking at the pointer".

#### Use Dynamic Avatar

In `_config.yml`, there should be configurations as follows:

```yaml
dynamic_avatar: true
max_distance: 15
sensitivity: 0.01
```

`dynamic_avatar`: `boolean`，use dynamic avatar or not  
`max_distance`: `number`，maximum distance the "eyeball" can move when use dynamic avatar (Useless when using static avatar)
`sensitivity`: `number`，sensitivity of "eyeball" when the pointer moves (Uselesswhen using static avatar)

#### Update Avatar

Pictures whose name start with `avatar` in folder `source/images` of theme files are avatar pictures. 

If you want to use static avatar, just replace `avatar.png`.

If you want to use dynamic avatar, replace the following two files:

* `avatar_body.png`: "body" of the avatar (without the "eyeball")
* `avatar_eyeball`: "eyeball" that look at the pointer

In the page, the top left corners of the two images are aligned, the "eyeball" is on the top, and the "body" is on the bottom.

### Enable Comments and Google Analytics

In `_config.yml`, there should be configurations as follows:

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

`gitment`: `boolean`，use gitment or not  
`gitment_owner`: `string`，your GitHub ID  
`gitment_repo`: `string`，the repo to store comment data  
`gitment_client_id`: `string`，your client ID  
`gitment_client_secret`: `string`，your client secret  

`gitalk`: `boolean`，use gitalk or not  
`gitalk_owner`: `string`，your GitHub ID  
`gitalk_admin`: `array`，all the admin GitHub IDs  
`gitalk_repo`: `string`，the repo to store comment data 
`gitalk_client_id`: `string`，your client ID 
`gitalk_client_secret`: `string`，your client secret  


`valine`: `boolean`, use Valine or not  
`leancloud_id`: `string`, your leancloud ID  
`leancloud_key`: `string`, your leancloud Key  

`disqus`: `boolean`, use disqus or not;  
`disqus_shortname`: your disqus site shortname.

`googleTrackId`: your Google Analytics ID, Hacker will not use Google Analytics if it's empty.

### Enable Categories and Tags pages
Categories Page: run `hexo new page categories`，then modify the generated file `source/categories/index.md`：
``` markdown
title: categories
date: 2017-01-30 19:16:17
layout: "categories"
---  
```
If you need to close comments of this page , you can add a line `comments: false`; `title` corresponds to the title of the page.

Tags Page: run `hexo new page tags`，then modify the generated file `source/tags/index.md`：
``` markdown
title: tags
date: 2017-01-30 19:16:17
layout: "tags"
---  
```
Configuration is the same as Categories Page.  

Add links to the menu: Edit the `_config.yml` file of the theme, add `Categories: /categories` and `Tags: /tags` in `menu` like this：
``` yml
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
```

## License
GNU GPL(General Public License) v2.0

## Statement of Changes

This project is modified from [**CodeDaraW/Hacker**](https://github.com/CodeDaraW/Hacker) by kuwii. Changes and relavent dates are listed at [**CHANGELOG.md**](/README.md).