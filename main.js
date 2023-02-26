function User(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'D21CQCN01-N';
User.prototype.class = function() {
    return this.className;
}

var admin = new User('Le', 'Van Dung', 200);
var user = new User('Tran', 'Dinh Toan', 20);

admin.perm = 'Moderator';

console.log(admin.className);
console.log(user.class());

console.log(admin.getName());