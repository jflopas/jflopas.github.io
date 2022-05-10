let off = 0; // off = 0 -> Contador parado / off = 1 -> Contador en marcha
let edit = 0; // edit = 0 -> setTo() puede cambiar el valor de screen / edit = 1 -> setTo() no hace nada.
let init = 0; // Inicialmente el contador está parado así que init = 0
let count = 0;
let screen = document.getElementById("screen");
let valueTo = document.getElementById("setTo");
let valueStep = document.getElementById("step");
let btnStart = document.getElementById("start");

function start() {
  if (off == 1) {
    init = valueTo.value;
    count = setInterval(() => {
      screen.innerHTML = init++;
    }, 1000);
    edit = 1;
    off = 1;
  } else if (valueStep > 1 || valueStep <= 0) {
    count = setInterval(() => {
      screen.innerHTML = init;
      init += parseInt(valueStep.value);
    }, 1000);
    edit = 1;
    off = 1;
  } else {
    count = setInterval(() => {
      screen.innerHTML = init++;
    }, 1000);
    console.log(count);
    off = 1;
    edit = 1;
  }
}

function pause() {
  clearInterval(count);
  btnStart.disabled = false;
  off = 0;
}

function reset() {
  if (off == 1 || off == 2 || off == 0) {
    pause();
  }
  init = 0;
  screen.innerHTML = init;
  valueTo.value = 0;
  valueStep.value = 1;
  edit = 0;
}

function oneMore() {
  screen.innerHTML = init++;
}

function oneLess() {
  screen.innerHTML = init--;
}

function setTo() {
  if (edit == 0) {
    let value = valueTo.value;
    screen.innerHTML = value;
    off = 1;
  } else {
    off = 1;
  }
}

function stepTo() {
  pause();
  if (isNaN(valueStep.value)) {
    init += 1;
  }
  if (off == 0) {
    count = setInterval(() => {
      screen.innerHTML = init;
      init += parseInt(valueStep.value) || 1;
    }, 1000);
    edit = 1;
    off = 1;
    btnStart.disabled = true;
  } else {
    start();
  }
}
