
//set this. pixel color to palette color 'purple'
function changeColor() {
  this.style.background = selectedColor;
  console.log(this.style.background);
}

//create a div pixel when invoked
//pixel will have background color property - default white
//will have a height and width property
//addEventListener property ('click', changeColor())
function pixelFactory() {
var pixelMake = document.createElement('td');
pixelMake.style.background = "#ffffff";
pixelMake.style.width = '40px';
pixelMake.style.height = '40px';
pixelMake.addEventListener('click',changeColor);
return pixelMake;
}