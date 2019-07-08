import React from 'react';
import Option from './Option';

const Options = (props) => (
	
			<div>
				<div className = "widget-header">
					<h3 className ="widget--title">Generated Numbers</h3>
					<button 
						className = "button button--link"
						onClick = {props.handleDeleteOptions}> 
						Remove All
					</button>
				</div>
		
				{props.optionss.length === 0 && <p className = "widget--message">Please add option.</p>}
				{

					
					<Option 
						key = {props.generatedNum} 
						// count = {index + 1}
						handleDeleteOption = {props.handleDeleteOption}
						generatedNum = {props.generatedNum}
						/>
					
						
				}
				
					
			</div>
		);


export default Options;