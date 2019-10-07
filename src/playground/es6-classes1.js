const appRoot = document.getElementById('app');
class Person{
    constructor(name ='Anonymous',age=0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return '!hi i am '+this.name;
        return `Hi i am ${this.name}`;
    }
    getDescription(){
        return`${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` their major is ${this.major}`
        }
        return description;
    }
}

// const me = new Student('Andrew',21,'Computer Science');
// console.log(me.getDescription());
// const other = new Student();
// console.log(other.getDescription());

class Travelor extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation = homelocation;
    }
    hasLocation(){
        return !!this.homelocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasLocation()){
            return greeting += ` I'm visiting from ${this.homelocation}`;
        }
        else{
            return `Currently no location`
        }
    }
}

const me = new Travelor('AhMeng',30,'Sg');
console.log(me.getGreeting());
const other = new Travelor();
console.log(other.getGreeting());
// render = () =>{

//     ReactDOM.render(template,appRoot);
// }

// render();