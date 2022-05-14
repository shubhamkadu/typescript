let username:string = 'alex'

// the properties eigher be a number or string
//union- operator combine two data types
// union use to checking null
let pageName:string | number = '1' 

// when we fetch the data it is not there at the beginning but later on we need work with it
// so initially set it null after getting change it into our convinient 

let errorMessage:null | string = null

//usecase of costume interface 
interface Person {
  myname: string;
  age: number;
}

//before fetching the people data it will be null and after it will be the Person interface
let people:Person | null = null

//this is not supportable because it can whatever that doesn't give any sefty or clearity
let someprop:string | number | null | undefined |string[] | object= null


