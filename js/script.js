function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return this.name;
  };
}
var person = new Person("ahmed", 25);
console.log(person.name);
console.log(person.age);
console.log(person.greet());
