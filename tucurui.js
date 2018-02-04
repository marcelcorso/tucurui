r = Math.random;

var b = document.getElementsByTagName('body')[0];

function rcolor() {
  return "rgba(" + Math.floor(r()*255) + ","+Math.floor(r()*255)+","+Math.floor(r()*255)+","+r()+")";
}

var paddingStart = 100; 
var paddingEnd = 5;


var lastDiv = b;
var padding = paddingStart;
var i = 0;
while (padding > paddingEnd) {
  var div = document.createElement('div');
  
  div.style.background = i % 2 ? "white" : "black";
  div.style.padding = padding + "px";
  div.padding = padding;
  lastDiv.append(div);  

  lastDiv = div;
  padding = padding - 7;
  i++;
}

// find first div
var firstDiv; 
for(i = 0; i < b.children.length; i++) {
  if (b.children[i].tagName == "DIV") {
    firstDiv = b.children[i]; 
  }
}


function tick() {
  var div = firstDiv;
  div.padding -= 1;
  div.style.padding = div.padding + "px";

  if (div.padding == 0) {
    // stop shrinking the outmost div
    firstDiv = firstDiv.firstElementChild;

    // and add a new one 
    var div = document.createElement('div');
    div.style.background = i % 2 ? "white" : "black";
    div.style.padding = paddingStart + "px";
    div.padding = paddingStart;
    lastDiv.append(div);

    lastDiv = div;
    padding = padding - 7;
    i++;

  }
}


setInterval(tick, 50);


