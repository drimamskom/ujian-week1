//isikan nilai drawThreeColsBox(), dengan angka

function drawThreeColsBox(height){
  var string = '';
  for(var i = 1; i <= height*3; i++){
    string += i + ' ';
    if(i % 3 === 0){
      console.log(string);
      string = '';
    }
  }
}

drawThreeColsBox(3);