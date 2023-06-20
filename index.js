// // var a='123';
// // console.log(a);


// // let b='234';
// // console.log(b);

// // const c=232;
// // console.log(c);

// // // alert('HEY BEB');
// // // const age = prompt('body count?');
// // // console.log(age);

// // const isdon =confirm('are you don');
// // console.log(isdon);

// // let hour =11;
// // if(hour>10)


// let y=2;
// if(x==1){
//     console.log("x is 1");
// }
// if (x == 1 && y == 2){
//     console.log('&& operator  ');
// }
// if ((x = 1)|| (y=3)) {
//     console.log('|| operator tested');
// }

// if (!x){
//     console.log('x is not ture')
// }
// if ((x = 1)|| (y=3)) {
//     console.log('|| operator tested');
// }
// for (let i=0; i<10; i++){
//  console.log(i);
// }

const person ={
    firstName: "suman",
    lastName:"doe",
    fullName:() =>{
        return`${person.firstName} ${person.lastName}`;

    },
};

const c = person.firstName;
const a= person.fullname();
console.log(c,a);

//array 

const arr= ["seeb","volvo","bmw",{bname:"alto"}];
//acess first item;
const b= arr[0];
//acess lat time 
const e= arr[arr.length -1];
console.log(e);

console.log(arr.length);
