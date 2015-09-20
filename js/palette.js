
// Global variable
var selectedColor = '#000000';

// will create a static grid of static divs
// hard code all colors into grid
// addeventListener to each pixal color selector
function paletteGrid() {
var rows = 6;
var cols = 6;
var counter = 0;
var row;
var palettePx;
var paletteDiv = document.createElement('table');
paletteDiv.id = 'paletteDiv';


for(var i = 0; i < rows; i++) {
  row = document.createElement('tr');
  row.className = 'row';
  for(var j = 0; j < cols; j++) {
    palettePx = palettePixelFactory(colorArry[counter]);
    row.appendChild(palettePx);
    counter ++;
  }
  paletteDiv.appendChild(row);
}
// debugger;
document.body.appendChild(paletteDiv);
}

// return clicked pixels color store global
function palettePixelFactory(color) {
var pixelColor = document.createElement('td');
pixelColor.style.background = color;
pixelColor.style.width = '20px';
pixelColor.style.height = '20px';
pixelColor.addEventListener('click', colorSelector);
return pixelColor;
}

function colorSelector() {
  selectedColor = this.style.background;
  console.log(selectedColor);
}

var colorArry = ['#CD4A4A','#CC6666','#BC5D58','#FD5E53','#FF7538','#9F8170','#FAA76C','#FF8D88','#FFCF48','#FCE883','#BAB86C','#FDFC74','#87A96B','#1DF914','#76FF7A','#6DAE81','#1CAC78','#178086','#FFFFFF','#CFCFCF','#ABABAB','#838485','#494A4A','#000000','#CB4154','#FF9BAA','#EF98AA','#EE204D','#EE204D','#FC89AC','#FF1DCE','#C364C5','#9D81BA','#7366BD','#5D76CB','#1F75FE'];

paletteGrid();