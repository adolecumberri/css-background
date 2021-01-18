// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*
Numbers:
rhombus: 1
pentagon: 5
hexagon: 6
*/
//estado actual y el nuevo.
let lastState = -1;

let chageTo = (number) => {
  let polygones = Array.from(document.getElementsByClassName("polygone"));
  console.log(polygones);
  switch (number) {
    case 1:
      addRClass();
      polygones.forEach((poly) => {
        poly.classList = "polygone rhombus";
      });
      break;
    case 5:
      removeRClass();
      polygones.forEach((poly) => {
        poly.classList = "polygone pentagon";
      });
      break;
    case 6:
      removeRClass();
      polygones.forEach((poly) => {
        poly.classList = "polygone hexagon";
      });
      break;
  }

  lastState = number;
};

let removeRClass = () => {
  let rows = Array.from(document.getElementsByClassName("row"));
  rows.forEach((row) => {
    row.classList.remove("r");
  });
};

let addRClass = () => {
  let rows = Array.from(document.getElementsByClassName("row"));
  rows.forEach((row) => {
    row.classList.add("r");
  });
};
