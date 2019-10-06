let friendsFile = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendsFile.friends);
    });
    
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        let newFriend = req.body;
        let matchedFriend;
    
        console.log(newFriend);
    
        friendsFile.friends.push(newFriend);
    
        // This is what is sent back to the post callback on the reserve.html page. This essentially becomes the "data" parameter in that call back.
        res.json(matchedFriend);
    });
};