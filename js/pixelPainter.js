function paintingForFun() {

  var module = {
    init : _init
  };

  var mouseDown = false;
  var selectedColor = '#000000';


  function _init(rows, cols) {
    this.paletteGrid = _paletteGrid();
    this.gridMaker = _gridMaker(rows, cols);
    console.log(this.gridMaker);

    //if our mouse is clicked down - it is true
    document.body.onmousedown = function () {
      mouseDown = true;
    };

    //if our mouse is not clicked down = set false
    document.body.onmouseup = function() {
      mouseDown = false;
    };
  }

  // Global array that stores an array of colors saved from picture created on grid
  var storedArry = [];

  //creates our grid canvas
  function _gridMaker(rows, cols, optionArry) {
    this.rows = rows;
    this.cols = cols;
    var counter = 0;
    var row;
    var pix;
    var grid = document.createElement('table');
    grid.id = 'grid';

    //takes in properties of width and height to make matrix grid
    for(var i = 0; i < rows; i++) {
      row = document.createElement('tr');
      row.className = 'row1';
      for(var j = 0; j < cols; j++) {
        if(optionArry) {
        pix = gridPixelMaker(optionArry[counter]);
        counter ++;
        } else {
          pix = gridPixelMaker();
        }
        row.appendChild(pix);
      }
      grid.appendChild(row);
    }
    //appends our grid canvas to the body of HTML
    document.body.appendChild(grid);

    gridPixelMaker();
  }

  //creates each individual pixel object for our grid canvas
  function gridPixelMaker(colorIndex) {
    var pixelMake = document.createElement('td');
    pixelMake.className = 'col1';
    pixelMake.style.background = (colorIndex ? colorArry[colorIndex] : "#ffffff");
    pixelMake.dataset.index = (colorIndex ? colorIndex : colorArry.indexOf('#FFFFFF'));
    pixelMake.style.width = '10px';
    pixelMake.style.height = '10px';
    pixelMake.addEventListener('click',changeColor);
    pixelMake.addEventListener('mouseover', dragColor);
    return pixelMake;
  }

  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

      return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  }

  //create a change color funtional method
  function changeColor() {
    this.style.background = selectedColor;
    var hexColor = rgb2hex(this.style.background);
    this.dataset.index = colorArry.indexOf(hexColor.toUpperCase());
    console.log(this.style.background);
  }

  //create a mouse over function method
  function dragColor() {
    if(mouseDown) {
    this.style.background = selectedColor;
    var hexColor = rgb2hex(this.style.background);
    this.dataset.index = colorArry.indexOf(hexColor.toUpperCase());
  }
  }

  var colorArry = ['#CD4A4A','#CC6666','#BC5D58','#FD5E53','#FF7538','#9F8170','#FAA76C','#FF8D88','#FFCF48','#FCE883','#BAB86C','#FDFC74','#87A96B','#1DF914','#76FF7A','#6DAE81','#1CAC78','#178086', '#ADFF2F', '#32CD32', '#20B2AA', '#00FFFF', '#E0FFFF', '#00CED1', '#48D1CC', '#AFEEEE', '#4682B4', '#000080', '#00008B', '#4169E1', '#8A2BE2', '#4B0082', '#9400D3', '#DDA0DD', '#DA70D6', '#FF69B4', '#FFB6C1', '#FAEBD7', '#F5F5DC', '#FFEBCD', '#FAFAD2', '#8B4513', '#A0522D', '#D2691E', '#FFE4E1', '#FFF0F5', '#FAF0E6', '#FFEFD5', '#E6E6FA', '#F8F8FF', '#F0FFF0', '#FFFFF0','#FFFFFF','#CFCFCF','#ABABAB','#838485','#494A4A','#000000','#CB4154','#FF9BAA','#EF98AA','#EE204D','#EE204D','#FC89AC','#FF1DCE','#C364C5','#9D81BA','#7366BD','#5D76CB','#1F75FE'];

  //creates our grid palette
  function _paletteGrid() {
    var rows = 12;
    var cols = 5;
    var counter = 0;
    var row;
    var palettePx;
    var paletteDiv = document.createElement('table');
    paletteDiv.id = 'paletteDiv';


    for(var i = 0; i < rows; i++) {
      row = document.createElement('tr');
      row.className = 'row';
      for(var j = 0; j < cols; j++) {
        palettePx = palettePixelMaker(colorArry[counter]);
        row.appendChild(palettePx);
        counter ++;
      }
      paletteDiv.appendChild(row);
    }
    //appends our palette to the body of HTML
    document.body.appendChild(paletteDiv);

    createClearButton();
    createEraseButton();
    createSaveButton();
  }
  //creates each individual color object
  function palettePixelMaker(color) {
    var pixelColor = document.createElement('td');
    pixelColor.style.background = color;
    pixelColor.style.width = '20px';
    pixelColor.style.height = '20px';
    pixelColor.addEventListener('click', colorSelector);
    return pixelColor;
  }

  //selects a color and uses that color to iterate over objects
  function colorSelector() {
    selectedColor = this.style.background;
    console.log(selectedColor);
  }

  //creates a button to save the picture
  function createSaveButton() {
    var save = document.createElement('button');
    save.id = 'save';
    save.innerHTML = 'Save';
    save.style.background = 'white';
    save.style.width = '50px';
    save.style.height = '25px';
    save.addEventListener('click', savePicture);
    document.body.appendChild(save);
  }

  //breaks down the grid matrix into a single array with all cells and their current respected color
  function savePicture() {
    var curPic = document.getElementById('grid'); // Grid
    var rowPic = curPic.childNodes; // Each row
    var colorPic; // Each cell in each row
    var colorNode; //

    for(var i = 0; i < rowPic.length; i++) {
      colorPic = rowPic[i].childNodes;
      for(var j = 0; j < colorPic.length; j++) {
        colorNode = colorPic[j];
        storedArry.push(colorNode.dataset.index);
      }
    }
    console.log(storedArry);
  }

  function createLoadButton() {
    var load = document.createElement('button');
    load.id = 'load';
    load.innerHTML = 'Load';
    load.style.background = 'white';
    load.style.width = '50px';
    load.style.height = '25px';
    load.addEventListener('click', LoadPicture);
    document.body.appendChild(load);
  }

  function loadPicture() {

  }

  //creates our clear button and appends it to our html body
  function createClearButton() {
    var clearUm = document.createElement('button');
    clearUm.id = 'clear';
    clearUm.innerHTML = 'Clear';
    clearUm.style.background = 'white';
    clearUm.style.width = '50px';
    clearUm.style.height = '25px';
    clearUm.addEventListener('click', clearAll);
    document.body.appendChild(clearUm);
  }

  //invokes _paletteGrid function
  function clearAll() {
    document.body.removeChild(document.getElementById('grid'));
    // debugger;
    var newGrid = _gridMaker(rows, cols);
    // console.log('test', newGrid);
  }

  //creates our erase button and appends it to our html body
  function createEraseButton() {
    var eraser = document.createElement('button');
    eraser.id = 'eraser';
    eraser.innerHTML = "Erase";
    eraser.style.background = "white";
    eraser.style.width = '50px';
    eraser.style.height = '25px';
    eraser.addEventListener('click', eraseColor);
    document.body.appendChild(eraser);
  }

  //function set to white color
  function eraseColor() {
    selectedColor = "#ffffff";
    // console.log('testing',selectedColor);
  }

  // console.log(module);
  return module;

}