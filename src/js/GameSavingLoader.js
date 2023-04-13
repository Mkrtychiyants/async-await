import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      const saving = JSON.parse(value);
      const saveObj = new GameSaving(saving.id, saving.created, saving.userInfo);
      return saveObj;
    } catch (error) {
      return console.log(error);
    }
  }
}
