const HangInThere = require('./HangInThere');
const IWokeUpLikeThis = require('./IWokeUpLikeThis');
const Roadkill = require('./Roadkill');
const TheSurgeon = require('./TheSurgeon');
const YouReGonnaDieAloneWithCats = require('./YouReGonnaDieAloneWithCats');
const Megadeath = require('./Megadeath');
const TheExtremeMakeover = require('./TheExtremeMakeover');
const DonTWakeTheDragon = require('./DonTWakeTheDragon');
const IMGood = require('./IMGood');
const Charge = require('./Charge');
const UselessGarbage = require('./UselessGarbage');
const TheBoujieAlien = require('./TheBoujieAlien');
const YouShallNotPass = require('./YouShallNotPass');
const FlyinSolo = require('./FlyinSolo');
const DonTTakeTheBait = require('./DonTTakeTheBait');

class Cards {
    constructor(
        hangInThere = new HangInThere,
        iWokeUpLikeThis = new IWokeUpLikeThis,
        roadkill = new Roadkill,
        theSurgeon = new TheSurgeon,
        youReGonnaDieAloneWithCats = new YouReGonnaDieAloneWithCats,
        megadeath = new Megadeath,
        theExtremeMakeover = new TheExtremeMakeover,
        donTWakeTheDragon = new DonTWakeTheDragon,
        iMGood = new IMGood,
        charge = new Charge,
        uselessGarbage = new UselessGarbage,
        theBoujieAlien = new TheBoujieAlien,
        youShallNotPass = new YouShallNotPass,
        flyinSolo = new FlyinSolo,
        donTTakeTheBait = new DonTTakeTheBait
    ) {
        this.hangInThere = hangInThere;
        this.iWokeUpLikeThis = iWokeUpLikeThis;
        this.roadkill = roadkill;
        this.theSurgeon = theSurgeon;
        this.youReGonnaDieAloneWithCats = youReGonnaDieAloneWithCats;
        this.megadeath = megadeath;
        this.theExtremeMakeover = theExtremeMakeover;
        this.donTWakeTheDragon = donTWakeTheDragon;
        this.iMGood = iMGood;
        this.charge = charge;
        this.uselessGarbage = uselessGarbage;
        this.theBoujieAlien = theBoujieAlien;
        this.youShallNotPass = youShallNotPass;
        this.flyinSolo = flyinSolo;
        this.donTTakeTheBait = donTTakeTheBait;
    };
};

module.exports = Cards;