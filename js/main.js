

window.onload = function() {

  // var audio = new Audio('http://www.chenfangwei.xyz/bgm.mp3');
  // audio.play();

  var shakeMusic = document.getElementById("shakeMusic");
  shakeMusic.load();
  // shakeMusic.play();
  // window.addEventListener('shake', shakeEventDidOccur, false);

  function shakeEventDidOccur(obj) {
    shakeMusic.play();
  }
  shakeMusic.addEventListener('play', function() {

    // 当 audio 能够播放后, 移除这个事件
    window.removeEventListener('touchstart', shakeEventDidOccur, false);
  }, false);

  window.addEventListener('touchstart', shakeEventDidOccur, false);


};
