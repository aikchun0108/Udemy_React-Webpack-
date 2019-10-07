// const square = function (x){
//     return x * x;
// }

// //function square(x){
//  //   return x * x;
// //}


// //const squareArrow = (x) => {
// //    return x * x;
// //}

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

const getFirstName = (x) =>{
    let FirstName = x.split(' ')
    return FirstName[0]
}

console.log(getFirstName('Mike Smith'))

const getFirstName2 = (x) => x.split(' ')[0];

console.log(getFirstName2('Michel Jordan'))