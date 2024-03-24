function skillsMember() {
    const members = [new Member("John", 25), new Member("Jane", 22)]
    members.forEach(member => {
        member.executeSkills();
    });
}


import fs from 'fs';

class Member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    executeSkills() {
        const logMessage = "Name: " + this.name + " Age: " + this.age + "\n";
        fs.appendFile('log.txt', logMessage, (err) => {
            if (err) throw err;
            console.log('The log was appended to file!');
        });
    }
}