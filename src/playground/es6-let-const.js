var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst = 'Ken';
//nameConst = 'rye';
console.log('nameConst',nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}
//block scoping
let a = getPetName();
console.log(a);

const fullName ='Jen Rea';
let firstName;
if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}
console.log(firstName);