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
    options:['one','two']
}
const template = (
    <div>
        <h1>{movie.title ? movie.title : 'Anonymous Movie'}</h1>
        {movie.subtitle && <p>{movie.subtitle}</p>}
        {getoption(movie.options)}
        <p>{movie.options.length>0 ? 'Here are your options' : 'No options'}</p>
        <ol>
        <li>item one</li>
        <li>item two</li>
        <li>item three</li>
        </ol>
    </div>
);

const user = {
    name:'Andrew',
    age:26,
    location:'Penang'
}

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    }    
}

const userName = 'Choya';
const userAge = '27';
const userLocation = 'Melaka';
const templateTwo =(
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)



const appRoot = document.getElementById('app');
const appRoot2 = document.getElementById('app2');
ReactDOM.render(template,appRoot);
ReactDOM.render(templateTwo,appRoot2);