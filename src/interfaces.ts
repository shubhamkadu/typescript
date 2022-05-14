//** object in ts */
//typescript understands our object by default and ts can read all our properties
// there is no entity definitions in js
// const user = {
//   name: "shubham",
//   age: 22,
// };

// const user2 = {
//   name: "jack",
// };

// in js we can create whatever object we want
// maybe we can work with user like entity in our project
// where user must have property name and age but in user2 we forgot age property
// maybe we forgot user2 needs property age and did it by mistake

// const user:{name:string, age:number} = {
//   name: "shubham",
//   age: 22,
// };

// const user2:{name:string, age:number} = {
//   name: "jack",
// };

// interfaces in ts help us to describe entities
// interface name start with capital letter

interface User {
  myname: string;
  age?: number;
  getMessage(): string;
}

// we also create the classes in ts
class User{} // here is name collesion becouse the name of User interface and User class is same
// to avoid that we can name the interfaces differently

//these are the way to name the interface
interface IUser{}
interface UserInterface{}


const user: User = {
  myname: "shubham",
  age: 22,
  getMessage() {
    return "hello"+myname;
  },
};

const user2: User = {
  myname: "jack",
  getMessage() {
    return "hello" + myname;
  },
};

console.log(user.getMessage());
// if we doent need of age property then we can make it optional
// by passing optional parameter in interface( age?:number)
// Interfaces stop use to reapiting ourself from spacfing entity like this {name:string, age:number}
