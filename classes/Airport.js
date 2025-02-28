class Airport {
    #planes;
    constructor(name,airportCode){
    this.name = name;
    this.airportCode = airportCode;
    this.#planes = [];
    }

    getPlanes(){
        return this.#planes;
    }

    addPlane(plane){
        return this.#planes.push(plane);
    }
}


module.exports = Airport;