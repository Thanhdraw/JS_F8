function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound.');
};

function Dog(name) {
    Animal.call(this, name); // Gọi hàm khởi tạo của Animal
}

Dog.prototype = Object.create(Animal.prototype); // Dog thừa kế từ Animal
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log(this.name + ' barks.');
};

const dog = new Dog('Rex');
dog.speak(); // Rex barks
