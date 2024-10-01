const data = {
    _names : ['Jack', 'David', 'Ehab', 'Hely', 'Bukayo', 'Aaron', 'Emile'],
    _ageOfDeath : [75, 32, 69, 99, 102, 48, 78, 81],
    _cause : ['falling from bed', 'sleeping too much', 'eating too many burgers', 'playing a lot royal match', 'flying too high'],

    getNames() {
        return this._names;
    }, 

    getRandomName() {
       const random = Math.floor(Math.random() * this._names.length);
       return this._names[random];
    },

    getRandomAge(){
        const random = Math.floor(Math.random() * this._ageOfDeath.length);
        return this._ageOfDeath[random];
    },

    getRandomCause() {
        const random = Math.floor(Math.random() * this._cause.length);
        return this._cause[random];
    }
}

const randomName = data.getRandomName();
const randomAge = data.getRandomAge();
const randomCause = data.getRandomCause();

console.log(`${randomName} will live until the age of ${randomAge} and the cause of their end will be ${randomCause}.`);