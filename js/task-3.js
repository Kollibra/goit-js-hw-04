const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername: function(newName) {
        profile.username = newName;
    },
    updatePlayTime: function(hours) {
        profile.playTime += hours;
    },
    getInfo: function() {
        return `${profile.username} has ${profile.playTime} active hours!`;
    },
};

console.log(profile.getInfo()); 

profile.changeUsername("Marco");
console.log(profile.getInfo()); 

profile.updatePlayTime(20);
console.log(profile.getInfo());