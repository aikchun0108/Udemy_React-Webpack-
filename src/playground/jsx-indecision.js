console.log('App.js is running');

// JSX - Javascript XML

function getoption(options){
    if (options.length > 0){
        return <p>{options}</p>
    }
    else{
        return <p>No options</p>
    }
}

const movie = {
    title:'Harry Potter',
    subtitle:'Chinese',
    options:[]
}


const onFormSubmit = (e) =>{
    e.preventDefault();
    console.log('running')
    const option = e.target.elements.option.value;
    if (option){
        movie.options.push(option);
        e.target.elements.option.value='';
        console.log(movie.options.length);
        rerender();
    } 
}

const RemoveSubmit = (e) =>{
    e.preventDefault();
    movie.options=[];
    rerender();
}

const onMakeDecision = (e) =>{
    const randomNum = Math.floor(Math.random() * movie.options.length);
    const option = movie.options[randomNum];
    alert(option);
    console.log(randomNum);
}

const rerender = () =>{
    const template = (
        <div>
            <h1>{movie.title ? movie.title : 'Anonymous Movie'}</h1>
            {movie.subtitle && <p>{movie.subtitle}</p>}
            {getoption(movie.options)}
            <p>{movie.options.length>0 ? 'Here are your options' : 'No options'}</p>
            <button disabled = {movie.options.length==0} onClick={onMakeDecision}>What should i do</button>
            <button onClick={RemoveSubmit}>Remove All</button>
            <ol>
            {
                movie.options.map((option)=>{
                    return <li key={option}>Option: {option}</li>
                })
            }
    
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
    
            
        </div>
    );
     
ReactDOM.render(template,appRoot);
}

// const numbers = [55,101,1000];






const appRoot = document.getElementById('app');
rerender();


