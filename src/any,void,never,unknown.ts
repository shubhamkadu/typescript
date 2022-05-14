//** void */
// void is a set of undefined and null

// here function return void by default
const dosomtihng =()=>{
    console.log("something")
}

const dosomtihng1 = ():void => {
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
let foo:any = 'shubham'
foo = true

// we should not have more than 5 any type in our projects

//**type never */

//function with never can't be executed to the end


// const dosomtihng4 = (): never => {
//   console.log("something");
// };

const dosomtihng5 = (): never => {
    throw "never"// we stoped geting error because never is someting that will never happen
};

//** unknown type */

let vAny:any = 10; 
let vUnknown:unknown =10

let s1:string = vAny;
// type unknown is not assignable to type string
// we cannot assign directly in other type
// let s2:string = vUnknown;

//**type Assertion in typescript */

// type assertion mean we want to covert one type into another
let s3:string = vUnknown as string;

//"as" operator makes type assertion

let page:string='1'

let numeric:number=page as number

// "Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown'"
// typescript thinks we didnt want this
let numeric1: number = (page as unknown) as number;

 



