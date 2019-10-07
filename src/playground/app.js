class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePickOptions = this.handlePickOptions.bind(this)
        this.handleAddOption2 = this.handleAddOption2.bind(this)
        this.handleDeleteSingular = this.handleDeleteSingular.bind(this)
        this.state={
            options:[]
        };
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

    handleDeleteOptions(){
        this.setState(()=>({options:[]}))
    }

    handleDeleteSingular(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }))
    }

    handlePickOptions(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption2(option){
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

    render(){
        const title = 'Indecision';
        const subtitle = '!Put your life in hand of a computer';
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                HasOptions={this.state.options.length > 0}
                handlePickOptions ={this.handlePickOptions}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteSingular={this.handleDeleteSingular} 
                />
                <AddOption
                    handleAddOption2 = {this.handleAddOption2}
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options:[]
// }

const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );    
}

Header.defaultProps = {
    title:'Indecision'
}


const Action = (props) =>{
    return(
        <div>
            <button
             onClick={props.handlePickOptions}
             disabled={!props.HasOptions} 
            >
            What should i do?
             </button>
        </div>
    );
}

const Options = (props)=>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>RemoveAll</button>
            <p>{props.options.length>0 ?`Total ${props.options.length} item listed below`:`Currently no option available`}</p>
            {
                props.options.map((option)=>(
                    <Option 
                        key={option} 
                        optiontext={option}
                        handleDeleteSingular={props.handleDeleteSingular}
                    />
                ))
            }
        </div>
    )
}


const Option = (props)=>{
    return(
        <div>
        {props.optiontext}
        <button onClick={(e)=>{
            props.handleDeleteSingular(props.optiontext)
        }}
        >
            remove
        </button>
        </div>    
    )
}


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state ={
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption2(value);
        // this.setState(()=>{
        //     return{
        //         error:error
        //     }
        // })
        this.setState(()=>({error:error}))

        if (!error){
            e.target.elements.option.value=''
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add option</button>
                </form>
                
            </div>
            
        )
    }
}

// const User =(props)=>{
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));