import {Proficience} from './proficiences'

class Sheet{

    name : String = ""

    //---General Information---
    money : number = 0
    personality : String = ""
    background : String = ""
    goal : String = ""
    notes : String = ""

    //---Health---
    lifepoints : number = 0
    sanity : number = 0
    fatigue : number = 0
    emotionalStability : number = 0

    //---Atributes---
    strength : number = 0
    dexterity : number = 0
    constitution : number = 0
    intelligence : number = 0
    perception : number = 0
    charism : number = 0

    //---Proficiences---
    proficienceBonus : number = 2
    proficiences : Proficience[] = []

    //---Attack---
    ammo : number = 0
    longWeapon : String = ""
    shortWeapon : String = ""
    meleeWeapon : String = ""
    aimPoints : number = 0
    aimPointsExtra : number = 0

    //---Defense---
    armor : number = 0
    cover : String = ""

    //---Moving---
    movingPoints : number = 0
    movingPointsExtra : number = 0

    //---Survival---
    daysWithoutFood : number = 0
    daysWithouSleep : number = 0
    hostileTemperature : boolean = false

    //---Bag---
    rations : number = 0


    //---Automatic Generated Stats---
    lifePointsMax() : number{
        return 100 + 10*this.modifierFor(this.strength)
    }

    sanityPointsMax() : number{
        return 100 + 10*this.modifierFor(this.intelligence)
    }

    fatiguePointsMax() : number{
        return 100 + 20*this.modifierFor(this.strength)
    }

    emotionalStabilityMax() : number{
        return 100 + 25*this.modifierFor(this.intelligence)
    }

    ammoMax() : number{
        return 300 + 50*this.modifierFor(this.strength)
    }

    initiative() : number{
        return this.modifierFor(this.dp())
    }

    dodge() : number{
        return this.modifierFor(this.dp())
    }

    speed() : number{
        return 6 + this.modifierFor(this.dexterity)
    }

    //---Mixed Attributes---

    dp() : number{
        return (this.dexterity + this.perception)/2
    }
    fd() : number{
        return (this.strength + this.dexterity)/2
    }
    pi() : number{
        return (this.perception + this.intelligence)/2
    }
    fc() : number{
        return (this.strength + this.charism)/2
    }
    di() : number{
        return (this.dexterity + this.intelligence)/2
    }

    //---Proficiences---

    proficienceBonusFor(proficience : Proficience) : number{

        var bonus : number = 0

        if(proficience == "Int") bonus = this.modifierFor(this.intelligence)
        else if(proficience == "Dex") bonus = this.modifierFor(this.dexterity)
        else if(proficience == "Cha") bonus = this.modifierFor(this.charism)
        else if(proficience == "FC") bonus = this.modifierFor(this.fc())
        else if(proficience == "DI") bonus = this.modifierFor(this.di())

        if(this.proficiences.includes(proficience)) bonus += this.proficienceBonus

        return bonus
    }

    //---Support Methods---
    modifierFor(attribute : number) : number{
        return Math.floor((attribute-10)/2)
    }

    addProficience(proficience : Proficience){
        this.proficiences.push(proficience)
    }
}

// export = Sheet

var sheet = new Sheet()

sheet.strength = 8
sheet.dexterity = 8
sheet.constitution = 12
sheet.intelligence = 16
sheet.perception = 16
sheet.charism = 12

console.log(sheet.proficienceBonusFor(Proficience.survival))
sheet.proficiences.push(Proficience.survival)
console.log(sheet.proficienceBonusFor(Proficience.survival))