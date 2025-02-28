const Plane = require('../../classes/Plane');
const Person = require('../../classes/Person');

describe("Plane class test",() =>{
    test("all parameters are assigned to the correct value", () =>{
        const newPlane = new Plane("JetBlue","Houston","Miami");
        expect(newPlane.company).toBe("JetBlue");
        expect(newPlane.origin).toBe("Houston");
        expect(newPlane.destination).toBe("Miami");
    });
    test("passenger array initializes as an empty array", () => {
        const newPlane = new Plane("JetBlue","Houston","Miami");
        expect(newPlane.getPassengers()).toEqual([]);
    });
    test("we can add a Person to the passengers array", () =>{
        const newPlane = new Plane("JetBlue","Houston","Miami");
        const newPerson = new Person("Juan","Houston");
        newPlane.addPassenger(newPerson)
        expect(newPlane.getPassengers()).toContain(newPerson);
    });
})