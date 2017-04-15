

window.onload = function() {

  // var audio = new Audio('http://www.chenfangwei.xyz/bgm.mp3');
  // audio.play();

  var shakeMusic = document.getElementById("shakeMusic");
  shakeMusic.load();
//  shakeMusic.play();
  window.addEventListener('shake', shakeEventDidOccur, false);

  function shakeEventDidOccur(obj) {
    shakeMusic.play();
  }

};
