class Ninja {
    constructor(name,health,speed=3,strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }
    drinkSake() {
        this.health += 50;
    }
}

const ninja1 = new Ninja("Hyabusa", 20);


class Sensei extends Ninja{
    constructor(name,wisdom=10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom
    }
    speakWisdom() {
        super.drinkSake();
        console.log(`It is healthy to drink Sake. My Health: ${this.health}`)
    }
}


const newSensei = new Sensei("Corey")
newSensei.speakWisdom();