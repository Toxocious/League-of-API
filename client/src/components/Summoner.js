import React, { Component } from 'react';

// Main app styling.
import './Summoner.css';

// Main App Class.
export default class Summoner extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			summoner: {
				Name: props.match.params.summoner,
				Region: props.match.params.region,
			}
		};
	}

	render()
	{
		return (
			<div className='Summoner'>
				<h2>{ this.state.summoner.Name }</h2>
			</div>
		)
	}
}