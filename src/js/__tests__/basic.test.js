import GameSavingLoader from '../GameSavingLoader';

test('promise test', async (done) => {
  const data = await GameSavingLoader.load();
  expect(data).toBeDefined();
  done();
});
