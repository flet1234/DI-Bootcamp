"use strict";
// class User {
class User {
    constructor(name, age, active) {
        this.active = active;
        this.name = name;
        this.age = age;
    }
    get gAgeUser() {
        return this.age;
    }
    set sAge(age) {
        this.age = age;
    }
}
