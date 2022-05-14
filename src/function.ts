// const getFullName=(name,surname)=>{
//     return name+ " "+surname
// }

// console.log(getFullName(true,["kadu"])); // we can pass whatever we want becouse we didnt defined type
// anyone ca missused our function

// writing a string infront of name and surname it means we declear the type of name&surname as string 
// ():string  "it means function return the string"
const getFullName = (name:string, surname:string):string => { 
  return name + " " + surname;
};

console.log(getFullName("shubham", "kadu")); // now we can pass only string here any other type it doesnt allowed


//*** function definition */




