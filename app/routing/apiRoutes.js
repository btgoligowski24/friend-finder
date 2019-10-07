let friendsFile = require("../data/friends.js");
let friends = friendsFile.friends;

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        const newFriend = req.body;
        let matchedFriend;

        console.log(newFriend);

        for (obj of friends) {
            let sumDifference = 0;
            for (val of friends[obj].scores) {
                sumDifference += Math.abs(friends[obj].scores[val] - newFriend.scores[val]);
            }
            if (!matchedFriend) {
                matchedFriend = friends[obj];
                matchedFriend.difference = sumDifference;
            } else if (matchedFriend.difference > sumDifference) {
                matchedFriend = friends[obj];
                matchedFriend.difference = sumDifference;
            }
        }
        friends.push(newFriend);

        // This is what is sent back to the post callback on the reserve.html page. This essentially becomes the "data" parameter in that call back.
        res.json(matchedFriend);
    });
};