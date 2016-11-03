//Declare the Color Object with our new keyword below here.
const color = newObject();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[0] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[0] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  var red = rgb[0] / 255;

};

//greenIntensity
color.greenIntensity = function(rgb){
  var green = rgb[1] / 255;
};

//blueIntensity
color.blueIntensity = function(rgb){
  var blue = rgb[1] / 255;

};

//brightness
color.redBrightness = function(rgb){
  var red = rgb[0] / 255;
};



//complement
