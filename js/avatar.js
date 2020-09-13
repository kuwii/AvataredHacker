var avatarState = {}

function moveEyeBall(e){
  var mPos = e || window.event;
  var mPosX = mPos.pageX, mPosY = mPos.pageY;
  
  var subX = avatarState.wCenterX - mPosX, subY = avatarState.wCenterY - mPosY;
  var distance = Math.sqrt(subX*subX + subY*subY);
  
  var sigmoid = (1 / (1 + Math.exp(0 - distance * avatarSettings.sensitivity)) - 0.5) * 2;
  var newPosX = avatarState.wClientX - sigmoid * avatarSettings.maxDistance * subX / distance;
  var newPosY = avatarState.wClientY - sigmoid * avatarSettings.maxDistance * subY / distance;
  
  avatarState.avatar.style.left = newPosX - avatarState.wParentX + 'px';
  avatarState.avatar.style.top = newPosY - avatarState.wParentY + 'px';
}

function moveEyeBallMobile(e) {
  var touch = e.touches[0];
  var mPos = {
    pageX: touch.pageX,
    pageY: touch.pageY
  };
  moveEyeBall(mPos);
}

var avatarSettingsVal = {
  maxDistance: Number.parseFloat(avatarSettings.maxDistance),
  sensitivity: Number.parseFloat(avatarSettings.sensitivity),
}

new function() {
  var avatar = document.getElementById('avatar-eyeball');
  var wClientX = avatar.offsetLeft, wClientY = avatar.offsetTop;

  var cur = avatar.offsetParent;
  while (cur !== null){
    wClientX += cur.offsetLeft;
    wClientY += cur.offsetTop;
    cur = cur.offsetParent;
  }

  var wParentX = wClientX - avatar.offsetLeft, wParentY = wClientY - avatar.offsetTop;
  var wCenterX = wClientX + avatar.offsetWidth / 2, wCenterY = wClientY + avatar.offsetHeight / 2;

  avatarState = {
    avatar: avatar,
    wClientX: wClientX,
    wClientY: wClientY,
    wParentX: wParentX,
    wParentY: wParentY,
    wCenterX: wCenterX,
    wCenterY: wCenterY
  };

  document.addEventListener("mousemove", moveEyeBall);
  document.addEventListener("touchstart", moveEyeBallMobile);
  document.addEventListener("touchmove", moveEyeBallMobile);
}();