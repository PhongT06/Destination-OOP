const Bag = require('../../classes/Bag')
const Person = require('../../classes/Person');

describe('Bag class', () => {
   test('should create an instance of Bag with weight and id', () => {
      const bag = new Bag(10, 1);
      expect(bag).toBeInstanceOf(Bag);
   });
   test('should set the weight and id properties correctly', () => {
      const bag = new Bag(15, 2);
      expect(bag.weight).toBe(15);
      expect(bag.id).toBe(2);
   });
   test('should initialize owner as null', () => {
      const bag = new Bag(10, 1);
      expect(bag.getOwner()).toBeNull();
   });
   test('should update owner with a Person using assignOwner', () => {
      const bag = new Bag(10, 1);
      const person = new Person('John', 'New York');
      bag.assignOwner(person);
      expect(bag.getOwner()).toBe(person);
   });
});