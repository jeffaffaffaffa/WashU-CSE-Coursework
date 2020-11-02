var api = "https://api.kanye.rest";
var quote;

function getQuote() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var kquoteObj = JSON.parse(this.responseText);
      quote = kquoteObj;
      var kquoteString = "'" + quote.quote + "'";

      console.log(quote);

      document.getElementById("quote").innerHTML = kquoteString;
    }
  }

  xhttp.open("GET", api, true);

  xhttp.send();
}

document.getElementById("generateQuote").addEventListener("click", getQuote);
