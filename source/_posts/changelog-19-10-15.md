---
title: Changelog 19.10.15：动态头像
date: 2019-10-15 00:01:00
categories:
- features
tags:
- avatar
- feature
- changelog
---

当初决定 fork 并且改出这么一个主题就是想搞一个头像出来，最好还能有点~~炫酷的~~特效。

最终效果如下所示了，在网页上移动鼠标就能看到效果了。对于手机、平板和带触摸屏的设备，手指在网页随便什么地方戳一下也有一样的效果。

<div style="position:relative;text-align:center;width:100%;height:180px;">
  <div style="position:relative;display:inline-block;height:180px;width:320px;">
    <img style="position:absolute;top:0;left=0" src="http://kuwii.xyz/AvataredHacker/images/avatar_body.png" />
    <img id="changelog-avatar-demo-eyeball" style="position:absolute;top:0;left=0" src="http://kuwii.xyz/AvataredHacker/images/avatar_eyeball.png" />
  </div>
</div>
<script>
  var avatarSettings2 = {
      maxDistance: 25,
      sensitivity: 0.008,
  };
  var avatarState2 = {};
  var moveEyeBall2 = function(e) {
      var mPos = e || window.event;
      var mPosX = mPos.pageX, mPosY = mPos.pageY;      
      var subX = avatarState2.wCenterX - mPosX, subY = avatarState2.wCenterY - mPosY;
      var distance = Math.sqrt(subX*subX + subY*subY);
      var sigmoid = (1 / (1 + Math.exp(0 - distance * avatarSettings2.sensitivity)) - 0.5) * 2;
      var newPosX = avatarState2.wClientX - sigmoid * avatarSettings2.maxDistance * subX / distance;
      var newPosY = avatarState2.wClientY - sigmoid * avatarSettings2.maxDistance * subY / distance;
      avatarState2.avatar.style.left = newPosX - avatarState2.wParentX + 'px';
      avatarState2.avatar.style.top = newPosY - avatarState2.wParentY + 'px';
  };
  var moveEyeBallMobile2 = function(e) {
    var touch = e.touches[0];
    var mPos = {
      pageX: touch.pageX,
      pageY: touch.pageY
    };
    moveEyeBall2(mPos);
  }
  new function() {
    var avatar = document.getElementById('changelog-avatar-demo-eyeball');
    var wClientX = avatar.offsetLeft, wClientY = avatar.offsetTop;
    var cur = avatar.offsetParent;
    while (cur !== null){
      wClientX += cur.offsetLeft;
      wClientY += cur.offsetTop;
      cur = cur.offsetParent;
    }
    var wParentX = wClientX - avatar.offsetLeft, wParentY = wClientY - avatar.offsetTop;
    var wCenterX = wClientX + avatar.offsetWidth / 2, wCenterY = wClientY + avatar.offsetHeight / 2;
    avatarState2 = {
      avatar: avatar,
      wClientX: wClientX,
      wClientY: wClientY,
      wParentX: wParentX,
      wParentY: wParentY,
      wCenterX: wCenterX,
      wCenterY: wCenterY
    };
    document.addEventListener("mousemove", moveEyeBall2);
    document.addEventListener("touchstart", moveEyeBallMobile2);
    document.addEventListener("touchmove", moveEyeBallMobile2);
  }();
</script>

目前只简单地实现了一个“指哪里看哪里”的效果，用“最大距离”和“灵敏度”两个参数控制“眼球”的移动，前者控制最大的移动距离，后者值越高越快移动到最大距离。

一开始发现按距离等比例移动眼球效果看起来有点假，所以改成了使用了Sigmoid函数计算。~~（嗯，苦学炼金术最后全用到这里了）~~

头像可以任意替换，如果不希望使用动态效果，也可以使用静态头像。

其他方面的修改还有：

* 主色调方面做了一些修改，从 Hacker 的红色调改成了蓝色调，css 里 hover 相关的效果也略作了调整
* 修改了网页标题的生成规则，把 subtitle 和文章的 title 改放到了最前面