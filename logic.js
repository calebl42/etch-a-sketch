let grid = document.querySelector("#grid");

let grid_elements = [];

let set_grid = function(len) {
  grid.innerHTML = "";
  grid_elements = [];
  for (let i = 0; i < len; i++) {
    let r = [];
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < len; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
        console.log((Math.random() * 16777215).toString(16));
      });
      row.appendChild(cell);
      r.push(cell);
    }
    grid.appendChild(row);
    grid_elements.push(r);
  }
};

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  for (let r of grid_elements) {
    for (let c of r) {
      c.style.backgroundColor = "white";
    }
  }
});

let change_size = document.querySelector("#change-size");
change_size.addEventListener("click", () => {
  let len = prompt("Enter new grid size: ");
  set_grid(Math.min(len, 100));
});

set_grid(64);
