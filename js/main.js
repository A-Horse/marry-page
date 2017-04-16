var shakeMusic = document.getElementById("shakeMusic");
shakeMusic.load();
document.addEventListener("WeixinJSBridgeReady", function () {
  shakeMusic.play();
}, false);

document.getElementById('button1').addEventListener('click', function() {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
});

window.onload = function() {
  var currentNumber = 1;
  document.getElementById('number-add').addEventListener('click', function(event) {
    currentNumber++;
    document.getElementById('number').innerHTML = currentNumber;
  });

  document.getElementById('number-reducer').addEventListener('click', function(event) {
    if (currentNumber === 1) {
      return;
    }
    currentNumber--;
    document.getElementById('number').innerHTML = currentNumber;
  });

  document.getElementById('ok').addEventListener('click', function() {
    var name = document.getElementById('name').value.trim();
    if (!name) {
      return alert('请输入名字');
    }


    var http = new XMLHttpRequest();
    var url = "http://www.chenfangwei.xyz/api/fill-in";
    http.open("POST", url, true);


    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function() {//Call a function when the state changes.
      if( http.readyState == 4 ) {
        if (http.status == 201) {
          document.getElementById('page2').style.display = 'none';
          document.getElementById('page3').style.display = 'block';
        } else {
          alert('错误了');
        }
      }
    }

    var data = JSON.stringify({name: name, number: currentNumber});
    http.send(data);
  });
};


// window.onload = function() {

//   // var audio = new Audio('http://www.chenfangwei.xyz/bgm.mp3');
//   // audio.play();

//   var shakeMusic = document.getElementById("shakeMusic");
//   shakeMusic.load();
//   // shakeMusic.play();
//   // window.addEventListener('shake', shakeEventDidOccur, false);

//   function shakeEventDidOccur(obj) {
//     shakeMusic.play();
//   }
//   shakeMusic.addEventListener('play', function() {

//     // 当 audio 能够播放后, 移除这个事件
//     window.removeEventListener('touchstart', shakeEventDidOccur, false);
//   }, false);

//   window.addEventListener('touchstart', shakeEventDidOccur, false);




// };
