//** creating class */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creating class in ts as same as in ts
var People = /** @class */ (function () {
    function People(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    People.prototype.getfullname = function () {
        return this.firstname + " " + this.lastname;
    };
    People.prototype.changable = function () {
        //   this.changename = 'john' // we cannot assign value to it because readonly
    };
    return People;
}());
var newpeople = new People("jack", "smith");
console.log(newpeople.firstname);
var People1 = /** @class */ (function () {
    function People1(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    People1.prototype.getfullname = function () {
        return this.firstname + " " + this.lastname;
    };
    People1.prototype.addname = function () {
        return this.firstname;
    };
    return People1;
}());
//whatever we have in interface must be use it inside class
//** inheritance in ts */
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    return Admin;
}(People1));
var newadmin = new Admin("will", "admin");
console.log(newadmin);
