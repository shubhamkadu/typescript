// type assertion use a lot in dom element
// ts has a lot of types for DOM 


const someElement = document.querySelector(".foo")

// document have a type document and querySelector which is a method have a type element

// someElement have a type Element 
// this type is defined by ts

//**important note */
// ts doesn't know anything about markup,it doesnt parse our markup,it doesnt see markup
// ts only see our data type this mean ts only sees that line

console.log("someElement",someElement)

//someElement has a lot of properties so all these properties and method are available to dom element

//** element is the  highest from hierarchy class to work with dom element so this is super generic class*/

// but normally when we work with dom element we want read the  input value

const someElement1 = document.querySelector(".foo")

// consider this foo is targeting the dom input element and we want value from that input

// console.log("someElement1",someElement1.value) // but here is error that say Property 'value' does not exist on type 'Element'.



// how we can this. most of the people solve it by converting to type any like below

console.log("someElement1", (someElement1 as any).value); // this is incorrect way to solve it

// correct fix here is to say  that our element is not generic
// using type casting we can cast it into different types and the type that we need if this is really input is HtmlInput element

const someElement2 = document.querySelector("foo") as HTMLInputElement

// someElement2 is not an element which is super generic but we assure that this will htmlinput element
console.log("someElement2",someElement2.value)// now we are not getting an error
// now the type of someElement2 is HTMLInputElement


//**ADDING A LISTENER */

const someElement3 = document.querySelector("foo") 
someElement3.addEventListener('blur',(event)=>{
//   console.log("event", event.target.value); //Error Property 'value' does not exist on type 'EventTarget'
  // we getting this error becouse event is generic 
  //and event.target is exist but its type is EventTarget and EventTarget is already generic so we really need to give clearity about what is event.target
})

// correct will here to defined our target correctly 
someElement3.addEventListener('blur',(event)=>{
    const target = event.target as HTMLInputElement // we know that we are working with html input element that why we write there HTMLInputElement
    //now type of target is HTMLInputElement and value exist
  console.log("event",target.value);
  
})



// event is super generic class => event: Event
// event is also highest class in hirerarhy
// there is most generic possible so we need make it type assertion


