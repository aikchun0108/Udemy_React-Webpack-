import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

class OldSyntax {
    constructor(){
        this.name='Mike';
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting(){
        return `hi ${this.name}`
    }
}
const smth = new OldSyntax();
const getgreeting = smth.getGreeting;
console.log(getgreeting())

//---------------------

class NewSyntax{
    name="JAN"
    getGreeting = () =>{
        return `hi ${this.name}`
    }
}
const newS = new NewSyntax();
const newgetgreeting = newS.getGreeting;
console.log(newgetgreeting());