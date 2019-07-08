class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility:false
		}
	}
	handleToggleVisibility(e) {
		e.preventDefault();
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility 
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility} id="btnHide" name ="btnName">{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
				{this.state.visibility && (
			<div>
				<p>Hey, These are some details you can now see!</p>
			</div>
		)}
			</div>
		);


	}
}
	ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// let visibility = false;
// const onShowDetails = (e) => {
// 	e.preventDefault();
// 	visibility = !visibility;
// 	renderBuildIt();
// 	// console.log(msg)
// }
// const renderBuildIt = () => {
// const temp = (
// 	<div>
// 		<h1>Visibility Toggle</h1>
// 		<button onClick={onShowDetails} id="btnHide" name ="btnName">{visibility ? 'Hide Details' : 'Show Details'}</button>
// 		{visibility && (
// 			<div>
// 				<p>Hey, These are some details you can now see!</p>
// 			</div>
// 		)}
// 	</div>

// );
// const appRoot = document.getElementById('app');

// ReactDOM.render(temp,appRoot);
// };
// renderBuildIt();