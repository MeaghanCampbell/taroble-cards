const Card = require('../Card');

class DonTWakeTheDragon extends Card {
    constructor() {
        super();
        this.name = "Don't Wake the Dragon";
        this.image = 'wake-dragon.png';
        this.pastText = "By the amount of scars and phobias you're carrying, I'm going to say waking the dragon was more of a hobby for you...";
        this.presentText = "There are times in life when people must exercise caution. You fail at them all magnificently.";
        this.futureText = "A crown of golden metal lies upon your head and jade earrings adorn your ear lobes... Your head is dehydrated and shrunken, and your mouth and eyes are sewn shut but that jewelry's bitchin!";
    }
}

module.exports = DonTWakeTheDragon;