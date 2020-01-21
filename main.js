var levelIsValid = false;
var initLayer = 0;

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

var ele = document.getElementsByClassName('square');

ele.forEach((item) => {
  /*item.addEventListener('click', function (event) {
    alert("Lol")
  });*/
  alert(item);
});
