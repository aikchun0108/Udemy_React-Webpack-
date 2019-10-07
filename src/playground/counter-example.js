class Counter extends React.Component{
    constructor(props){
        super(props);
        this.AddOne = this.AddOne.bind(this);
        this.MinusOne = this.MinusOne.bind(this);
        this.Reset = this.Reset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log('didmount');
        const json = localStorage.getItem('count')
        const val = parseInt(json,10)
        if (!isNaN(val)){
            this.setState(()=>({
                count:val
            }))
        }
    }

    componentDidUpdate(prevState){
        if(prevState.count!==this.state.count){
            console.log(this.state.count)
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count',json);
        }
    }

    componentWillUnmount(){
        console.log('unmount')
    }


    AddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        });
    }
    MinusOne(){
       this.setState((prevState)=>{
          return{
            count: prevState.count-1
          } 
       })
    }
    Reset(){
        this.setState(()=>{
            return{
                count:0
            }
        })
    }
        
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.AddOne}>+1</button>
                <button onClick={this.MinusOne}>-1</button>
                <button onClick={this.Reset}>reset</button>
            </div>
        )
    }
} 


ReactDOM.render(<Counter count={23}/>,document.getElementById('app'))