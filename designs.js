// Select color input
// Select size input
const canvas = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const size = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()

// Initial makeGrid Function
function makeGrid(height, width) {
    canvas.innerHTML = "";
    for (let r = 0; r < height; r++) {
        let row = canvas.insertRow(r);
        for (let c = 0; c < width; c++) {
            let column = row.insertCell(c);
            column.addEventListener("click", function(event) {
                column.style.backgroundColor = color.value;
                console.log("fill");
            column.addEventListener("contextmenu", function(event) {
                event.preventDefault();
                column.style.backgroundColor = "white";
                console.log("empty");
            })
            })
        }
    }
}

size.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid(height.value, width.value);
});

//Attempt at Refactoring makeGrid Function
//function makeGrid(height, width) {
//    for (let r = 0; r < height; r++) {
//        let row = canvas.insertRow(r);
//        for (let c = 0; c < width; c++) {
//            let column = row.insertCell(c);
//            column.addEventListener("click", fillSquare)
//            column.addEventListener("contextmenu", emptySquare)
//        }
//    }
//}

//function fillSquare(column) {
//    column.style.backgroundColor = color.value;
//    console.log("fill");
//}

//function emptySquare(column) {
//    column.preventDefault();
//    column.style.backgroundColor = "white";
//    console.log("empty");
//}