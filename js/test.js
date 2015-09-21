function pixelPainter(width, height) {
  this.rows = height;
  this.cols = width;
  this.grid = document.createElement('table');
  this.grid.id = 'grid';
  // this.mouse = _mouse;

  //takes in properties of width and height to make matrix grid
  for(var i = 0; i < rows; i++) {
    var row = document.createElement('tr');
        row.className = 'row1';

    for(var j = 0; j < cols; j++) {
      var pix = this.pixelFactory;
      row.appendChild(pix);
    }
    grid.appendChild(row);
}

  // return {
  //   _mouse: false,
  // },
//appends our matrix to the body of HTML
document.body.appendChild(grid);
console.log(document.body.appendChild(grid));
}

pixelPainter.prototype.pixelFactory = function() {
  var pixelMake = document.createElement('td');
this.className = 'col1';
this.style.background = "#ffffff";
this.style.width = '5px';
this.style.height = '5px';
this.addEventListener('click', this.changeColor);
this.addEventListener('mouseover', this.dragColor);
return pixelMake;
};

pixelPainter.prototype.changeColor = function() {
  this.style.background = selectedColor;
  console.log(this.style.background);
};

pixelPainter.prototype.mouse = function() {
  document.body.onmousedown = function () {
    mouseDown = true;
  };
  document.body.onmouseup = function() {
    mouseDown = false;
  };
};

pixelPainter.prototype.dragColor = function() {
  if(mouseDown) {
  this.style.background = selectedColor;
  }
};

pixelPainter(50,50);