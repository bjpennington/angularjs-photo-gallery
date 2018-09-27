// People array stored in people.js
console.log(people);
for (person of people) {
    person.clickCount = 0;
};

let photosApp = angular.module('PhotosApp', []);

photosApp.controller('PhotosController', [function () {
    let self = this;
    self.message = 'Angular is up';
    self.people = people;
    self.filterInput;
    self.flipCard = function (person) {
        console.log('clicked');
        person.showName = !person.showName;
        person.clickCount++;
    };
    self.resetCards = function () {
        console.log('reset');
        for (person of people) {
            person.showName = false;
            person.clickCount = 0;
        }
    };
}]);