
// const appRoot = document.getElementById('app');

// let state = false;

// const toggleE = () =>{
//     state = !state;
//     console.log(state);
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleE}>{state ? 'hide details':'show details'}</button>
//             <p>{state? 'HaHaHA i shown' : null}</p>
//             {state && (<p>'HAHHAHA i SHown twice'</p>)}
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// }

// render();

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            Visibility:false
        }
    }
    handleToggle(){
        this.setState((prevState)=>{
            return{
                Visibility:!prevState.Visibility
            }
        })
    }
    render(){
        return(
                <div>
                    <p>{this.state.Visibility && `Hi i am details`}</p>
                    <button onClick={this.handleToggle}>{this.state.Visibility? "hide details":"show details"}</button>
                </div>
        )
    };
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'))