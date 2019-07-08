import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		optionss:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56],
		selectedOption: []
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ optionss:[]}));
	};

	handlePick = () => {
		let randomNumber = undefined;
		let randomOptionArr = [];
			for (let index = 0; index < 6; index++) {
				 randomNumber = Math.floor(Math.random()* this.state.optionss.length);
				 const randomOption = this.state.optionss[randomNumber];

				 randomOptionArr.push(randomOption);
							
				
			}
	
		
			this.setState(() => ({
					 selectedOption: [' '+randomOptionArr +' ']
				 }))
			// const randomOption = this.state.optionss[randomNumber];
			// // this.setState(() => ({selectedOption:(randomOption)}));
		
				
		
	};

	handleAddOption = (option) => {
		if (!option) {
			return 'Please enter valid value.';
		} else if (this.state.optionss.indexOf(option) > -1) {
			return 'Option already exist.'
		}
		this.setState((prevState) => ({ 
			optionss: prevState.optionss.concat(option) 
		}));

	};
	
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			optionss: prevState.optionss.filter((option) => optionToRemove !== option)
		}));
	};
	handleClearOption = () => {
		this.setState((prevState) => ({
			selectedOption: undefined
		}));

	};
	
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
 
	render() {
		const subtitle = 'Let the computer decide for you';

		return (
			<div>
				<Header subtitle={subtitle}/>
				<div className = "container">
					<Action 
						hasOptions = {this.state.optionss.length > 0}
						handlePick = {this.handlePick}
						/>
						<div className = "widget">
							<Options 
								optionss = {this.state.optionss}
								handleDeleteOptions = {this.handleDeleteOptions}
								handleDeleteOption = {this.handleDeleteOption}
								generatedNum = {this.state.selectedOption}
							/>
							{/* <AddOption 
								handleAddOption = {this.handleAddOption}
							/> */}

						</div>
					
				</div>
				<OptionModal 
					selectedOption = {this.state.selectedOption}
					handleClearOption = {this.handleClearOption}
				/>
			</div>
		);
	}
}
