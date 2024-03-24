function skillsMember() {
    const members = [new Member("John", 25), new Member("Jane", 22)]
    members.forEach(member => {
        member.executeSkills();
    });
}


class Member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    executeSkills() {
        console.log("Name: " + this.name + " Age: " + this.age);
    }
}
