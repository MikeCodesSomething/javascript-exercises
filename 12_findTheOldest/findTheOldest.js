const findTheOldest = function(people) {
    let ages = []
    let oldestPerson = ""
    for (person of people) {
        //work out the age they died based on death year - birth year (or uses current year instead of death year if not present)
        let isDead = person.hasOwnProperty('yearOfDeath');
        let age = (isDead ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth;
        ages.push(age);
        if (Math.max(...ages) === age) oldestPerson = person;
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
