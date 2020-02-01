var levelIsValid = false;
var initLayer = 1;
var map = null;

const layerColorList = ["#34495e", "#EA2027", "#FFC312", "#12CBC4", "#1B1464", "#6F1E51", "#000000", "#fbc531", "#c23616"];

function saveLevel() {
  // Check if level is valid
  if (checkIfLevelIsValid()) {
    var n = htmlMapToNmap(map);

    if (n === NaN || n === null || n === undefined) {
      alert("Parse Error: Check if each brick has a valid number.");
      return;
    }

    var d = decToHex(n);
    alert(d);
    d = btoa(d);
    ioenter.innerText = d;
  }
}

function checkIfLevelIsValid() {
  var count_of_zero = 0;
  for (let i = 0; i < map.length; i++) {
    if (parseInt(map[i].innerText) < 0 || parseInt(map[i].innerText) > 8) {
      alert("Layer Error: Level is not valid, please check if the layer of each brick equals between 0 and 5 (6, 7, 8 for special layers).");
      return false;
    }
    if (parseInt(map[i].innerText) === 0) {
      count_of_zero++;
    }
  }

  if (count_of_zero > 14) {
    alert("Zero Layer Error: Count of layers '0' is too much ");
    return false;
  }

  return true;
}

function decToHex(n) {
  var q = 10;
  var r = '';
  var arr = '';
  while (q != 0) {
    q = Math.round(n / 16);
    n = q;
    r = (n % 16).toString(16);
    arr += r;
    //alert(q);
  }

  arr = arr.split("").reverse().join("");
  return arr;
}

function hexToDec(h) {
  var sums = 0;
  var power_zone = h.toString().length;
  for (let i = 0; i < h.toString().length; i++) {
    var p = Math.pow(16, power_zone-1);

    var m = parseInt(h[i], 16) * p;
    sums += m;
    power_zone--;
  }
  return sums.toString();
}

function htmlMapToNmap(m) {
  var res = [];

  for (let i = 0; i < m.length; i++) {
    res.push(parseInt(map[i].innerText));
  }

  return res;
}

function loadLevel() {
  if (ioenter.innerText != "") {
    var d = atoa(ioenter.innerText);
    var n = hexToDec(d);
    alert(d);
  }
}

function runLevel() {
  alert("Run Test");
}

function updateLayer() {
  var i = document.getElementById('chooseId');
  if (i.value < 0 || i.value > 8) {
    i.value = 8;
  }
  initLayer = i.value;
}

function checkLayer(layer, i) {
  if (layerColorList[layer] != null) {
    map[i].style.backgroundColor = layerColorList[layer];
  }
}

map = document.getElementsByClassName('square');
ioenter = document.getElementById('iodata');

for (let i = 0; i < map.length; i++) {
  map[i].addEventListener('mousedown', function (event) {
    var curL = 0;

    if (event.which != 3) {
      curL = initLayer;
    }

    map[i].innerText = curL;
    checkLayer(curL, i);
  });
}
