//**generics in ts */

const addId = (obj) => {
  // ts really need to know what datatype obj is
  //Parameter 'obj' implicitly has an 'any' type, but a better type may be inferred from usage.
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const person = {
  name: "jack",
};
const result = addId(person);
console.log(result); //{name: 'jack', id: '0.277e2641edd67'}

// generic type
// All the generic data types written inside "<>""
// "T" is a default name of generic
const addId1 = <T>(obj: T) => {
  // now its working becouse we gives a generic type to obj
  // now we can use this T data type inside anywhere in finction
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const person1 = {
  name: "jack",
  age: 23,
};
const result1 = addId1(person1);
// ts understands this is function, this is generic so inside really wnat to pass data type of this object
// this why inside that is not any but the type that we passed
console.log(result1);

const addId3 = <T>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface Person3Interface {
  name: string;
}
const personName: Person3Interface = {
  name: "jack",
};
const result3 = addId3(personName);
//or
const result4 = addId3<Person3Interface>(personName); //this is better to read

console.log(result3);

// if we want set default generic data type

const addId4 = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface Person3Interface {
  name: string;
}
const personName4: Person3Interface = {
  name: "jack",
};
const result5 = addId4(personName4);
//or
const result6 = addId4<Person3Interface>(personName4); //this is better to read

// now we cannot pass string datatype inside addId3 function because we validate generic data type as object by extends
// const result7 = addId4<string>('shubham');
console.log(result5);

//** generic in interfaces */

interface RamInterface<T> {
  name: string;
  data: T;
}

const ram: RamInterface<{ surname: string }> = {
  name: "jack",
  data: {
    surname: "smith",
  },
};
const ram2: RamInterface<string[]> = {
  name: "revan",
  data: ["shubham", "rugwed"],
};

//** passing more datatype inside generic */

interface multipleTypeInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const himanshu: multipleTypeInterface<{ surname: string }, string[]> = {
  name: "toshant",
  data: {
    surname: "villy",
  },
  meta: ["shubham", "rugwed"],
};

//** enum in ts */
//enum=enumerable

const statuses = {
  notstarted:0,
  inprogress:1,
  done:2
}
console.log(statuses.notstarted) //0

// we can do same with enum

enum Statuses1{
  notstarted,
  inprogress,
  done
};

console.log(Statuses1.notstarted) //0

//by default notstarted have value 0 and inprogress have value 1 and so on

// we can use enum as value and data type

let peoplestatuses:Statuses1 = Statuses1.done

peoplestatuses = Statuses1.inprogress

console.log(peoplestatuses)

// enum with string 

enum Statuses2{
  notstarted='sk',
  inprogress='rk',
  done='hk'
};

console.log(Statuses2.done)

// enum with inside Interfaces


enum Statuses3{
  notstarted='sk',
  inprogress='rk',
  done='hk'
};

interface Task{
  id:string
  peoplestatus:Statuses3 // now we can provide only Statuses3 enum to peoplestatus inside Task
}

// we have to use enum we needed constants in our app




