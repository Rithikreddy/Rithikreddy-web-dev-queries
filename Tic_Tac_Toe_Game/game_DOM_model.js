console.log('Script Connected Succesfully');

// Similar to an array but not an array
var squares = document.querySelectorAll('td')

var resume = document.querySelector("#b");

function clear() {

// Here Squares.length is not a function
// Be careful It's textContent not textContext
  for(var i=0;i<squares.length;i++)
  {
      //console.log(squares[i].textContent);
      squares[i].textContent='';
  }

  console.log("Cleared Succesfully");

}

function play()
{
    //Remember for equality we use === in java script
    if(this.textContent === '')
    {
      this.textContent = 'X';
    }
    else if (this.textContent === 'X') {
        this.textContent='O';
    }
    else {
      this.textContent = '';
    }
}

resume.addEventListener('click',clear);

for(var i=0;i<squares.length;i++)
{
  squares[i].addEventListener('click',play);
}
