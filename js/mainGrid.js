//setup blank canvas with changeable pixels
function pixelPainter(width, height) {
  // width = colums , height = row
  // matrix of rows * columns
  // populate with new Pixel --- pixel factory
  // append each pixel to a unique row
  // append row to canvas --- pixelPainter
var rows = height;
var cols = width;
var row;
var pix;
var grid = document.createElement('table');
grid.id = 'grid';


for(var i = 0; i < rows; i++) {
  row = document.createElement('tr');
  row.className = 'row';
  for(var j = 0; j < cols; j++) {
    pix = pixelFactory();
    row.appendChild(pix);
  }
  grid.appendChild(row);
}

document.body.appendChild(grid);
// debugger;
console.log("test", document.body.appendChild(grid));
}
pixelPainter(10,10);