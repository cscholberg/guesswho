	//creating player objects
	var x1 = {
		hair: "Y",
		sex: "M",
		eyes: "G",
		glasses: "Y",
		hat: "Y"
	}


	var x26 = {
		hair: "B",
		sex: "M",
		eyes: "G",
		glasses: "Y",
		hat: "N"
	}
 

	var x11 = {
		hair: "Y",
		sex: "M",
		eyes: "C",
		glasses: "N",
		hat: "Y"
	}


	var x31 = {
		hair: "B",
		sex: "M",
		eyes: "B",
		glasses: "N",
		hat: "Y"
	}


	var x6 = {
		hair: "Y",
		sex: "M",
		eyes: "B",
		glasses: "Y",
		hat: "N"
	}


	var x36 = {
		hair: "B",
		sex: "M",
		eyes: "C",
		glasses: "N",
		hat: "N"
	}


	var x15 = {
		hair: "Y",
		sex: "F",
		eyes: "G",
		glasses: "N",
		hat: "Y"
	}


	var x20 = {
		hair: "Y",
		sex: "F",
		eyes: "B",
		glasses: "N",
		hat: "N"
	}


	var x33 = {
		hair: "B",
		sex: "M",
		eyes: "C",
		glasses: "Y",
		hat: "Y"
	}


	var x23 = {
		hair: "Y",
		sex: "F",
		eyes: "C",
		glasses: "N",
		hat: "Y"
	}


	var x34 = {
		hair: "B",
		sex: "M",
		eyes: "C",
		glasses: "Y",
		hat: "N"
	}


	var x35 = {
		hair: "B",
		sex: "M",
		eyes: "C",
		glasses: "N",
		hat: "Y"
	}


	var x30 = {
		hair: "B",
		sex: "M",
		eyes: "B",
		glasses: "Y",
		hat: "N"
	}


	var x9 = {
		hair: "Y",
		sex: "M",
		eyes: "C",
		glasses: "Y",
		hat: "Y"
	}


	var x21 = {
		hair: "Y",
		sex: "F",
		eyes: "C",
		glasses: "Y",
		hat: "Y"
	}


	var x28 = {
		hair: "B",
		sex: "M",
		eyes: "G",
		glasses: "N",
		hat: "N"
	}


	var x4 = {
		hair: "Y",
		sex: "M",
		eyes: "G",
		glasses: "N",
		hat: "N"
	}


	var x8 = {
		hair: "Y",
		sex: "M",
		eyes: "B",
		glasses: "N",
		hat: "N"
	}

	var tempObj = {
		hair: "",
		sex: "",
		eyes: "",
		glasses: "",
		hat: ""
	}

	//declaring boolean to check 
	//if card has been drawn to start game
	var start = false;
	var comp = " ";

$(document).ready(function(){
	var end = false;

	//draw card button at start of game
	$("#player").on("click", "button", function(){
		start = true;
		var playerDiv = $(this).closest("#player");
		$(this).remove();
		var replaceDraw = $("<p><strong>YOUR CHARACTER</strong></p>");
		playerDiv.append(replaceDraw);
		playerDiv.find("img").remove();
		var player = playerChar();
		playerDiv.prepend(player);
		comp = compChar();

	});



	//declaring the object to be used 
	//to compare with computer's character
	var tempObj = {
		hair: "",
		sex: "",
		eyes: "",
		glasses: "",
		hat: ""
	}


	//setting the object above to user's 
	//choice and clearing old choices
	$("#zero").on("click", function(){
		tempObj = {
		hair: "R",
		sex: "",
		eyes: "",
		glasses: "",
		hat: ""
		}
	});

	$("#one").on("click", function(){
		tempObj = {
		hair: "Y",
		sex: "",
		eyes: "",
		glasses: "",
		hat: ""
		}
	});

	$("#two").on("click", function(){
		tempObj = {
		hair: "B",
		sex: "",
		eyes: "",
		glasses: "",
		hat: ""
		}
	});

	$("#three").on("click", function(){
		tempObj = {
		hair: "",
		sex: "M",
		eyes: "",
		glasses: "",
		hat: ""
		}
	});

	$("#four").on("click", function(){
		tempObj = {
		hair: "",
		sex: "F",
		eyes: "",
		glasses: "",
		hat: ""
		}
	});

	$("#five").on("click", function(){
		tempObj = {
		hair: "",
		sex: "",
		eyes: "G",
		glasses: "",
		hat: ""	
		}
	});

	$("#six").on("click", function(){
		tempObj = {
		hair: "",
		sex: "",
		eyes: "B",
		glasses: "",
		hat: ""
		}
	});

	$("#seven").on("click", function(){
		tempObj = {
		hair: "",
		sex: "",
		eyes: "C",
		glasses: "",
		hat: ""
		}
	});

	$("#eight").on("click", function(){
		tempObj = {
		hair: "",
		sex: "",
		eyes: "",
		glasses: "Y",
		hat: ""
		}
	});

	$("#nine").on("click", function(){
		tempObj = {
		hair: "",
		sex: "",
		eyes: "",
		glasses: "N",
		hat: ""
		}
	});

	$("#ten").on("click", function(){
		tempObj = {
		hair: "",
		sex: "",
		eyes: "",
		glasses: "",
		hat: "Y"
		}
	});

	$("#eleven").on("click", function(){
		tempObj = {
		hair: "",
		sex: "",
		eyes: "",
		glasses: "",
		hat: "N"
		}
	});

	//change background color after click to red on the clicked button for all attribute buttons
	//and add attribute to the question to the computer
	$(".attributes").on("click", function(){
		$(".attributes").css({"background-color": "blue"});
		$(this).css({"background-color": "red"});
		var attribute = $(this).find("p").text() + "?";
		var attrHTML = $("<p align='center' id='tempAttr'>" + attribute + "</p>");
		$("#tempAttr").remove();
		$("#questionField").append(attrHTML);
	});


	//checking game has started and attribute has been selected
	$("#continue").on("click", function(){
		if(start == false){
			alert("Please draw a card to start playing!");
		} else {
			if(tempObj.hair == "" && tempObj.sex == "" && tempObj.eyes == "" && tempObj.glasses == "" && tempObj.hat == ""){
				alert("Please select an attribute to the left before hitting 'CONTINUE...'");
			} else {
				
			}

		} //end if/else statement
	}); //end comparing guessed attributes on click function

	
	function compare(attr){


	};




	//setting the name after SUBMIT NAME is clicked
	var nameGuess = document.forms["username"]["input"].value;

	//check to see if guess is correct

	/*
	if(nameGuess == comp){
		alert("Congratulations! You win the game!");
		end = true;
	} else {
		alert("You lose!");
	} //end if/else statement
*/
}); //end document ready function

//function to generate player character
function playerChar(){
	var num = Math.floor(Math.random() * ((18-1)+1) + 1);
	var result = ""; //player's character

	//setting player's character
	if(num == 1){
		result = $("<img src='1 - YMGYY.jpg'/>");
		playerObj = x1;
	}
	if(num == 2){
		result = $("<img src='26 - BMGYN.jpg'/>");
		playerObj = x26;
	}
	if(num == 3){
		result = $("<img src='11 - YMCNY.jpg'/>");
		playerObj = x11;
	}
	if(num == 4){
		result = $("<img src='31 - BMBNY.jpg'/>");
		playerObj = x31;
	}
	if(num == 5){
		result = $("<img src='6 - YMBYN.jpg'/>");
		playerObj = x6;
	}
	if(num == 6){
		result = $("<img src='36 - BMCNN.jpg'/>");
		playerObj = x36;
	}
	if(num == 7){
		result = $("<img src='15 - YFGNY.jpg'/>");
		playerObj = x15;
	}
	if(num == 8){
		result = $("<img src='20 - YFBNN.jpg'/>");
		playerObj = x20;
	}
	if(num == 9){
		result = $("<img src='33 - BMCYY.jpg'/>");
		playerObj = x33;
	}
	if(num == 10){
		result = $("<img src='23 - YFCNY.jpg'/>");
		playerObj = x23;
	}
	if(num == 11){
		result = $("<img src='34 - BMCYN.jpg'/>");
		playerObj = x34;
	}
	if(num == 12){
		result = $("<img src='35 - BMCNY.jpg'/>");
		playerObj = x35;
	}
	if(num == 13){
		result = $("<img src='30 - BMBYN.jpg'/>");
		playerObj = x30;
	}
	if(num == 14){
		result = $("<img src='9 - YMCYY.jpg'/>");
		playerObj = x9;
	}
	if(num == 15){
		result = $("<img src='21 - YFCYY.jpg'/>");
		playerObj = x21;
	}
	if(num == 16){
		result = $("<img src='28 - BMGNN.jpg'/>");
		playerObj = x28;
	}
	if(num == 17){
		result = $("<img src='4 - YMGNN.jpg'/>");
		playerObj = x4;
	}
	if(num == 18){
		result = $("<img src='8 - YMBNN.jpg'/>");
		playerObj = x8;
	}

	return result;
};

//function to generate computer's character
function compChar() {
	var num2 = Math.floor(Math.random() * ((18-1)+1) + 1);
	var resultAI = ""; //computer's character

	//setting computer's character
	if(num2 == 1){
		resultAI = $("<img src='1 - YMGYY.jpg'/>");
		compObj = x1;
	}
	if(num2 == 2){
		resultAI = $("<img src='26 - BMGYN.jpg'/>");
		compObj = x26;
	}
	if(num2 == 3){
		resultAI = $("<img src='11 - YMCNY.jpg'/>");
		compObj = x11;
	}
	if(num2 == 4){
		resultAI = $("<img src='31 - BMBNY.jpg'/>");
		compObj = x31;
	}
	if(num2 == 5){
		resultAI = $("<img src='6 - YMBYN.jpg'/>");
		compObj = x6;
	}
	if(num2 == 6){
		resultAI = $("<img src='36 - BMCNN.jpg'/>");
		compObj = x36;
	}
	if(num2 == 7){
		resultAI = $("<img src='15 - YFGNY.jpg'/>");
		compObj = x15;
	}
	if(num2 == 8){
		resultAI = $("<img src='20 - YFBNN.jpg'/>");
		compObj = x20;
	}
	if(num2 == 9){
		resultAI = $("<img src='33 - BMCYY.jpg'/>");
		compObj = x33;
	}
	if(num2 == 10){
		resultAI = $("<img src='23 - YFCNY.jpg'/>");
		compObj = x23;
	}
	if(num2 == 11){
		resultAI = $("<img src='34 - BMCYN.jpg'/>");
		compObj = x34;
	}
	if(num2 == 12){
		resultAI = $("<img src='35 - BMCNY.jpg'/>");
		compObj = x35;
	}
	if(num2 == 13){
		resultAI = $("<img src='30 - BMBYN.jpg'/>");
		compObj = x30;
	}
	if(num2 == 14){
		resultAI = $("<img src='9 - YMCYY.jpg'/>");
		compObj = x9;
	}
	if(num2 == 15){
		resultAI = $("<img src='21 - YFCYY.jpg'/>");
		compObj = x21;
	}
	if(num2 == 16){
		resultAI = $("<img src='28 - BMGNN.jpg'/>");
		compObj = x28;
	}
	if(num2 == 17){
		resultAI = $("<img src='4 - YMGNN.jpg'/>");
		compObj = x4;
	}
	if(num2 == 18){
		resultAI = $("<img src='8 - YMBNN.jpg'/>");
		compObj = x8;
	}

	return resultAI;	
};
	
	
	
	
	
	
	
	
	
	
	
	
	

