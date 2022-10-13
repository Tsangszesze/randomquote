document.getElementById('new-quote').addEventListener('click', update)

function update(){
  changeColor();
  changeQuote()
}

function changeQuote(){
fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random()*(data.length));
    const selectedObj = data[randomIndex];
    document.getElementById('quoteApiText').innerHTML = selectedObj.text;
    if(!selectedObj.author){
      document.getElementById('quoteApiAuthor').innerHTML = Unknown;
    } else {
      document.getElementById('quoteApiAuthor').innerHTML = selectedObj.author;
    };
  })
}

function changeColor(){
  const randomIndex = function(){return Math.floor(Math.random()*(150+1)+50)};
  const newColor = "rgba(" + randomIndex() + "," + randomIndex() + "," + randomIndex() + ")";
  //Or we can list all color we want as an array, colors
  //const randomIndex = Math.floor(Math.random()*(colors.length));
  //const newColor = colors[randomIndex];
  let list = document.getElementsByClassName('whiteFont');
  let element;
  for (let i = 0; i<list.length; i++){
    element = list[i].id;
    document.getElementById(element).style.backgroundColor = newColor;
    element = '';
  }
  document.getElementById('mainContent').style.color = newColor;
}
