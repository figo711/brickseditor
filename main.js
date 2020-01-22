var levelIsValid = false;
var initLayer = 1;
var map = null;

const layerColorList = ["#ecf0f1", "#EA2027", "#FFC312", "#12CBC4", "#1B1464", "#6F1E51"];

function saveLevel() {
  alert("Save Test");
}

function loadLevel() {
  alert("Load Test");
}

function runLevel() {
  alert("Run Test");
}

function updateLayer() {
  var i = document.getElementById('chooseId');
  initLayer = i.value;
}

function checkLayer(layer, i) {
  if (layerColorList[layer] != null) {
    map[i].style.color = layerColorList[layer];
  }
}

map = document.getElementsByClassName('square')

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
