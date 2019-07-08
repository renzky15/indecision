class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	componentDidMount() {
			const fetchCount = localStorage.getItem('count');
			const count = parseInt(fetchCount,10);
			// const count = JSON.parse(parseCount);
			
			if (!isNaN(count)) {
				this.setState(() => ({ count }) );
			} 
		
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
		}
	}
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};

		});
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}
	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick = {this.handleAddOne}>+1</button>
				<button onClick = {this.handleMinusOne}>-1</button>
				<button onClick = {this.handleReset}>reset</button>
			</div>
		);
	}
}


ReactDOM.render(<Counter/>, document.getElementById('app'));
// let cnt = 0;
// const addOne = () => {
// 	cnt++;
// 	renderCounterApp();
// };
// const minusOne = () => {
// 	cnt--;
// 	renderCounterApp();
// };
// const reset = () => {
// 	cnt = 0;
// 	renderCounterApp();
// };

// const renderCounterApp = () =>{
// const tempTwo = ( 
// 	<div>
// 		<h1>
// 			Count: {cnt}
// 		</h1>
// 		<button id="myId" className="button" onClick = {addOne} > +1 </button>
// 		<button id="myId" className="button" onClick = {minusOne} > -1 </button>
// 		<button id="myId" className="button" onClick = {reset} > Reset </button>
// 	</div>
// );
// 	ReactDOM.render(tempTwo, appRoot);
// };
// renderCounterApp();