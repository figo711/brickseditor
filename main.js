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

    ioenter.value = n.join("");
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

function htmlMapToNmap(m) {
  var res = [];

  for (let i = 0; i < m.length; i++) {
    res.push(parseInt(map[i].innerText));
  }

  return res;
}

function loadLevel() {
  if (ioenter.value != "") {
    let t = ioenter.value;

    if (t.length > 42) {
      alert("Load Error: Length of <" +t+ "> must not exceed beyond 42.");
      return;
    }

    for (let i = 0; i < t.length; i++) {
      if (isNaN(parseInt(t[i]))) {
        alert("Load Error: This '" +t[i]+ "' is not a number.");
        break;
      }
      else if (parseInt(t[i]) < 0 || parseInt(t[i]) > 8) {
        alert("Load Error: " + t[i]+ " must be between 0 and 8.");
        break;
      }

      map[i].innerText = t[i];
      checkLayer(t[i], i);
    }
  }
}

function copy_text() {
  ioenter.select();
  ioenter.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementsByName('copy')[0].innerText = "Copied";
  setTimeout(function() {
      document.getElementsByName('copy')[0].innerText = "Copy";
  }, 2000);
}

function clearLevel() {
  for (let i = 0; i < 42; i++) {
    map[i].innerText = 0;
    checkLayer(0, i);
  }
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
