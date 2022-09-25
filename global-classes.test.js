const { SaveData } = require('./global-classes.js');
const { testPassed, testFailed } = require('./testing-tools.js');
const { parseSaveDataAndDo } = require('./global-functions.js');

const testSaveData = {
  config: {
    id: -1,
    saveFileLocation: "Lorum Ipsum"
  },
  character: {
    id: -1,
    isAlive: true,
    type: "", // PC/NPC/Mob
    name: "",
    class: "",
    level: 1,
    exp: 0,
    expToLevel: 50,
    gold: 0,
    stats: {
      str: -1,
      dex: -1,
      con: -1,
      int: -1,
      wis: -1,
      cha: -1
    },
    location: {
      id: -1,
      name: ""
    },
    inventory: [],
    gear: {
      head: {},
      mainHand: {},
      offHand: {},
      body: {},
      boots: {}
    }
  } 
};

function write(text) {
  process.stdout.write(text);
}
function test(testFunction, expectedResult) {
  try {
    if(expectedResult === undefined) {
      testFunction();
      testPassed();
    } else if(testFunction() === expectedResult) {
      testPassed();
    } else {
      testFailed();
    }
  } catch (err) {
    testFailed();
  }
}
console.clear();
console.log("\n-------Beginning Testing Suite-------\n");

console.log("Testing instantiation");
write("Instantiating new instance of SaveData()...");
test(() => { return new SaveData(); });
write('\n');

{
  console.log("Testing SaveData() getters");
  const testPlayer = new SaveData();

  console.log("<configuration>");

  write("configId...");
  test(() => { return testPlayer.configId; }, testPlayer.config.id);

  write("configSaveFileLocation...");
  test(() => { return testPlayer.configSaveFileLocation; }, testPlayer.config.saveFileLocation);

  console.log("\n<character>");

  write("charId...");
  test(() => { return testPlayer.charId; }, testPlayer.character.id);

  write("charIsAlive...");
  test(() => { return testPlayer.charIsAlive; }, testPlayer.character.isAlive);

  write("charType...");
  test(() => { return testPlayer.charType; }, testPlayer.character.type);

  write("charName...");
  test(() => { return testPlayer.charName; }, testPlayer.character.name);

  write("charClass...");
  test(() => { return testPlayer.charClass; }, testPlayer.character.class);

  write("charLevel...");
  test(() => { return testPlayer.charLevel; }, testPlayer.character.level);

  write("charExp...");
  test(() => { return testPlayer.charExp; }, testPlayer.character.exp);

  write("charExpToLevel...");
  test(() => { return testPlayer.charExpToLevel; }, testPlayer.character.expToLevel);

  write("charGold...");
  test(() => { return testPlayer.charGold; }, testPlayer.character.gold);

  console.log("\n<character.stats>");

  write("charStr...");
  test(() => { return testPlayer.charStr; }, testPlayer.character.stats.str);

  write("charDex...");
  test(() => { return testPlayer.charDex; }, testPlayer.character.stats.dex);

  write("charCon...");
  test(() => { return testPlayer.charCon; }, testPlayer.character.stats.con);

  write("charInt...");
  test(() => { return testPlayer.charInt; }, testPlayer.character.stats.int);

  write("charWis...");
  test(() => { return testPlayer.charWis; }, testPlayer.character.stats.wis);

  write("charCha...");
  test(() => { return testPlayer.charCha; }, testPlayer.character.stats.cha);

  console.log("\n<character.location>");

  write("charLocationId...");
  test(() => { return testPlayer.charLocationId; }, testPlayer.character.location.id);

  write("charLocationName...");
  test(() => { return testPlayer.charLocationName; }, testPlayer.character.location.name);

  console.log("\n<character inventory and gear>");

  write("charInventory...");
  test(() => { return testPlayer.charInventory; }, testPlayer.character.inventory);

  write("charGearHead...");
  test(() => { return testPlayer.charGearHead; }, testPlayer.character.gear.head);

  write("charGearMainHand...");
  test(() => { return testPlayer.charGearMainHand; }, testPlayer.character.gear.mainHand);

  write("charGearOffHand...");
  test(() => { return testPlayer.charGearOffHand; }, testPlayer.character.gear.offHand);

  write("charGearBody...");
  test(() => { return testPlayer.charGearBody; }, testPlayer.character.gear.body);

  write("charGearBoots...");
  test(() => { return testPlayer.charGearBoots; }, testPlayer.character.gear.boots);

  console.log("\nTesting SaveData() setters\n");

  console.log("<configuration>");

  write("configId...");
  test(() => { return testPlayer.configId = 69; }, 69);

  write("configSaveFileLocation...");
  test(() => { return testPlayer.configSaveFileLocation = "~/.simpleRPGSaves"; }, "~/.simpleRPGSaves");

  console.log("\n<character>");

  write("charId...");
  test(() => { return testPlayer.charId = 420; }, 420);

  write("charIsAlive...");
  test(() => { return testPlayer.charIsAlive = false; }, false);

  console.log("\nDEVELOPER NOTE: Testing halted, because it isn't fun and not fun things should be done on official projects. Not for-fun stuff.");

  console.log();
}
