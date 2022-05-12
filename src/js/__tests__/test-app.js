import Team from '../app';

test('create an instance of the Team', () => {
  expect(new Team()).toBeInstanceOf(Team);
});

test('add method', () => {
  const result = new Team();
  result.add('cat');
  expect(result.members.has('cat')).toBeTruthy();
});

test('error in add method', () => {
  const result = new Team();
  result.add('cat');
  expect(() => result.add('cat')).toThrow('Персонаж cat уже есть в команде');
});

test('addAll method', () => {
  const result = new Team();
  result.addAll('dog', 'frog', 'bird');
  expect(result.members.size).toBe(3);
});

test('error in addAll method', () => {
  const result = new Team();
  result.addAll('dog', 'frog', 'bird');
  result.addAll('frog', 'lion');
  expect(result.members.size).toBe(4);
});

test('toArray method', () => {
  const result = new Team();
  result.addAll('dog', 'frog', 'bird');
  expect(Array.isArray(result.toArray())).toBeTruthy();
});
