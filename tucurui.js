r = Math.random;

var b = document.getElementsByTagName('body')[0];

function rcolor() {
  return "rgba(" + Math.floor(r()*255) + ","+Math.floor(r()*255)+","+Math.floor(r()*255)+","+r()+")";
}

var sqrDistance = 10; // px

var sqrNo = document.documentElement.clientWidth / (2 * sqrDistance);

console.log("document.documentElement.clientWidth: " + document.documentElement.clientWidth);
console.log("sqrNo: " + sqrNo);

var p = b;
for (var i = 0; i < sqrNo; i++) {
  var div = document.createElement('div');
  div.style.background = rcolor();
  p.append(div);  

  p = div;
}



