
var http = new XMLHttpRequest();
var url = "http://localhost:8096/api/tj";
http.open("GET", url, true);


http.onreadystatechange = function() {//Call a function when the state changes.
  if( http.readyState == 4 ) {
    console.log(http);
    var data = JSON.parse(http.responseText);
    var number = 0;
    var people = 0;
    document.getElementById('container').innerHTML = data.map(function(d) {
      number++;
      people += Number(d.number);
      return '<tr><td>' + d.name + '</td><td>' + d.number + '</td></tr>';
    }).join('');
    document.getElementById('number').innerHTML = number;
    document.getElementById('people').innerHTML = people;
  }
}

http.send();
