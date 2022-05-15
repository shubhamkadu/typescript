//** void */
// void is a set of undefined and null
// here function return void by default
var dosomtihng = function () {
    console.log("something");
};
var dosomtihng1 = function () {
    console.log("something");
};
//this is not allowed
// const dosomtihng3 = (): void => {
//   console.log("something");
//   return 1
// };
//** any typs */
// any typs turns off typescript checks
// we can assing any type of value like string,boolean,number...
var foo = 'shubham';
foo = true;
// we should not have more than 5 any type in our projects
//**type never */
//function with never can't be executed to the end
// const dosomtihng4 = (): never => {
//   console.log("something");
// };
var dosomtihng5 = function () {
    throw "never"; // we stoped geting error because never is someting that will never happen
};
//** unknown type */
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// type unknown is not assignable to type string
// we cannot assign directly in other type
// let s2:string = vUnknown;
//**type Assertion in typescript */
// type assertion mean we want to covert one type into another
var s3 = vUnknown;
//"as" operator makes type assertion
var page = '1';
// let numeric:number=page as number // error
// "Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown'"
// typescript thinks we didnt want this
var numeric1 = page;
