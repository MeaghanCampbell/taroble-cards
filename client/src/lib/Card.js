class Card {
    constructor(
        name = ``,
        image = ``,
        pastText = ``,
        presentText = ``,
        futureText = ``,
    ) {
        this.name = name;
        this.image = image;
        this.pastText = pastText;
        this.presentText = presentText;
        this.futureText = futureText;
    };
};

module.exports = Card;