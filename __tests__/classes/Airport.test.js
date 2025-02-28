const Airport = require('../../classes/Airport');
const Plane = require('../../classes/Plane');

describe("Airport class test", () =>{
    test("name and plane are assigned the correct values", () =>{
        const newAirport = new Airport("George Bush", "IAH")
        expect(newAirport.name).toBe("George Bush");
        expect(newAirport.airportCode).toBe("IAH");
    })
    test("planes array initializes as an empty array", () => {
        const newAirport = new Airport("George Bush", "IAH");
        expect(newAirport.getPlanes()).toEqual([]);
    })
    test("we can add Plane objects to the planes array", () => {
        const newAirport = new Airport("George Bush", "IAH");
        const newPlane = new Plane("JetBlue", "Houston", "Miami");
        newAirport.addPlane(newPlane);
        expect(newAirport.getPlanes()).toContain(newPlane);
    })
})