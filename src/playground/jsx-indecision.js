console.log('App.js is running!');
// JSX = JavaScript XML

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};


const onFormSubmit = (e) => {
	e.preventDefault();

	const optionValue = e.target.elements.option.value;
	if (optionValue) {
		app.options.push(optionValue);
		e.target.elements.option.value = '';
		renderApp();
	}
};
const onRemove = () => {
	app.options = [];
	renderApp();
};
const onMakeDecision = () => {
	const randomNumber = Math.floor(Math.random()*app.options.length);
	const option = app.options[randomNumber];
	alert(option);
}
const renderApp = () => {
const temp = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
		<p>{app.options.length}</p>
		<button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do First?</button>
		<ol>
			{
				app.options.map((optionVal) => <li key={optionVal}> {optionVal} </li>
			)}
		</ol>
		<form onSubmit={onFormSubmit}>
			<input type="text" name="option"/>
			<button>Add Option</button>
			<button onClick={onRemove}>Remove</button>

		</form>
	</div>
	); 

const appRoot = document.getElementById('app');

ReactDOM.render(temp,appRoot);
};

renderApp();