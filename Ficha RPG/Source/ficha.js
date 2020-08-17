"use strict";
import { Proficience } from "./proficiences";
var Sheet = /** @class */ (function () {
    function Sheet() {
        this.name = "";
        //---General Information---
        this.money = 0;
        this.personality = "";
        this.background = "";
        this.goal = "";
        this.notes = "";
        //---Health---
        this.lifepoints = 0;
        this.sanity = 0;
        this.fatigue = 0;
        this.emotionalStability = 0;
        //---Atributes---
        this.strength = 0;
        this.dexterity = 0;
        this.constitution = 0;
        this.intelligence = 0;
        this.perception = 0;
        this.charism = 0;
        //---Proficiences---
        this.proficienceBonus = 2;
        this.proficiences = [];
        //---Attack---
        this.ammo = 0;
        this.longWeapon = "";
        this.shortWeapon = "";
        this.meleeWeapon = "";
        this.aimPoints = 0;
        this.aimPointsExtra = 0;
        //---Defense---
        this.armor = 0;
        this.cover = "";
        //---Moving---
        this.movingPoints = 0;
        this.movingPointsExtra = 0;
        //---Survival---
        this.daysWithoutFood = 0;
        this.daysWithouSleep = 0;
        this.hostileTemperature = false;
        //---Bag---
        this.rations = 0;
    }
    //---Automatic Generated Stats---
    Sheet.prototype.lifePointsMax = function () {
        return 100 + 10 * this.modifierFor(this.strength);
    };
    Sheet.prototype.sanityPointsMax = function () {
        return 100 + 10 * this.modifierFor(this.intelligence);
    };
    Sheet.prototype.fatiguePointsMax = function () {
        return 100 + 20 * this.modifierFor(this.strength);
    };
    Sheet.prototype.emotionalStabilityMax = function () {
        return 100 + 25 * this.modifierFor(this.intelligence);
    };
    Sheet.prototype.ammoMax = function () {
        return 300 + 50 * this.modifierFor(this.strength);
    };
    Sheet.prototype.initiative = function () {
        return this.modifierFor(this.dp());
    };
    Sheet.prototype.dodge = function () {
        return this.modifierFor(this.dp());
    };
    Sheet.prototype.speed = function () {
        return 6 + this.modifierFor(this.dexterity);
    };
    //---Mixed Attributes---
    Sheet.prototype.dp = function () {
        return (this.dexterity + this.perception) / 2;
    };
    Sheet.prototype.fd = function () {
        return (this.strength + this.dexterity) / 2;
    };
    Sheet.prototype.pi = function () {
        return (this.perception + this.intelligence) / 2;
    };
    Sheet.prototype.fc = function () {
        return (this.strength + this.charism) / 2;
    };
    Sheet.prototype.di = function () {
        return (this.dexterity + this.intelligence) / 2;
    };
    //---Proficiences---
    Sheet.prototype.proficienceBonusFor = function (proficience) {
        var bonus = 0;
        if (proficience == "Int")
            bonus = this.modifierFor(this.intelligence);
        else if (proficience == "Dex")
            bonus = this.modifierFor(this.dexterity);
        else if (proficience == "Cha")
            bonus = this.modifierFor(this.charism);
        else if (proficience == "FC")
            bonus = this.modifierFor(this.fc());
        else if (proficience == "DI")
            bonus = this.modifierFor(this.di());
        if (this.proficiences.includes(proficience))
            bonus += this.proficienceBonus;
        return bonus;
    };
    //---Support Methods---
    Sheet.prototype.modifierFor = function (attribute) {
        return Math.floor((attribute - 10) / 2);
    };
    Sheet.prototype.addProficience = function (proficience) {
        this.proficiences.push(proficience);
    };
    return Sheet;
}());
var sheet = new Sheet();
sheet.strength = 8;
sheet.dexterity = 8;
sheet.constitution = 12;
sheet.intelligence = 16;
sheet.perception = 16;
sheet.charism = 12;
console.log(sheet.proficienceBonusFor(Proficience.survival));
sheet.proficiences.push(Proficience.survival);
console.log(sheet.proficienceBonusFor(Proficience.survival));
export default Sheet;
