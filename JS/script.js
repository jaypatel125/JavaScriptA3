//Author: Jay Patel, 000881881
let intervalId = null;
let totalImagesDisplayed = 3;
let count = -3; // for counts - how many times images has been changed

// to saparate themes of pictures 
var cartoon = [
  ["./images/1.png", "./images/2.png", "./images/3.png", "./images/12.png"],
  ["./images/4.png", "./images/5.png", "./images/6.png", "./images/11.png"],
  ["./images/7.png", "./images/8.png", "./images/9.png", "./images/10.png"]
];

// To choose random image from array for each theme
function onloadFun() {
  var theme1 = Math.floor(Math.random() * 4);
  var theme2 = Math.floor(Math.random() * 4);
  var theme3 = Math.floor(Math.random() * 4);

  var image1 = cartoon[0][theme1];
  var image2 = cartoon[1][theme2];
  var image3 = cartoon[2][theme3];

  var images = document.querySelectorAll('img');


  // for animation
 /*  function do_animation( event ) { 
    //console.log("Animation!!")
    target = event.srcElement; 
    target.classList.remove('spin'); 
    setTimeout( () => {target.classList.add('spin');}, 0 );  
} */
 
// 
  for (let i = 0; i < images.length; i++) {
    switch (i) {
      case 0:
        images[i].src = image1;
        images[i].addEventListener('click', randomizeImage1);
       
        break;
      case 1:
        images[i].src = image2;
        images[i].addEventListener('click', randomizeImage2);
       
        break;
      case 2:
        images[i].src = image3;
        images[i].addEventListener('click', randomizeImage3);
       
        break;
        
      default:
        break;
    }
    
  }

  count = count + 3;
  document.getElementById('imagecount').textContent = count;
}

// to randomize 1st image
function randomizeImage1(){
  var theme1 = Math.floor(Math.random() * 4);
  var image1 = cartoon[0][theme1];
  var images = document.querySelectorAll('img');
  images[0].src = image1;
  count++;
  document.getElementById('imagecount').textContent = count;
  startTimer(); // resets timer
  images[0].classList.add('spin'); // to add animation for 1st image
  setTimeout(() => {
    images[0].classList.remove('spin'); // to remove animaton after some time
  }, 1000);
}

// to randomize 2nd image
function randomizeImage2(){
  var theme2 = Math.floor(Math.random() * 4);
  var image2 = cartoon[1][theme2];
  var images = document.querySelectorAll('img');
  images[1].src = image2;
  count++;
  document.getElementById('imagecount').textContent = count;
  startTimer();
  images[1].classList.add('spin');  // to add animation for 2nd image
  setTimeout(() => {
    images[1].classList.remove('spin'); // removes animation after few time
  }, 1000); 
}

// to randomize 3rd image
function randomizeImage3(){
  var theme3 = Math.floor(Math.random() * 4);
  var image3 = cartoon[2][theme3];
  var images = document.querySelectorAll('img');
  images[2].src = image3;
  count++;
  document.getElementById('imagecount').textContent = count;
  startTimer();
  images[2].classList.add('spin'); // to add animation for 3rd image
  setTimeout(() => {
    images[2].classList.remove('spin'); // to remove added animation
  }, 1000);
}

// to randomize all images at same time
function randomizeImages() {
  onloadFun(); 
  startTimer();
}

// for setting time period and displaying remaining time on window
function startTimer() {
  const durationInput = document.getElementById("duration-input");
  const duration = durationInput.value * 1000; // convert to milliseconds
  
  let timeLeft = duration / 100; // in tenths of a second
  let timerDiv = document.getElementById('timer');
  
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      randomizeImages();
      timeLeft = duration / 100;
    }
    
    // shows remaining time on window
    let secondsLeft = (timeLeft / 10);
    timerDiv.textContent = `${secondsLeft}`;
    
  // to change color of context
  if (secondsLeft <= 8){
    timerDiv.style.color = "green";
      if (secondsLeft <= 6) {
        timerDiv.style.color = "purple";
        if (secondsLeft <= 4) {
          timerDiv.style.color = "orange";}
          if (secondsLeft <= 2) {
            timerDiv.style.color = "red";}}}

    else{timerDiv.style.color = "blue";}
  }, 100);
}