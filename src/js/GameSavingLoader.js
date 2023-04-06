import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }

  static load() {
    return (async () => {
      let value;
      let data;
      try {
        data = await read();
        value = await json(data);
      } catch (error) {
        console.log(error);
      }
      const saving = JSON.parse(value);
      const saveObj = new GameSavingLoader(saving.id, saving.created, saving.userInfo);
      return saveObj;
    })();
  }
}
