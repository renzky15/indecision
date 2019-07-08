class IndecisionApp extends React.Component{
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			optionss: []
		};
	}
	componentDidMount() {
		
		try {
			const fetchTheJson = localStorage.getItem('allOption');
			const optionss = JSON.parse(fetchTheJson);

			if (optionss) {
				this.setState(() => ({optionss}) );
			} 
		} catch(e) {
			
		}
}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.optionss.length !== this.state.optionss.length) {
			const newJsonArr = JSON.stringify(this.state.optionss);
			localStorage.setItem('allOption', newJsonArr);
		}
		
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	handleDeleteOptions() {
		this.setState(() => ({ optionss:[]}));
	}
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			optionss: prevState.optionss.filter((option) => optionToRemove !== option)
		}));
	}
	handlePick() {
		
		const randomNumber = Math.floor(Math.random()* this.state.optionss.length);
		const randomOption = this.state.optionss[randomNumber];
		alert(randomOption);
	}
	handleAddOption(option) {
		if (!option) {
			return 'Please enter valid value.';
		} else if (this.state.optionss.indexOf(option) > -1) {
			return 'Option already exist.'
		}
		this.setState((prevState) => ({ 
			optionss: prevState.optionss.concat(option) 
		}));

	} 
	render() {
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle}/>
				<Action 
					hasOptions = {this.state.optionss.length > 0}
					handlePick = {this.handlePick}
					/>
				<Options 
					optionss = {this.state.optionss}
					handleDeleteOptions = {this.handleDeleteOptions}
					handleDeleteOption = {this.handleDeleteOption}
				/>
				<AddOption 
					handleAddOption = {this.handleAddOption}
				/>
				
			</div>
		);
	}
}


const Header = (props) => {
	return (
			<div>
				<h1>{props.title}</h1>
				{props.subtitle && <h2>{props.subtitle}</h2>}
			</div>
		);
};

Header.defaultProps = {
	title: 'Indecision App'
};
// class Header extends React.Component{
// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<h2>{this.props.subtitle}</h2>
// 			</div>
// 		);
// 	}
// }
// stateless based component
const Action = (props) => {
	return (
			<div>
				<button onClick = {props.handlePick} 
						disabled = {!props.hasOptions}
				>
				What should I do?
				</button>

			</div>
		);
	};

// Class based component
// class Action extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<button onClick = {this.props.handlePick} 
// 						disabled = {!this.props.hasOptions}
// 				>

// 				What should I do?
// 				</button>

// 			</div>
// 		);
// 	}
// }
const Options = (props) => {
	return (
			<div>
			<button onClick = {props.handleDeleteOptions}> Remove All</button>
				{props.optionss.length === 0 && <p>Please add option.</p>}
				{

					props.optionss.map((option) => (
					<Option 
						key = {option} 
						optionText = {option}
						handleDeleteOption = {props.handleDeleteOption}
					/>
						))
				}
					<Option />
			</div>
		);
};

const Option = (props) => {
	return (
			<div>
				{props.optionText}
				<button 
					onClick = {(e) => {
						props.handleDeleteOption(props.optionText);
					}}
					disabled = {!props.optionText}
				>
				Remove
				</button>
			</div>
		);
}; 

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) {
		e.preventDefault();

		const optionValue = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(optionValue);
		this.setState(() => ({error}));
		
		if (!error) {
			e.target.elements.option.value = '';
		}
	}

	render() {
		return (
			<div>
				{this.state.error && <p> {this.state.error} </p>}
				<form onSubmit = {this.handleAddOption}>
				<input type="text" name="option"/>
				<button>Add Option</button>
				</form>
			</div>
		);
	}
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));