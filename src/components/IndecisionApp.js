import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('option');
            const option = JSON.parse(json);
            if(option){
                this.setState(()=>({options:option}))
            }     
        }catch (e){
            console.log(e)
        }
    }

    componentDidUpdate(prevProps,prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('option',json);
            console.log('data save');
        }
    }

    componentWillUnmount(){
        console.log('component unmount');
    }

    handleDeleteOptions=()=>{
        this.setState(()=>({options:[]}))
    }

    handleDeleteSingular = (optionToRemove) => {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }))
    }

    handlePickOptions = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption:option
        }))
    }

    handleAddOption2 = (option) => {
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option)>-1){
            return 'this option already exist'
        }
        // this.setState((prevState)=>{
        //     return{
        //         options:prevState.options.concat(option)
        //     }
        // })

        this.setState((prevState)=>({options:prevState.options.concat(option)}))
    }

    handleClearSelected = () =>{
        this.setState(()=>({
            selectedOption:undefined
        }))
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in hand of a computer';
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action 
                    HasOptions={this.state.options.length > 0}
                    handlePickOptions ={this.handlePickOptions}
                    />
                    <div className="widget">
                    <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteSingular={this.handleDeleteSingular} 
                    />
                    <AddOption
                        handleAddOption2 = {this.handleAddOption2}
                    />
                    </div>
                </div>
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleClearSelected = {this.handleClearSelected}
                />
               
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options:[]
// }

