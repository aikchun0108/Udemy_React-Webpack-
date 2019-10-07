//arguments object  - no longer bound with arrow function

const add = function(a,b){
    console.log(arguments);
    return a+b;
}
console.log(add(55,1))


// const add_arrow = (a,b) =>{
//     console.log(arguments);
//     return a+b;
// }
console.log(add(55,1))
// this keyword - no longer bound 

const user = {
    name: 'Andrew',
    city:['Johor','Penang','KL'],
    // printPlacesLived(){
    //     const cityMessage = this.city.map((cities)=>{
    //         return this.name + 'has lived in '+cities;
    //     });
    //     return cityMessage;
    // }

    printPlacesLived(){
        return this.city.map((cities)=> this.name + 'has lived in '+cities)
    }

};

console.log(user.printPlacesLived());

//Challenge area

const multiplier = {
    numbers: [1,2,3],
    multiplyBy:2,
    multiply(){
        const output = this.numbers.map((number_per)=>{
            return number_per * multiplier.multiplyBy
        });
        return output;
    }
    multiply(){
        return this.numbers.map()
    }
}



console.log(multiplier.multiply());