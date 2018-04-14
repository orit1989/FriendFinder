// We are linking our routes to a series of "data" sources. 

var friends = require("../data/friends.js");
var path = require("path");


module.exports = function(app){

	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	
	app.post("/api/friends", function(req, res){
        console.log('started post');
        var newFriend = req.body;
        var bestScore = 0;
        var matchId = 0;
        var scoreDifference = 0;
        for (i = 0; i < friends.length ; i++) {
            console.log('started loop ' + i);
            scoreDifference = totalDifference(newFriend.scores,friends[i].scores);
            if (i === 0) {
                bestScore = scoreDifference;
            }
            else if ( scoreDifference <= bestScore) {
                bestScore = scoreDifference;
                matchId = i;
            }
        }
        console.log('finished loop');

        friends.push(newFriend);
        res.json(friends[matchId]);
	});

    function totalDifference(arr1,arr2) {
        console.log('started difference');

        var result = 0;
        for (var i in arr1){
         result += Math.abs(arr1[i] - arr2[i]);
        }
        return result;
    } 
}