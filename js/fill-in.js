

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
    var http = new XMLHttpRequest();
    var url = "/api/fill-in";
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
      }
    }

    var data = JSON.stringify({name: document.getElementById('name').value, number: currentNumber});
    http.send(data);
  });
};
