var levelIsValid = false;
var initLayer = 0;
var map = null;

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

map = document.getElementsByClassName('square')

for (let i = 0; i < map.length; i++) {
  map[i].addEventListener('mousedown', function (event) {
    if (event.which == 3) {
      map[i].innerText = 0;
    }
    else {
      map[i].innerText = initLayer;
    }
  });
}
