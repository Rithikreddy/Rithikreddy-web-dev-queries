console.log("Connected Succesfully");

//Remember the command in $ for finding the table
var table = $('table tr');

//Blue's rgb color code
var player1 = prompt("Player1 enter your name");

// While Assinging rgb has to be declared in codes unlike in css where it is not declared in codes''

var player1color = 'rgb(0, 0, 255)';
// Red's rgb color code
var player2 = prompt("Player2 enter your name");

var player2color = 'rgb(255, 0, 0)';

function changeColor(rowIndex,coloumnIndex,color)
{
  return table.eq(rowIndex).find('td').eq(coloumnIndex).find('button').css('background-color',color);
}

function returnColor(rowIndex,coloumnIndex) {
  //Be  careful about finding a style Below code is checked from the Stack-Overflow.
  // eq is used for indexing
  return table.eq(rowIndex).find('td').eq(coloumnIndex).find('button').css('background-color');

}

function findrowno(coloumnIndex){
    //console.log("coloumnIndex is ",coloumnIndex);
    //var colorReport = returnColor(5,coloumnIndex);
    for(var row=5;row>-1;row--)
    {
      //colorReport=returnColor(row,coloumnIndex);
      // Remember spaces between the 128's is compulsory
      if(returnColor(row,coloumnIndex) === 'rgb(128, 128, 128)')
      {
        //Happily , can be used similar to python
        console.log("row no is ",row);
        return row
      }
    }
    console.log("Not returned Immediately");
}

function colormatchcheck(one,two,three,four)
{
  //Be careful with the === in Javascript
    return(one===two&&one===three&&one===four&&one!== 'rgb(128, 128, 128)'&&one!==undefined);
}

function rowcheck()
{
    for(var i=0;i<6;i++)
    {
        for(var j=0;j<4;j++)
        {
            if(colormatchcheck(returnColor(i,j),returnColor(i,j+1),returnColor(i,j+2),returnColor(i,j+3)))
            return true;
        }
    }
}

function coloumncheck() {
  for(var i=0;i<7;i++)
  {
      for(var j=0;j<3;j++)
      {
          if(colormatchcheck(returnColor(i,j),returnColor(i+1,j),returnColor(i+2,j),returnColor(i+3,j)))
          return true;
          else {
            continue;
          }
      }
  }
}

var currentplayer=1;
var currentplayername=player1;
var currentplayercolor=player1color;

$('h3').text(currentplayername +" It's your turn ");

// Here board is the class name which we declared in the html file and on function is an event in the JQuery.
//For more details check the website
//So on a click This Function is executed

$('.board button').on('click',function(){

  //Here $(this) is used to represent the object because of which the present function is called

  // The closest and the index details check in stackoverflow

  //In Jquery Generally tag is passed inside

  var colIndex=$(this).closest('td').index();

  console.log(colIndex);

  var rowno = findrowno(colIndex);

  console.log(rowno);

  changeColor(rowno,colIndex,currentplayercolor);

  console.log("Entered the function Succesfully");
  
  if(rowcheck()||coloumncheck())
  {
      $('h1').text("Congratulations "+ currentplayername+" you have won the game!");
      //It immediately Fades out the h3 and h2 tags
      //in fadeOut function O is capital!!!
      //For more details Check stackoverflow
      $('h3').fadeOut('fast');
      $('h2').fadeOut('fast');
  }
  else
  {
    currentplayer=(currentplayer+1)%2;
    if(currentplayer===1)
    {
      currentplayername=player1;
      currentplayercolor=player1color;
    }
    else
    {
      currentplayername=player2;
      currentplayercolor=player2color;
    }

    $('h3').text(currentplayername +" It's your turn ");
  }
})
