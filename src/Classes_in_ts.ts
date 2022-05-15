//** creating class */

//creating class in ts as same as in ts

class People {
  firstname: string;
  lastname: string;
  readonly changename: string;
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getfullname(): string {
    return this.firstname + " " + this.lastname;
  }
  changable(): void {
    //   this.changename = 'john' // we cannot assign value to it because readonly
  }
}
const newpeople = new People("jack", "smith");
console.log(newpeople.firstname);

// all these public, private, protected only present in ts once we transpile into js there is just normal js code

// we have readonly words in ts in class

//**interface in class*/

interface PersonInterface {
  addname(): string;
}

class People1 implements PersonInterface {
  firstname: string;
  lastname: string;
  readonly changename: string;
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getfullname(): string {
    return this.firstname + " " + this.lastname;
  }
  addname(): string {
    return this.firstname;
  }
}

//whatever we have in interface must be use it inside class

//** inheritance in ts */

class Admin extends People1 {
  editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }
}

const newadmin = new Admin("will", "admin");
console.log(newadmin);
