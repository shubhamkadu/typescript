//**generics in ts */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    // ts really need to know what datatype obj is
    //Parameter 'obj' implicitly has an 'any' type, but a better type may be inferred from usage.
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var person = {
    name: "jack"
};
var result = addId(person);
console.log(result); //{name: 'jack', id: '0.277e2641edd67'}
// generic type
// All the generic data types written inside "<>""
// "T" is a default name of generic
var addId1 = function (obj) {
    // now its working becouse we gives a generic type to obj
    // now we can use this T data type inside anywhere in finction
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var person1 = {
    name: "jack",
    age: 23
};
var result1 = addId1(person1);
// ts understands this is function, this is generic so inside really wnat to pass data type of this object
// this why inside that is not any but the type that we passed
console.log(result1);
var addId3 = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var personName = {
    name: "jack"
};
var result3 = addId3(personName);
//or
var result4 = addId3(personName); //this is better to read
console.log(result3);
// if we want set default generic data type
var addId4 = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var personName4 = {
    name: "jack"
};
var result5 = addId4(personName4);
//or
var result6 = addId4(personName4); //this is better to read
// now we cannot pass string datatype inside addId3 function because we validate generic data type as object by extends
// const result7 = addId4<string>('shubham');
console.log(result5);
var ram = {
    name: "jack",
    data: {
        surname: "smith"
    }
};
var ram2 = {
    name: "revan",
    data: ["shubham", "rugwed"]
};
var himanshu = {
    name: "toshant",
    data: {
        surname: "villy"
    },
    meta: ["shubham", "rugwed"]
};
//** enum in ts */
//enum=enumerable
var statuses = {
    notstarted: 0,
    inprogress: 1,
    done: 2
};
console.log(statuses.notstarted); //0
// we can do same with enum
var Statuses1;
(function (Statuses1) {
    Statuses1[Statuses1["notstarted"] = 0] = "notstarted";
    Statuses1[Statuses1["inprogress"] = 1] = "inprogress";
    Statuses1[Statuses1["done"] = 2] = "done";
})(Statuses1 || (Statuses1 = {}));
;
console.log(Statuses1.notstarted); //0
//by default notstarted have value 0 and inprogress have value 1 and so on
// we can use enum as value and data type
var peoplestatuses = Statuses1.done;
peoplestatuses = Statuses1.inprogress;
console.log(peoplestatuses);
// enum with string 
var Statuses2;
(function (Statuses2) {
    Statuses2["notstarted"] = "sk";
    Statuses2["inprogress"] = "rk";
    Statuses2["done"] = "hk";
})(Statuses2 || (Statuses2 = {}));
;
console.log(Statuses2.done);
// enum with inside Interfaces
var Statuses3;
(function (Statuses3) {
    Statuses3["notstarted"] = "sk";
    Statuses3["inprogress"] = "rk";
    Statuses3["done"] = "hk";
})(Statuses3 || (Statuses3 = {}));
;
// we have to use enum we needed constants in our app
