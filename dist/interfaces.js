//** object in ts */
//typescript understands our object by default and ts can read all our properties
// there is no entity definitions in js
// const user = {
//   name: "shubham",
//   age: 22,
// };
// we also create the classes in ts
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}()); // here is name collesion
var user = {
    myname: "shubham",
    age: 22,
    getMessage: function () {
        return "hello" + myname;
    }
};
var user2 = {
    myname: "jack",
    getMessage: function () {
        return "hello" + myname;
    }
};
console.log(user.getMessage());
// if we doent need of age property then we can make it optional
// by passing optional parameter in interface( age?:number)
// Interfaces stop use to reapiting ourself from spacfing entity like this {name:string, age:number}
