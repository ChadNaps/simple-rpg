const saveFileLocationDefault = "//<game dir>/save_files";
const saveData = {
  config: {
    id: -1,
    saveFileLocation: saveFileLocationDefault
  }
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

