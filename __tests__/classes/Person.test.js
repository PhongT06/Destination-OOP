const Person = require('../../classes/Person');
const Bag = require('../../classes/Bag');

describe('Person class', () => {
   test('should create an instance of Person with name and destination', () => {
      const person = new Person('John', 'Paris');
      expect(person).toBeInstanceOf(Person);
   });
   test('should set the name and destination correctly', () => {
      const person = new Person('Jane', 'Tokyo');
      expect(person.name).toBe('Jane');
      expect(person.destination).toBe('Tokyo');
   });
   test('should initialize bags as an empty array', () => {
      const person = new Person('Alice', 'Rome');
      expect (person.getBags()).toEqual([]);
   });
   test('should add a bag to the bags array using addBag', () => {
      const person = new Person('Bill', 'Miami');
      const bag = new Bag(20, 1);
      person.addBag(bag);
      expect(person.getBags()).toEqual([bag]);
   });

});