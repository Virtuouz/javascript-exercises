const findTheOldest = function(people) {
    todaysYear= new Date().getFullYear()
    oldest=people[0]
    oldestAge=calcAge(oldest)
    console.log(oldestAge)
    for(person of people){
        personAge=calcAge(person)
        console.log(personAge)
        if(personAge>oldestAge){
            oldest=person;
            oldestAge=personAge
        }
        
    }
    return oldest
};

const calcAge = function(person){
    return typeof person.yearOfDeath == "undefined" ? todaysYear -  person.yearOfBirth :  person.yearOfDeath -person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
