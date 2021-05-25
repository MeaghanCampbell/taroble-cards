const Card = require('../Card');

class FlyinSolo extends Card {
    constructor() {
        super();
        this.name = "Flyin' Solo";
        this.image = 'flying-high.png';
        this.pastText = "In days of yore, this attitude could've garnered you a starring movie role, or a part-time as a PI, at least.";
        this.presentText = "Yes, I can safely say you're no Alexander Supertramp, nor will you achieve anything like what he did trying to hitch a ride to the mall.";
        this.futureText = `There are those who will look upon your future accomplishments in amazement and with reverence. And there are those who will refer to you as "that Amelia Earhart type bitch".`;
    }
}

module.exports = FlyinSolo;