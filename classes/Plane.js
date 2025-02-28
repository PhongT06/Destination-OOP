class Plane {
    #passengers;
    constructor(company,origin,destination){
        this.#passengers = [];
        this.company = company;
        this.origin = origin;
        this.destination = destination;
    }

    getPassengers(){
        return this.#passengers;
    }

    addPassenger(passenger){
        return this.#passengers.push(passenger);
    }

}


module.exports = Plane;