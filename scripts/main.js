/*
var myHeading = document.querySelector('h1');
myHeading.textContent ='Hello World!';
*/
var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc ==="images/b5tv5suj31h.jpg"){
        myImage.setAttribute('src','images/fjmjgpsasf1.jpg');
    }
    else{
        myImage.setAttribute('src','images/b5tv5suj31h.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }