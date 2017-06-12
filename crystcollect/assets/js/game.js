$(document).ready(function(){

// defines game properties, ty sublime for letting me just hit enter instead of typing out 'properties' a hundred times
var gameProperties = {
	
	init: { 
		// maximum value for our target is 80
		targetPts:  Math.floor(Math.random() * (80 - 19 + 1) + 19), 
		currentPts: 0,
		wins:0,
		losses:0,
	},
	// rolls an invidivual value for each crystal, four total. each crystal has a slightly different spread to keep the game 
	// from becoming unwinnable in certain scenarios, like a low target and all of the crystals roll high
	crystals: {
		cryst1: {
			img:$("#cryst1"),
			val: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
		cryst2: {
			img:$("#cryst2"),
			val: Math.floor(Math.random() * (8 - 1 + 1) + 1)},
		cryst3: {
			img:$("#cryst3"),
			val: Math.floor(Math.random() * (11 - 1 + 1) + 1)},
		cryst4: {
			img:$("#cryst4"),
			val: Math.floor(Math.random() * (13 - 1 + 1) + 1)},
	},
	render: {
		dispTargetPts: $("#targetPts"),
		dispCurrentPts: $("#currentPts"),
		dispWinCount: $("#wins"),
		dispLossCount: $("#losses"),
	}
};

$("#targetPts").html("Target Points: " + gameProperties.init.targetPts);
// grabs value of clicked crystal, adds it to player's total, displays correct value
$(".crystal").on("click", function(){
	$("#gameAlert").html("");
	var g = "gameProperties.crystals."+$(this).attr("id")+".val";
		gameProperties.init.currentPts += eval(g);
		gameProperties.render.dispCurrentPts.html("Current Points: " + gameProperties.init.currentPts);

		if (gameProperties.init.currentPts === gameProperties.init.targetPts){
			gameProperties.init.wins++;
			$("#gameAlert").html("You've Won!");
			resetGame();
		} 

		else if (gameProperties.init.currentPts > gameProperties.init.targetPts){
			gameProperties.init.losses++;
			$("#gameAlert").html("You've Lost!");
			resetGame();
		}
});
// resets the game, player value set to zero, crystals get new values, new target defined
function resetGame(){
	gameProperties.init.targetPts = Math.floor(Math.random() * (80 - 19 + 1) + 19);
		gameProperties.crystals.cryst1.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
		gameProperties.crystals.cryst2.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
		gameProperties.crystals.cryst3.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
		gameProperties.crystals.cryst4.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	$("#targetPts").html("Target Points: " + gameProperties.init.targetPts);
		gameProperties.init.currentPts = 0;
		gameProperties.render.dispCurrentPts.html("Current Points: " + gameProperties.init.currentPts);
		gameProperties.render.dispWinCount.html("Wins: " + gameProperties.init.wins);
		gameProperties.render.dispLossCount.html("Losses: " + gameProperties.init.losses);

}
});