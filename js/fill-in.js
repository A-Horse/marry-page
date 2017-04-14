
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
          window.location.href = './thank.html'
        } else {
          alert('错误了');
        }
      }
    }

    var data = JSON.stringify({name: name, number: currentNumber});
    http.send(data);
  });
};
