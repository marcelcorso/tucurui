
var b = document.getElementsByTagName('body')[0];

var biggerPadding = 100;
var smallerPadding = 2;

var i = 0;
var div = document.createElement('div');
div.style.background = i % 2 ? "white" : "black";
div.padding = biggerPadding;
div.style.padding = div.padding + "px";
i++; 
b.append(div);

var lastDiv = firstDiv = div;

var inc = 1;
var incDiv = null;

function tick() {

  if (firstDiv.padding == 0) {
    // stop shrinking the outmost div
    firstDiv = firstDiv.firstElementChild;
    // TODO kill 
  }

  if ((lastDiv.offsetWidth > (smallerPadding*2)) && (lastDiv.padding > smallerPadding)) {
    // add a new one 
    var div = document.createElement('div');
    div.style.background = i % 2 ? "white" : "black";
    div.padding = lastDiv.padding - 5;
    div.style.padding = div.padding + "px";
    div.id = "d-" + i;
    lastDiv.append(div);

    lastDiv = div;
    i++;

    console.log("div.padding: " + div.padding);
  }

  firstDiv.padding -= 1;
  firstDiv.style.padding = firstDiv.padding + "px";

  if (incDiv != null) {
    console.log("incDiv not null: " + incDiv.id + ";  padding: " + incDiv.padding);
    incDiv.padding += inc;
    incDiv.style.padding = incDiv.padding + "px";
    inc++;
    console.log("           padding after: " + incDiv.padding);
    incDiv = incDiv.firstElementChild;
  } else {
    console.log("incDiv NULL");
    incDiv = firstDiv.firstElementChild;
    inc = 1;
  }
}


// var interval = setInterval(tick, 50);

function stop() {
  clearInterval(interval);
}
