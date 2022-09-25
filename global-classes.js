const path = require('path');
const pwd = path.resolve(path.dirname('.'));
const saveFileLocationDefault = path.join(pwd, 'save_games');
const randId = function () { return Math.floor(Math.random() * 10000); }

exports.SaveData = class SaveData {
	constructor(saveDataObj) {
		this.config = {},
		this.config.id = saveDataObj ? saveDataObj.config.id : randId();
		this.config.saveFileLocation = saveDataObj ? saveDataObj.config.saveFileLocation : saveFileLocationDefault;
		this.character = {},
		this.character.id = saveDataObj ? saveDataObj.character.id : randId();
		this.character.isAlive = saveDataObj ? saveDataObj.character.isAlive : true;
		this.character.type = saveDataObj ? saveDataObj.character.type : "NPC";
		this.character.name = saveDataObj ? saveDataObj.character.name : "";
		this.character.class = saveDataObj ? saveDataObj.character.class : "";
		this.character.level = saveDataObj ? saveDataObj.character.level : 1;
		this.character.exp = saveDataObj ? saveDataObj.character.exp : 0;
		this.character.expToLevel = saveDataObj ? saveDataObject.character.expToLevel : 50;
		this.character.gold = saveDataObj ? saveDataObj.character.gold : 0;
		this.character.stats = {};
		this.character.stats.str = saveDataObj ? saveDataObj.character.stats.str : -1;
		this.character.stats.dex = saveDataObj ? saveDataObj.character.stats.dex : -1;
		this.character.stats.con = saveDataObj ? saveDataObj.character.stats.con : -1;
		this.character.stats.int = saveDataObj ? saveDataObj.character.stats.int : -1;
		this.character.stats.wis = saveDataObj ? saveDataObj.character.stats.wis : -1;
		this.character.stats.cha = saveDataObj ? saveDataObj.character.stats.cha : -1;
		this.character.location = {};
		this.character.location.id = saveDataObj ? saveDataObj.character.location.id : -1;
		this.character.location.name = saveDataObj ? saveDataObj.character.location.name : "";
		this.character.inventory = saveDataObj ? saveDataObj.character.inventory : [];
		this.character.gear = {};
		this.character.gear.head = saveDataObj ? saveDataObj.character.gear.head : {};
		this.character.gear.mainHand = saveDataObj ? saveDataObj.character.gear.mainHand : {};
		this.character.gear.offHand = saveDataObj ? saveDataObj.character.gear.offHand : {};
		this.character.gear.body = saveDataObj ? saveDataObj.character.gear.body : {};
		this.character.gear.boots = saveDataObj ? saveDataObj.character.gear.boots : {};
	}
	get configId() { return this.config.id; };
	get configSaveFileLocation() { return this.config.saveFileLocation; }
	get charId() { return this.character.id; }
	get charIsAlive() { return this.character.isAlive; }
	get charType() { return this.character.type; }
	get charName() { return this.character.name; }
	get charClass() { return this.character.class; }
	get charLevel() { return this.character.level; }
	get charExp() { return this.character.exp; }
	get charExpToLevel() { return this.character.expToLevel; }
	get charGold() { return this.character.gold; }
	get charStr() { return this.character.stats.str; }
	get charDex() { return this.character.stats.dex; }
	get charCon() { return this.character.stats.con; }
	get charInt() { return this.character.stats.int; }
	get charWis() { return this.character.stats.wis; }
	get charCha() { return this.character.stats.cha; }
	get charLocationId() { return this.character.location.id; }
	get charLocationName() { return this.character.location.name; }
	get charInventory() { return this.character.inventory; }
	get charGearHead() { return this.character.gear.head; }
	get charGearMainHand() { return this.character.gear.mainHand; }
	get charGearOffHand() { return this.character.gear.offHand; }
	get charGearBody() { return this.character.gear.body; }
	get charGearBoots() { return this.character.gear.boots; }
	set configId(newId) { this.config.id = newId; }
	set configSaveFileLocation(newFilepath) { this.config.saveFileLocation = newFilepath; }
	set charId(newId) { this.character.id = newId; }
	set charIsAlive(newAliveState) { this.character.isAlive = newAliveState; }
	set charType(newType) { this.character.type = newType; }
	set charName(newName) { this.character.name = newName; }
	set charClass(newClass) { this.character.class = newClass; }
	set charLevel(newLevel) { this.character.level = newLevel; }
	set charExp(newExp) { this.character.exp = newExp; }
	set charExpToLevel(newExpReq) { this.character.expToLevel = newExpReq; }
	set charGold(newGold) { this.character.gold = newGold; }
	set charStr(newStr) { this.character.stats.str = newStr; }
	set charDex(newDex) { this.character.stats.dex = newDex; }
	set charCon(newCon) { this.character.stats.con = newCon; }
	set charInt(newInt) { this.character.stats.int = newInt; }
	set charWis(newWis) { this.character.stats.wis = newWis; }
	set charCha(newCha) { this.character.stats.cha = newCha; }
	set charLocationId(newId) { this.character.location.id = newId; }
	set charLocationName(newName) { this.character.location.name = newName; }
	set charInventory(newInvArray) { this.character.inventory = newInvArray; }
	set charGearHead(newHeadGear) { this.character.gear.head = newHeadGear; }
	set charGearMainHand(newMainHand) { this.character.gear.mainHand = newMainHand; }
	set charGearOffHand(newOffHand) { this.character.gear.offHand = newOffHand; }
	set charGearBody(newBodyGear) { this.character.gear.body = newBodyGear; }
	set charGearBoots(newBoots) { this.character.gear.boots = newBoots; }

}

// Old Model:
//
// const saveData = {
//   config: {
//     id: -1,
//     saveFileLocation: saveFileLocationDefault
//   },
//   character: {
//     id: -1,
//     isAlive: true,
//     type: "", // PC/NPC/Mob
//     name: "",
//     class: "",
//     level: 1,
//     exp: 0,
//     expToLevel: 50,
//     gold: 0,
//     stats: {
//       str: -1,
//       dex: -1,
//       con: -1,
//       int: -1,
//       wis: -1,
//       cha: -1
//     },
//     location: {
//       id: -1,
//       name: ""
//     },
//     inventory: [],
//     gear: {
//       head: {},
//       mainHand: {},
//       offHand: {},
//       body: {},
//       boots: {}
//     }
//   } 
// };
