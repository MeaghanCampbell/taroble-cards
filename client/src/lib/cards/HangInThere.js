const Card = require('../Card');

class HangInThere extends Card {
    constructor() {
        super();
        this.name = "Hang in There";
        this.image = 'hang-in-there.png';
        this.pastText = "Remember long ago when they told you things were going to get better? Were they lying, or what?";
        this.presentText = "Things really aren't as bad as they seem. They're worse, you're just not getting the whole picture. Still, it's probably worth sticking it out.";
        this.futureText = "I'd like to tell you there's something worth waiting for in all of our futures, but statistically speaking, most of us are doomed to a life of boredom and underachievement. So keep drinking!";
    }
}

module.exports = HangInThere;