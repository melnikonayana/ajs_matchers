import sortHealthPlayer from '../app.js';

test('check sort players health', () => {
  const input = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  const received = sortHealthPlayer(input);
  expect(received).toEqual(expected);
});
