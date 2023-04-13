import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('promise test', async (done) => {
  const data = await GameSavingLoader.load();
  expect(data).toBeInstanceOf(GameSaving);
  done();
});
