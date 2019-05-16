// all sqaures need to be same color once game is done 
// need to make all sqaures appear as correct color once win

//selecting 
var sqaures = document.querySelectorAll(".sqaure");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h11 = document.querySelector("h1");
var resetButton = document.getElementById("resetButton");
var easyBTN = document.querySelector("#easyBTN");
var hardBTN = document.querySelector("#hardBTN");
var loadButtons = document.querySelectorAll(".loadd");

//init
// var colors = [];
var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;



for(var i = 0; i < loadButtons.length; i++) {
	loadButtons[i].addEventListener("click", function() {
		loadButtons[0].classList.remove("selected");
		loadButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Easy" ?	numOfSquares = 3 : numOfSquares = 6;
		reset();
	});
}

function reset() {
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < sqaures.length; i++) {
		if(colors[i]){
			sqaures[i].style.display = "block";
			sqaures[i].style.backgroundColor = colors[i];
		} else {
			sqaures[i].style.display = "none";
		}
	}
	h11.style.backgroundColor = "steelblue";

}

for (var i = 0;i<sqaures.length;i++){
    //add inital colors to squares 
    sqaures[i].style.backgroundColor = colors[i];

    //add click event listener to squares 
    sqaures[i].addEventListener("click", function(){
        
        //grab color of clicked sqaure 
        var clickedColor = this.style.backgroundColor;
        //compare grabbedColor with pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
             changeColor(clickedColor);
            //loop to top work done here 
            h11.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again?"
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }



    });
}

function changeColor(clickedColor){

}

//easy button
// easyBTN.addEventListener("click", function(){
//     hardBTN.classList.remove("selected");
//     easyBTN.classList.add("selected");
//     numOfSquares =3;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < sqaures.length;i++){
//         if (colors[i]){
//             sqaures[i].style.backgroundColor = colors[i];

//         }else{
//             sqaures[i].style.display = "none";
//         }
//     }
// });

// //hard button
// hardBTN.addEventListener("click", function(){
//     hardBTN.classList.add("selected");
//     easyBTN.classList.remove("selected");  
//     numOfSquares=6;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < sqaures.length;i++){
        
//             sqaures[i].style.backgroundColor = colors[i];
//             sqaures[i].style.display = "block";
        
//     }
// });


//reset button
resetButton.addEventListener("click", function(){
    
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i<sqaures.length;i++){
        sqaures[i].style.backgroundColor = colors[i];
    }
    h11.style.backgroundColor = "steelblue"
});

//picking the answer & randomly indexing array 
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generating array by length to keep it dynamic > calls randomColor within
function generateRandomColors(numofArray){
    //make array 
    var arr = [];
    //repeat n times 
    for (var i = 0; i<numofArray;i++){
        arr.push(randomColor()); 
    }

    return arr;
}

//comes up with random numbers for r g b 
function randomColor(){

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}