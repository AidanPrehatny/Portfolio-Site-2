// import React, { Component } from 'react';
//
//
//
// class Concentration extends Component {
//
//
//   componentDidMount () {
//     shuffleDeck();
//     gucci2()
//     const script = document.createElement("script");
//
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js";
//     script.async = true;
//
//     document.body.appendChild(script);
//   }
//
//    assigning = document.getElementsByClassName('assign');
//    numofMoves = 0; //keeps track of how many clicks on a panel
//    moveDiv = document.getElementById('moves'); // for numofMoves
//
//    headingItems = document.querySelector('#starsnmoves');
//    n = 2; // keeps track of which event phase the function prada3 is on
//    firstClick; //firstClick's event target information needs to change dynamically
//    secondClick; //secondClick same as firstClick
//    replayBtn = document.querySelector('#replay');
//    star3 = document.getElementById('innerStar2'); // rightmost star
//    star2 = document.getElementById('innerStar1'); // middle star
//    success = 0; // tracks how many classes dont contain grey
//    animFirst; // this will add the animated class from animated.css plugin to the firstClick event.target.classList
//    flipFirst; // this will add the flip to firstClick
//    animSecond; // this will add the animated class from animated.css plugin to the SecondClick event.target.classList
//    flipSecond; // this swill add the flip to secondClick
//    seconds = 0;
//    minutes = 0;
//    hours = 0;
//    isClicked = false; // starts the timer
//    node;
//    nIntervId; // this will stop the timer when you win
//    // gameBoard = document.querySelector('.gameboard'); // for prada3 function
//
//       // This will make it so if two pairs of images are out on the field, there classes will add grey back to them if replay is clicked
//        checkGrey() {
//         node.remove();
//         clearInterval(nIntervId);
//         isClicked = false;
//         seconds = 0;
//         minutes = 0;
//         hours = 0;
//         createTimer();
//         gucci5('Concentration!', '4.8em');
//         n=2;
//         for (let z=1;z < 17; z++) {
//           let imgNum = document.getElementById('img' + [z]);
//           if (imgNum.classList.contains('grey') === false) {
//             imgNum.classList.add('grey');
//             imgNum.classList.remove('animated');
//             imgNum.classList.remove('rubberBand');
//           }
//         }
//       }
//       // Function to check if two images match
//        prada3(event){
//         starRating();
//         if (event.target.classList.contains('grey') === false) {
//           return // prevents an image from being clicked if the two cards matched
//         }
//         if (n === 0) {
//           return //prevents anything fromt happening while 2 images are checking for match
//         }
//         if (n === 2) {
//           firstClick = event.target;
//           firstClick.classList.remove('grey'); //removes grey from first image clicked and saves its data
//           n--;
//           animFirst=firstClick.classList;
//           flipFirst = firstClick.classList;
//           animFirst.add('animated');
//           flipFirst.add('flipInY');
//         }
//
//         else if (n === 1) {
//           secondClick = event.target;
//           animSecond = secondClick.classList;
//           flipSecond = secondClick.classList;
//           secondClick.classList.remove('grey'); //second click data and removes the grey from it
//           n = 0;
//           if (event.target.src === firstClick.src) {
//             success++;
//             addMove();
//             n = 2; // if they are equal they stay open and next two cards are ready to be clicked
//             setTimeout(youWin, 600)
//             flipFirst.remove('flipInY');
//             animFirst.add('animated');
//             flipFirst.add('rubberBand');
//             animSecond.add('animated');
//             flipSecond.add('rubberBand');
//           }
//           else {
//             flipFirst.remove('flipInY');
//             flipFirst.add('wobble');
//             animSecond.add('animated');
//             flipSecond.add('wobble');
//             function ClickDelay() { //will show you that they dont match and then add back the grey foreground
//               firstClick.classList.add('grey');
//               secondClick.classList.add('grey');
//               animFirst.remove('animated');
//               flipFirst.remove('flipInY');
//               flipFirst.remove('wobble')
//               animSecond.remove('animated');
//               flipSecond.remove('wobble');
//               n = 2;
//               addMove();
//             }
//             setTimeout(ClickDelay, 800); // slight delay will show you that the images arent matching
//           }
//         }
//       }
//
//    gucci2() {
//     gucci5('Concentration!', '4.8em');
//     createTimer();
//   }
//
//    gucci6(){replayBtn.classList.remove('rotateIn');} //delays the removal so animation can complete
//    gucci5(logoTitle, sizing) { //Plays out animated header with whateevr font size is input
//     let o = document.getElementById("logo").querySelectorAll("text");
//     if (o.length > 0) {
//       o[0].remove();
//     }
//     let l = Snap('#logo'); //uses snap.svg to generate a snap on logo id
//     setTimeout( function() {
//       //let logoTitle = 'Concentration!';
//       let logoRandom = '';
//       let logoTitleContainer = l.text(0, '75%', );
//       let possible = "-+/|}-_(*&^%$#){[]~\\\":;?^%$#){[]/.*><=+@!)}";
//       logoTitleContainer.attr({
//         fontSize: sizing,
//         fontFamily: 'Dosis',
//         fontWeight: '600'
//       });
//
//        function generateRandomTitle(i, logoRandom) {
//         setTimeout( function() {
//           logoTitleContainer.attr({ text: logoRandom });
//         }, i*70 );
//       }
//
//       for( let i=0; i < logoTitle.length+1; i++ ) { // nested for loop to randomly select digits which change before concentration text
//         logoRandom = logoTitle.substr(0, i);
//         for( let j=i; j < logoTitle.length; j++ ) {
//           logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
//         }
//         generateRandomTitle(i, logoRandom);
//         logoRandom = '';
//       }
//     }, 500 );
//   }
//
//
//
//       // the game randomly shuffles the cards
//        shuffleDeck() {
//         // continue this until no more potential images
//         let i = 0;
//         // the potential images
//         let images = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
//         while (images.length > 0) {
//           // get a random index from the images array
//           let index = Math.floor(Math.random() * images.length);
//           //assign that image to assigning array(images all numbered number1-8)
//           assigning[i].src = 'images/number' + images[index] + '.gif';
//           // remove that index from the array
//           images.splice(index,1);
//           i++;
//         }
//         numofMoves = -1;
//         addMove();
//         star3.style.fill = "#333";
//         star2.style.fill = "#333";
//         document.gameboard.style.display = "grid";
//         success=0;
//         star3.classList.remove('bounceOut');
//         star2.classList.remove('bounceOut');
//         setTimeout(gucci6, 800);
//       }
//
//
//
//       //  which keeps track of the number of clicks the player has made
//        addMove() {
//         numofMoves++;
//         moveDiv.innerHTML = numofMoves + " Moves";
//       }
//        starRating() {
//         if (numofMoves === 15) {
//           star3.classList.add('bounceOut');
//         }
//         else if (numofMoves === 20) {
//           star2.classList.add('bounceOut');
//         }
//         else if (numofMoves > 25) {
//           star1.classList.add('bounceOut');
//         }
//       }
//
//        youWin(){
//         if (success === 8){ // This will mark the completion of the game
//           clearInterval(nIntervId);
//           isClicked = false;
//           gameboard.style.display = "none";
//           gucci5('Congratulations!','4.3em');
//         }
//       }
//
//
//
//           gucci6(){
//           document.querySelector('.gameboard').addEventListener('click', prada3);
//         } //take the above  and apply it to happen when a click is done
//           replayBtn.addEventListener('click', function(){
//             replayBtn.classList.add('rotateIn');
//           })
//           replayBtn.addEventListener('click', shuffleDeck); // replay button shuffles the deck
//
//            createTimer() {
//             node = document.createElement('h2');
//             node.setAttribute("id", "timer");
//             node.classList.add('animated');
//             node.classList.add('fadeIn');
//             headingItems.appendChild(node);
//             node.textContent = 'Time elapsed: ' + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
//           }
//
//            add() { // add the amount of time
//             seconds++;
//             if (seconds >= 60) {
//               seconds = 0;
//               minutes++;
//               if (minutes >= 60) {
//                 minutes = 0;
//                 hours++;
//               }
//             }
//             node.textContent = 'Time elapsed: ' + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
//           }
//
//           Array.from(assigning).forEach((element) {
//             element.addEventListener('click', () {
//               if (isClicked === false) {
//                 isClicked = true;
//                 nIntervId = setInterval(function timer() {
//                   add();
//                 }, 1000);
//               }
//             });
//           });
//
//   render() {
//
//
//
//
//     return(
//       <main id='bigBoy'>
//         <header id="header">
//           <div id="container">
//             <svg xmlns="http://www.w3.org/2000/svg" id="logo">
//             <path fill="none" d=""/>
//           </svg>
//           <div id="starsnmoves" class="animated fadeIn">
//             <svg style={{fill:'#222'}} id="star1" width="1.3em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.46 110.34">
//             <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon id="innerStar" class="cls-1 animated" points="57.07 86.53 26.47 102.05 32.77 68.32 8.55 44.01 42.58 39.58 58.22 9.04 72.95 40.03 106.83 45.47 81.9 69.05 87.2 102.95 57.07 86.53"/><path d="M58.09,18.07,68.43,39.85l1.81,3.79,4.15.67,23.8,3.82L80.68,64.7l-3.05,2.89.65,4.15L82,95.56,60.83,84l-3.69-2-3.75,1.9-21.5,10.9,4.42-23.7L37.08,67l-3-3-17-17.08L41,43.82l4.17-.55,1.92-3.74,11-21.46M58.35,0,40,35.88,0,41.09,28.45,69.65l-7.4,39.63L57,91.05l35.41,19.29L86.18,70.51,115.46,42.8l-39.8-6.39L58.35,0Z"/></g></g></svg>
//             <svg style={{fill:'#222'}} id="star2" width="1.3em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.46 110.34">
//             <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-3" data-name="Layer 1"><polygon id="innerStar1" class="cls-1 animated" points="57.07 86.53 26.47 102.05 32.77 68.32 8.55 44.01 42.58 39.58 58.22 9.04 72.95 40.03 106.83 45.47 81.9 69.05 87.2 102.95 57.07 86.53"/><path d="M58.09,18.07,68.43,39.85l1.81,3.79,4.15.67,23.8,3.82L80.68,64.7l-3.05,2.89.65,4.15L82,95.56,60.83,84l-3.69-2-3.75,1.9-21.5,10.9,4.42-23.7L37.08,67l-3-3-17-17.08L41,43.82l4.17-.55,1.92-3.74,11-21.46M58.35,0,40,35.88,0,41.09,28.45,69.65l-7.4,39.63L57,91.05l35.41,19.29L86.18,70.51,115.46,42.8l-39.8-6.39L58.35,0Z"/></g></g></svg>
//             <svg style={{fill:'#222'}} id="star3" width="1.3em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.46 110.34">
//             <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-4" data-name="Layer 1"><polygon id="innerStar2" class="cls-1 animated" points="57.07 86.53 26.47 102.05 32.77 68.32 8.55 44.01 42.58 39.58 58.22 9.04 72.95 40.03 106.83 45.47 81.9 69.05 87.2 102.95 57.07 86.53"/><path d="M58.09,18.07,68.43,39.85l1.81,3.79,4.15.67,23.8,3.82L80.68,64.7l-3.05,2.89.65,4.15L82,95.56,60.83,84l-3.69-2-3.75,1.9-21.5,10.9,4.42-23.7L37.08,67l-3-3-17-17.08L41,43.82l4.17-.55,1.92-3.74,11-21.46M58.35,0,40,35.88,0,41.09,28.45,69.65l-7.4,39.63L57,91.05l35.41,19.29L86.18,70.51,115.46,42.8l-39.8-6.39L58.35,0Z"/></g></g></svg>
//             <div id="moves">0 Moves</div>
//             <a onclick="checkGrey()" id="replay" class="animated"> </a>
//           </div>
//           </div>
//         </header>
//
//         <div>
//           <div id="gameboard" class="gameboard">
//             <img id="img1" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img2" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img3" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img4" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img5" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img6" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img7" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img8" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img9" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img10" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img11" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img12" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img13" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img14" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img15" src="" alt="" class="assign grid-item grey"></img>
//             <img id="img16" src="" alt="" class="assign grid-item grey"></img>
//           </div>
//         </div>
//
//     </main>
//     )
//   }
// }
