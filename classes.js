class Hero {
    constructor(name, level, healthPoints, stats) {
        this.name = name;
        this.level = level;
        this.healthPoints = healthPoints;
        this.stats = stats;
    }

    displayHero() {
        const heroInfo =
            `Имя: ${this.name}` +
            `Уровень: ${this.level}` +
            `Жизненные силы: ${this.healthPoints}` +
            `Сила: ${this.stats.str}` +
            `Интеллект: ${this.stats.int}` +
            `Ловкость: ${this.stats.agi}`;

        console.log(heroInfo);
    }
}

class Mage extends Hero {
    constructor(name, level, healthPoints, stats, hasTectonicPotion, mana) {
        super(name, level, healthPoints, stats);
        this.hasTectonicPotion = hasTectonicPotion;
        this.mana = mana;
    }

    displayHero() {
        super.displayHero();

        console.log(`Мана: ${this.mana}`);

        if (this.hasTectonicPotion === "true") {
            console.log("Есть зелье для тектоника");
        }
    }
}

class Knight extends Hero {
    constructor(name, level, healthPoints, stats, isHorseTango, energy) {
        super(name, level, healthPoints, stats);
        this.isHorseTango = isHorseTango;
        this.energy = energy;
    }

    displayHero() {
        super.displayHero();

        console.log(`Энергия: ${this.energy}`);

        if (this.isHorseTango === "true") {
            console.log("Этот герой может танцевать танго на коне");
        }
    }
}